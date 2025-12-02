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
                        className="h-auto w-auto"
                        priority
                    />
                </Link>

                {/* Desktop Links */}
                <div className="hidden items-center gap-8 lg:flex">
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

                {/* Right Actions */}
                <div className="hidden items-center gap-6 lg:flex">
                    <button className="text-body-medium font-medium hover:text-dark-700 transition-colors">
                        Search
                    </button>
                    <button className="text-body-medium font-medium hover:text-dark-700 transition-colors">
                        My Cart (2)
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden p-2"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? (
                        <Image src="/x.svg" alt="Close" width={24} height={24} />
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="h-6 w-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="absolute left-0 top-20 w-full bg-light-100 px-6 py-4 shadow-lg lg:hidden">
                    <div className="flex flex-col space-y-4">
                        {['Men', 'Women', 'Kids', 'Collections', 'Contact'].map((item) => (
                            <Link
                                key={item}
                                href="#"
                                className="text-body font-medium hover:text-dark-700"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item}
                            </Link>
                        ))}
                        <hr className="border-light-300" />
                        <button className="text-left text-body font-medium hover:text-dark-700">
                            Search
                        </button>
                        <button className="text-left text-body font-medium hover:text-dark-700">
                            My Cart (2)
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}
