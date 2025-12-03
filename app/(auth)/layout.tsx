import Image from "next/image";

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex h-screen w-full overflow-hidden">
            {/* Left Side - Branding */}
            <div className="hidden lg:flex w-1/2 bg-dark-900 text-white flex-col justify-center px-12 relative">
                {/* Logo - Top Left */}
                <div className="absolute top-8 left-12 bg-white w-12 h-12 rounded-xl flex items-center justify-center z-20">
                    <Image
                        src="/logo.svg"
                        alt="Nike Logo"
                        width={24}
                        height={24}
                        className="brightness-0"
                    />
                </div>

                <div className="z-10 max-w-md">
                    <h1 className="text-heading-2 mb-6">Just Do It</h1>
                    <p className="text-lead text-dark-500 mb-8">
                        Join millions of athletes and fitness enthusiasts who trust Nike for
                        their performance needs.
                    </p>
                    <div className="flex gap-2">
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                        <div className="w-2 h-2 rounded-full bg-dark-700"></div>
                        <div className="w-2 h-2 rounded-full bg-dark-700"></div>
                    </div>
                </div>
                <div className="absolute bottom-8 left-12 text-footnote text-dark-500">
                    © 2024 Nike. All rights reserved.
                </div>
            </div>

            {/* Right Side - Form */}
            <div className="w-full lg:w-1/2 flex p-8 bg-white h-full relative overflow-y-auto">
                <div className="w-full max-w-md m-auto">{children}</div>
            </div>
        </div>
    );
}
