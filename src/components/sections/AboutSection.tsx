"use client";

import { motion } from "framer-motion";
import { StatCounter } from "../ui/StatCounter";
import { GlassCard } from "../ui/GlassCard";

export function AboutSection() {
    return (
        <section id="about" className="relative scroll-mt-32">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
                {/* Left Content */}
                <div className="lg:w-1/2 space-y-8">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-sm font-bold tracking-widest uppercase text-yellow-500 mb-4 flex items-center gap-2">
                            <span className="w-8 h-px bg-yellow-500" />
                            About Scale Socials
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-bold font-outfit text-zinc-900 leading-tight">
                            We engineer growth for the modern digital era.
                        </h3>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg text-zinc-600 leading-relaxed"
                    >
                        We don’t just edit videos, we build content systems.
                        Our studio blends AI production, cinematic editing and high-end post production to help creators and brands produce premium video content at scale.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-lg text-zinc-600 leading-relaxed"
                    >
                        From long-form storytelling to viral short-form content, we handle everything, scripting, production, editing, motion graphics and thumbnails.
                        Whether you're a creator, coach, brand or startup, we help you turn ideas into high-performing content.
                    </motion.p>

                    {/* Tools Strip Container */}
                    <div className="pt-6 mt-8 border-t border-zinc-200/60 overflow-hidden relative w-[80vw] lg:w-full -ml-[1rem] pl-[1rem] mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)">
                        <p className="text-xs uppercase tracking-widest text-zinc-400 font-semibold mb-4">
                            Tools & AI we use
                        </p>
                        <div className="flex w-max relative whitespace-nowrap items-center">
                            <motion.div
                                animate={{ x: [0, -1000] }}
                                transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                                className="flex gap-x-3 items-center text-sm font-medium text-zinc-500 pr-3"
                            >
                                {["Freepik", "•", "Pixabay", "•", "Veo 3", "•", "NanoBanana", "•", "Seedance", "•", "Kling", "•", "After Effects", "•", "Premiere Pro"].map((item, idx) => (
                                    <span key={`first-${idx}`} className={item === "•" ? "text-yellow-500/50" : ""}>
                                        {item}
                                    </span>
                                ))}
                            </motion.div>
                            <motion.div
                                animate={{ x: [0, -1000] }}
                                transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                                className="flex gap-x-3 items-center text-sm font-medium text-zinc-500 pr-3 absolute left-[100%]"
                            >
                                {["Freepik", "•", "Pixabay", "•", "Veo 3", "•", "NanoBanana", "•", "Seedance", "•", "Kling", "•", "After Effects", "•", "Premiere Pro"].map((item, idx) => (
                                    <span key={`second-${idx}`} className={item === "•" ? "text-yellow-500/50" : ""}>
                                        {item}
                                    </span>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Right Stats Card */}
                <div className="lg:w-1/2 w-full">
                    <GlassCard delay={0.4} className="p-8 md:p-12 relative overflow-visible shadow-lg">
                        {/* Glowing Accent */}
                        <div className="absolute -top-12 -right-12 w-32 h-32 bg-yellow-400/20 rounded-full blur-[40px] z-0" />
                        <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-red-500/10 rounded-full blur-[40px] z-0" />

                        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 divide-y md:divide-y-0 md:divide-x divide-zinc-200">
                            <StatCounter
                                value={150}
                                suffix="+"
                                label="Clients Served"
                                delay={0.5}
                                className="pt-0 md:pt-6"
                            />
                            <StatCounter
                                value={50}
                                suffix="M+"
                                label="Campaign Reach"
                                delay={0.7}
                                className="pt-8 md:pt-6"
                            />
                            <StatCounter
                                value={300}
                                suffix="%"
                                label="Avg ROI Growth"
                                delay={0.9}
                                className="pt-8 md:pt-0"
                            />
                            <div className="pt-8 md:pt-0 flex flex-col items-center justify-center p-6 text-center">
                                <div className="text-4xl flex items-center h-[72px] text-yellow-500 font-bold drop-shadow-sm">
                                    🚀
                                </div>
                                <p className="text-zinc-500 font-medium uppercase tracking-wider text-sm">
                                    Scale With Us
                                </p>
                            </div>
                        </div>
                    </GlassCard>
                </div>
            </div>
        </section>
    );
}
