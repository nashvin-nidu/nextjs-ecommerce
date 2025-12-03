import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import GuestSessionInitializer from "@/components/GuestSessionInitializer";

const jost = Jost({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nike",
  description: "A E-commerce Website For Nike",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jost.className} antialiased`}
      >
        <GuestSessionInitializer />
        {children}
      </body>
    </html>
  );
}