import Link from "next/link";
import AuthForm from "@/components/AuthForm";
import SocialProviders from "@/components/SocialProviders";
import { signIn } from "@/lib/auth/actions";

export default function SignInPage() {
    return (
        <div className="flex flex-col items-center w-full">
            <p className="text-body text-dark-700 mb-8">
                Don't have an account?{" "}
                <Link href="/sign-up" className="text-black font-medium underline">
                    Join Us
                </Link>
            </p>

            <h2 className="text-heading-3 font-bold mb-2">Welcome Back!</h2>
            <p className="text-body text-dark-500 mb-8 text-center">
                Sign in to access your personalized experience
            </p>

            <SocialProviders />

            <div className="relative w-full my-8">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-light-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-dark-500">Or sign in with</span>
                </div>
            </div>

            <AuthForm type="sign-in" onsubmit={signIn} />

            <p className="mt-8 text-footnote text-dark-500 text-center max-w-xs">
                By signing in, you agree to our{" "}
                <Link href="#" className="underline">Terms of Service</Link> and{" "}
                <Link href="#" className="underline">Privacy Policy</Link>
            </p>
        </div>
    );
}
