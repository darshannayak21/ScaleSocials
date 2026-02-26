"use client";

import { motion } from "framer-motion";
import { TestimonialCarousel } from "../ui/TestimonialCarousel";
import { Star } from "lucide-react";

export function TestimonialsSection() {
    return (
        <section id="testimonials" className="relative scroll-mt-32 w-full py-12">
            {/* Background styling for depth */}
            <div className="absolute inset-0 bg-zinc-50 rounded-[3rem] border border-zinc-200 overflow-hidden -z-10 shadow-inner">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-500/5 rounded-full blur-[120px] mix-blend-multiply" />
            </div>

            <div className="text-center mb-16 pt-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="flex justify-center gap-1 mb-6"
                >
                    {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                    ))}
                </motion.div>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-4xl md:text-5xl font-bold font-outfit text-zinc-900 leading-tight"
                >
                    Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-yellow-500">visionary leaders.</span>
                </motion.h2>
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <TestimonialCarousel />
            </motion.div>
        </section>
    );
}
