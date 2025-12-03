import Link from "next/link";
import AuthForm from "@/components/AuthForm";
import SocialProviders from "@/components/SocialProviders";
import { signUp } from "@/lib/auth/actions";

export default function SignUpPage() {
    return (
        <div className="flex flex-col items-center w-full">
            <p className="text-body text-dark-700 mb-4">
                Already have an account?{" "}
                <Link href="/sign-in" className="text-black font-medium underline">
                    Sign In
                </Link>
            </p>

            <h2 className="text-heading-3 font-bold mb-2">Join Nike Today!</h2>
            <p className="text-body text-dark-500 mb-6 text-center">
                Create your account to start your fitness journey
            </p>

            <SocialProviders />

            <div className="relative w-full my-6">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-light-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-dark-500">Or sign up with</span>
                </div>
            </div>

            <AuthForm type="sign-up" onsubmit={signUp}   />

            <p className="mt-6 text-footnote text-dark-500 text-center max-w-xs">
                By signing up, you agree to our{" "}
                <Link href="#" className="underline">Terms of Service</Link> and{" "}
                <Link href="#" className="underline">Privacy Policy</Link>
            </p>
        </div>
    );
}
