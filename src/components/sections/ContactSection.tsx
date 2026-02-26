"use client";

import { motion } from "framer-motion";
import { ContactForm } from "../ui/ContactForm";
import { MapPin, Mail, Clock } from "lucide-react";

export function ContactSection() {
    return (
        <section id="contact" className="relative scroll-mt-32">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="w-full relative rounded-[3rem] p-8 md:p-16 overflow-hidden bg-white border border-zinc-200 shadow-2xl shadow-zinc-200/50"
            >
                {/* Animated Background Gradients shadow */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-yellow-400/10 to-transparent rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-red-500/10 to-transparent rounded-full blur-[100px]" />

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Left Side: Copy & Info */}
                    <div className="space-y-10">
                        <div>
                            <h2 className="text-sm font-bold tracking-widest uppercase text-yellow-500 mb-4 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
                                Let&apos;s Build Together
                            </h2>
                            <h3 className="text-4xl md:text-6xl font-bold font-outfit text-zinc-900 leading-tight mb-6">
                                Ready to dominate your market?
                            </h3>
                            <p className="text-lg text-zinc-600 leading-relaxed max-w-md">
                                Drop us a message or book a discovery call. Let&apos;s analyze your current digital footprint and map out a bespoke strategy for explosive growth.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 text-zinc-600 group">
                                <div className="w-12 h-12 rounded-full bg-yellow-50 flex items-center justify-center group-hover:bg-yellow-100 transition-colors shadow-sm">
                                    <Mail className="w-5 h-5 text-yellow-500" />
                                </div>
                                <div>
                                    <p className="text-sm text-zinc-500 uppercase tracking-wider font-semibold">Email Us</p>
                                    <p className="text-lg font-medium text-zinc-900 group-hover:text-yellow-600 transition-colors">shivathmaj@scalesocials.com</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 text-zinc-600 group">
                                <div className="w-12 h-12 rounded-full bg-yellow-50 flex items-center justify-center group-hover:bg-yellow-100 transition-colors shadow-sm">
                                    <Clock className="w-5 h-5 text-yellow-500" />
                                </div>
                                <div>
                                    <p className="text-sm text-zinc-500 uppercase tracking-wider font-semibold">Working Hours</p>
                                    <p className="text-lg font-medium text-zinc-900 group-hover:text-yellow-600 transition-colors">Available Mon-Fri, 9AM-6PM</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 text-zinc-600 group">
                                <div className="w-12 h-12 rounded-full bg-yellow-50 flex items-center justify-center group-hover:bg-yellow-100 transition-colors shadow-sm">
                                    <MapPin className="w-5 h-5 text-yellow-500" />
                                </div>
                                <div>
                                    <p className="text-sm text-zinc-500 uppercase tracking-wider font-semibold">Location</p>
                                    <p className="text-lg font-medium text-zinc-900 group-hover:text-yellow-600 transition-colors">Global Agency / Remote</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-yellow-400/5 rounded-3xl blur-xl -z-10" />
                        <div className="p-8 md:p-10 rounded-[2.5rem] bg-white border border-zinc-100 shadow-xl shadow-zinc-200/50">
                            <h4 className="text-2xl font-outfit font-bold text-zinc-900 mb-8">Request your consultation</h4>
                            <ContactForm />
                        </div>
                    </div>

                </div>
            </motion.div>
        </section>
    );
}
