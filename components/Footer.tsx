import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    const footerLinks = {
        Featured: ['Air Force 1', 'Huarache', 'Air Max 90', 'Air Max 95'],
        Shoes: ['All Shoes', 'Custom Shoes', 'Jordan Shoes', 'Running Shoes'],
        Clothing: ['All Clothing', 'Modest Wear', 'Hoodies & Pullovers', 'Shirts & Tops'],
        "Kids'": ['Infant & Toddler Shoes', "Kids' Shoes", "Kids' Jordan Shoes", "Kids' Basketball Shoes"],
    };

    return (
        <footer className="bg-dark-900 px-6 py-12 text-light-100 font-jost">
            <div className="mx-auto max-w-7xl">
                {/* Top Section: Logo, Links, Social */}
                <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
                    {/* Logo */}
                    <div className="mb-8 lg:mb-0">
                        <Link href="/">
                            <Image
                                src="/logo.svg"
                                alt="Nike Logo"
                                width={60}
                                height={24}
                                className="brightness-0 invert"
                            />
                        </Link>
                    </div>

                    {/* Navigation Columns */}
                    <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:gap-16">
                        {Object.entries(footerLinks).map(([category, links]) => (
                            <div key={category}>
                                <h4 className="mb-4 text-body-medium font-medium text-light-100 uppercase">
                                    {category}
                                </h4>
                                <ul className="space-y-3">
                                    {links.map((link) => (
                                        <li key={link}>
                                            <Link
                                                href="#"
                                                className="text-footnote text-dark-500 hover:text-light-100 transition-colors"
                                            >
                                                {link}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Social Icons */}
                    <div className="flex gap-4 lg:ml-auto">
                        {['x', 'facebook', 'instagram'].map((social) => (
                            <Link
                                key={social}
                                href="#"
                                className="flex h-8 w-8 items-center justify-center rounded-full bg-light-100 hover:bg-dark-500 transition-colors"
                            >
                                <Image
                                    src={`/${social}.svg`}
                                    alt={social}
                                    width={16}
                                    height={16}
                                    className="h-4 w-4"
                                />
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-dark-700 pt-8 text-footnote text-dark-500 sm:flex-row sm:items-center">
                    <div className="flex items-center gap-2">
                        <span className="text-light-100">📍 United States</span>
                        <span>© 2025 Nike, Inc. All Rights Reserved</span>
                    </div>

                    <div className="flex flex-wrap gap-6">
                        <Link href="#" className="hover:text-light-100">Guides</Link>
                        <Link href="#" className="hover:text-light-100">Terms of Sale</Link>
                        <Link href="#" className="hover:text-light-100">Terms of Use</Link>
                        <Link href="#" className="hover:text-light-100">Nike Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
