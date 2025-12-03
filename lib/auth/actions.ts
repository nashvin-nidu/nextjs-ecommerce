"use server";

import { z } from "zod";
import { auth } from "./auth";
import { cookies } from "next/headers";
import { db } from "@/lib/db";
import { guests } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import { headers } from "next/headers";

const signUpSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email"),
    password: z.string().min(8, "Password must be at least 8 characters"),
});

const signInSchema = z.object({
    email: z.string().email("Invalid email"),
    password: z.string().min(1, "Password is required"),
});

export async function signUp(formData: FormData) {
    const data = Object.fromEntries(formData.entries());
    const parsed = signUpSchema.safeParse(data);

    if (!parsed.success) {
        return { error: parsed.error.flatten().fieldErrors };
    }

    const { name, email, password } = parsed.data;

    try {
        const user = await auth.api.signUpEmail({
            body: {
                name,
                email,
                password,
            },
        });

        // Migrate guest session if exists
        await mergeGuestCartWithUserCart();

        return { success: true, user };
    } catch (error: any) {
        return { error: error.message || "Something went wrong" };
    }
}

export async function signIn(formData: FormData) {
    const data = Object.fromEntries(formData.entries());
    const parsed = signInSchema.safeParse(data);

    if (!parsed.success) {
        return { error: parsed.error.flatten().fieldErrors };
    }

    const { email, password } = parsed.data;

    try {
        const response = await auth.api.signInEmail({
            body: {
                email,
                password,
            },
        });

        // Migrate guest session if exists
        await mergeGuestCartWithUserCart();

        return { success: true };
    } catch (error: any) {
        return { error: error.message || "Invalid credentials" };
    }
}

export async function getCurrentUser() {
    try {
        const session = await auth.api.getSession({
        headers: await headers(),
        });
        return session?.user ?? null;
    }
    catch (error: any) {
        return { error: error.message || "Something went wrong" };
    }
}

export async function signOut() {
    await auth.api.signOut({
        headers: await headers(),
    });
    redirect("/sign-in");
}

export async function createGuestSession() {
    const cookieStore = await cookies();
    const existingGuestToken = cookieStore.get("guest_session")?.value;

    if (existingGuestToken) {
        return existingGuestToken;
    }

    const sessionToken = crypto.randomUUID();
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days

    await db.insert(guests).values({
        sessionToken,
        expiresAt,
    });

    cookieStore.set("guest_session", sessionToken, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        path: "/",
        expires: expiresAt,
    });

    return sessionToken;
}

export async function guestSession() {
    const cookieStore = await cookies();
    const token = cookieStore.get("guest_session")?.value;
    return token || null;
}

export async function mergeGuestCartWithUserCart() {
    const cookieStore = await cookies();
    const guestToken = cookieStore.get("guest_session")?.value;

    if (!guestToken) return;

    // Placeholder for cart migration logic
    console.log(`Migrating guest cart for token: ${guestToken}`);

    // Remove guest session from DB
    await db.delete(guests).where(eq(guests.sessionToken, guestToken));

    // Remove cookie
    cookieStore.delete("guest_session");
}
