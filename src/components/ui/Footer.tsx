"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Twitter, Instagram, Linkedin, Mail } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/scale.socials/" },
        { name: "Twitter", icon: Twitter, href: "#" },
        { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/company/scale-socials/" },
    ];

    const quickLinks = [
        { name: "Home", href: "#home" },
        { name: "About Us", href: "#about" },
        { name: "Services", href: "#services" },
        { name: "Portfolio", href: "#portfolio" },
        { name: "FAQs", href: "#faqs" },
        { name: "Blog", href: "/blog" },
    ];

    return (
        <footer className="relative mt-32 border-t border-zinc-200 overflow-hidden bg-zinc-50 pb-8 pt-24 text-zinc-600 w-full flex justify-center">
            {/* Background gradients */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container px-6 flex flex-col items-center w-full max-w-6xl z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 lg:gap-16 w-full mb-16">

                    {/* Brand Column */}
                    <div className="col-span-1 md:col-span-2 space-y-6">
                        <Link href="/" className="inline-block">
                            <span className="text-3xl font-outfit font-bold tracking-tighter text-yellow-500">
                                Scale.<span className="text-zinc-900">Socials</span>
                            </span>
                        </Link>
                        <p className="text-zinc-500 max-w-sm leading-relaxed text-sm md:text-base">
                            A holistic content approach for coaches, consultants, and creators to elevate their brand and boost engagement.
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((social) => (
                                <motion.a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ y: -3, scale: 1.1 }}
                                    className="w-10 h-10 rounded-full bg-white border border-zinc-200 flex items-center justify-center hover:border-yellow-400 hover:text-yellow-500 transition-colors text-zinc-500 shadow-sm"
                                >
                                    <social.icon className="w-5 h-5" />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h4 className="text-zinc-900 font-bold font-outfit text-lg">Quick Links</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-zinc-500 hover:text-yellow-500 transition-colors text-sm font-medium"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact info */}
                    <div className="space-y-6">
                        <h4 className="text-zinc-900 font-bold font-outfit text-lg">Get in Touch</h4>
                        <ul className="space-y-4">
                            <li>
                                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=shivathmaj@scalesocials.com" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-zinc-500 hover:text-zinc-900 transition-colors text-sm font-medium">
                                    <span className="w-8 h-8 rounded-full bg-white border border-zinc-200 flex items-center justify-center group-hover:border-yellow-400 group-hover:text-yellow-500 transition-colors">
                                        <Mail className="w-4 h-4" />
                                    </span>
                                    shivathmaj@scalesocials.com
                                </a>
                            </li>
                            <li>
                                <div className="mt-6">
                                    <p className="font-outfit font-bold text-zinc-900 mb-2">Ready to scale?</p>
                                    <a href="https://tidycal.com/shivathmajshenoy/scalesocials" target="_blank" rel="noopener noreferrer" className="inline-block w-full py-3 px-6 rounded-xl bg-gradient-to-r from-yellow-500 to-red-500 text-white font-semibold text-center hover:shadow-lg hover:shadow-yellow-500/20 transition-all text-sm">
                                        Book a Call
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="w-full pt-8 border-t border-zinc-200 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-zinc-500 font-medium">
                        © {currentYear} scalesocials.com. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-zinc-500 font-medium">
                        <Link href="#" className="hover:text-zinc-900 transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-zinc-900 transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
