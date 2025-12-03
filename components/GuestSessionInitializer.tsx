"use client";

import { useEffect } from "react";
import { createGuestSession } from "@/lib/auth/actions";

export default function GuestSessionInitializer() {
    useEffect(() => {
        const initSession = async () => {
            await createGuestSession();
        };
        initSession();
    }, []);

    return null;
}
