import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/Navbar";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Scale Socials | Premium Digital Marketing Agency",
  description: "Scale Faster. Grow Smarter. Dominate Social. We help brands grow using data-driven digital marketing strategies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${outfit.variable} font-sans antialiased bg-white text-zinc-900 selection:bg-red-500/20 selection:text-black min-h-screen flex flex-col`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
