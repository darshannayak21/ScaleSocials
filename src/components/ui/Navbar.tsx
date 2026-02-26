"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const links = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Founders", href: "#founders" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQs", href: "#faqs" },
];

export function Navbar() {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [active, setActive] = useState("Home");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    return (
        <motion.nav
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4"
        >
            <div className="glass rounded-full px-6 py-3 flex items-center justify-between w-full max-w-5xl shadow-sm border border-black/5 bg-white/80">
                <Link
                    href="#home"
                    className="text-xl font-outfit font-bold tracking-tighter text-yellow-500"
                    onClick={() => setActive("Home")}
                >
                    Scale.<span className="text-zinc-900">Socials</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-1">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setActive(link.name)}
                            className="relative px-4 py-2 text-sm font-medium transition-colors hover:text-black text-zinc-500 font-sans"
                        >
                            {active === link.name && (
                                <motion.div
                                    layoutId="active-nav"
                                    className="absolute inset-0 bg-yellow-400/20 rounded-full"
                                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                />
                            )}
                            <span className="relative z-10">{link.name}</span>
                        </Link>
                    ))}
                </div>

                <div className="hidden md:block">
                    <Link href="#contact" className="relative group overflow-hidden rounded-full p-[1px] inline-flex">
                        <span className="absolute inset-0 bg-gradient-to-r from-yellow-500 via-yellow-400 to-red-500 rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-300"></span>
                        <div className="relative bg-white px-5 py-2 rounded-full flex items-center gap-2 group-hover:bg-white/90 transition-colors duration-300">
                            <span className="text-sm font-semibold text-zinc-900">Let&apos;s Talk</span>
                        </div>
                    </Link>
                </div>

                {/* Mobile Nav Toggle */}
                <button
                    className="md:hidden text-zinc-900 p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? "✕" : "☰"}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-24 left-4 right-4 glass rounded-2xl p-4 flex flex-col gap-2 md:hidden bg-white/95"
                >
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => {
                                setActive(link.name);
                                setIsMobileMenuOpen(false);
                            }}
                            className={cn(
                                "px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                                active === link.name ? "bg-yellow-400/20 text-yellow-600" : "text-zinc-600 hover:text-black hover:bg-zinc-100"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="#contact"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="mt-2 bg-gradient-to-r from-yellow-500 to-red-500 px-4 py-3 rounded-xl text-sm font-semibold text-white text-center shadow-md"
                    >
                        Let&apos;s Talk
                    </Link>
                </motion.div>
            )}
        </motion.nav>
    );
}
