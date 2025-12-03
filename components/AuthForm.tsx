"use client";

import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useRouter } from "next/navigation";

interface AuthFormProps {
    type: "sign-in" | "sign-up";
    onsubmit: (formData: FormData) => Promise<{ success?: boolean; error?: any; userid?: string } | void>;
}

export default function AuthForm({ type, onsubmit }: AuthFormProps) {
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        try {
            const result = await onsubmit(formData);
            if (result?.success) {
                router.push("/");
            }
        } catch (e) {
            console.error('Error', e)
        }
    }

    return (
        <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit}>
            {type === "sign-up" && (
                <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-body-medium font-medium">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        className="w-full border border-light-300 rounded-lg px-4 py-3 text-body focus:outline-none focus:border-black transition-colors"
                    />
                </div>
            )}

            <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-body-medium font-medium">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="johndoe@gmail.com"
                    className="w-full border border-light-300 rounded-lg px-4 py-3 text-body focus:outline-none focus:border-black transition-colors"
                />
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="password" className="text-body-medium font-medium">
                    Password
                </label>
                <div className="relative">
                    <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        placeholder={type === "sign-up" ? "minimum 8 characters" : "Enter your password"}
                        className="w-full border border-light-300 rounded-lg px-4 py-3 text-body focus:outline-none focus:border-black transition-colors pr-12"
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-dark-500 hover:text-dark-900"
                    >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                </div>
            </div>

            <button
                type="submit"
                className="w-full bg-dark-900 text-white rounded-full py-4 text-body-medium font-medium hover:bg-black/90 transition-colors mt-2"
            >
                {type === "sign-in" ? "Sign In" : "Sign Up"}
            </button>
        </form>
    );
}
