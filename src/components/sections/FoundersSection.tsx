"use client";

import { motion } from "framer-motion";
import { FounderCard } from "../ui/FounderCard";

export function FoundersSection() {
    return (
        <section id="founders" className="relative scroll-mt-32">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
                {/* Left Content */}
                <div className="lg:w-1/3">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="sticky top-32"
                    >
                        <h2 className="text-sm font-bold tracking-widest uppercase text-yellow-500 mb-4 flex items-center gap-2">
                            <span className="w-8 h-px bg-yellow-500" />
                            The Visionaries
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-bold font-outfit text-zinc-900 leading-tight mb-6">
                            Meet the minds behind the growth.
                        </h3>
                        <p className="text-lg text-zinc-600 leading-relaxed mb-8">
                            Under their leadership, Scale Socials has transformed from a boutique agency into a global powerhouse for digital dominance. They bring years of relentless testing, millions in ad spend experience, and a network of top-tier talent.
                        </p>
                        <div className="flex gap-4 items-center">
                            <span className="w-12 h-px bg-yellow-500/50" />
                            <span className="text-sm font-medium text-yellow-600 uppercase tracking-widest">Leadership</span>
                        </div>
                    </motion.div>
                </div>

                {/* Right Cards */}
                <div className="lg:w-2/3 w-full grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <FounderCard
                            name="Shivathmaj Shenoy"
                            role="Co-Founder & CEO"
                            bio="Visionary leader predicting market trends and building high-impact scaling strategies for 8-figure brands."
                            imageSrc="/shiva.png"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="md:mt-16"
                    >
                        <FounderCard
                            name="Rohan Pai"
                            role="Co-Founder & CMO"
                            bio="Operations and production lead managing projects from concept to delivery with high-performing execution."
                            imageSrc="/rohan.jpg"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
