// import { Button } from "@/components/ui/button";
import { FaGoogle, FaApple } from "react-icons/fa";

export default function SocialProviders() {
    return (
        <div className="flex flex-col gap-4 w-full">
            <button className="flex items-center justify-center gap-3 w-full border border-light-300 rounded-lg py-3 hover:bg-light-200 transition-colors">
                <FaGoogle className="w-5 h-5" />
                <span className="text-body-medium font-medium">Continue with Google</span>
            </button>
            <button className="flex items-center justify-center gap-3 w-full border border-light-300 rounded-lg py-3 hover:bg-light-200 transition-colors">
                <FaApple className="w-5 h-5" />
                <span className="text-body-medium font-medium">Continue with Apple</span>
            </button>
        </div>
    );
}
