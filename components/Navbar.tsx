"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-light-100 text-dark-900 sticky top-0 z-50 w-full border-b border-light-300 font-jost">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-12">
                {/* Logo */}
                <Link href="/" className="flex-shrink-0">
                    <Image
                        src="/logo.svg"
                        alt="Logo"
                        width={60}
                        height={24}
                        className="h-auto w-auto brightness-0"
                        priority
                    />
                </Link>

                {/* Desktop Links - Centered */}
                <div className="hidden absolute left-1/2 -translate-x-1/2 items-center gap-8 lg:flex">
                    {['Men', 'Women', 'Kids', 'Collections', 'Contact'].map((item) => (
                        <Link
                            key={item}
                            href="#"
                            className="text-body-medium font-medium hover:text-dark-700 transition-colors"
                        >
                            {item}
                        </Link>
                    ))}
                </div>

                {/* Right Actions - Desktop & Mobile */}
                <div className="flex items-center gap-4 lg:gap-6">
                    <button className="text-body-medium font-medium hover:text-dark-700 transition-colors">
                        Search
                    </button>
                    <button className="text-body-medium font-medium hover:text-dark-700 transition-colors">
                        My Cart (2)
                    </button>

                    {/* Mobile Menu Button (Hidden based on image, but kept for fallback/standard mobile UX if needed, though image suggests just Search/Cart) */}
                    {/* Based on user request "same as image provided in sm", the image ONLY shows Logo, Search, My Cart. 
              So I will hide the hamburger for now to strictly match the image, or keep it if "same as image" implies the visible parts. 
              The image shows Logo (left) and Search + My Cart (right). No hamburger. 
              I will remove the hamburger to match the image exactly. */}
                </div>
            </div>
        </nav>
    );
}
