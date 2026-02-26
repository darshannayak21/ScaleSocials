"use client";

import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, Users, Zap } from "lucide-react";

const features = [
    {
        title: "Data-Driven Precision",
        description: "Every decision, from creative angles to bidding strategies, is backed by hard numbers, not gut feelings.",
        icon: TrendingUp,
    },
    {
        title: "High-End Creative Execution",
        description: "We don't just run ads; we produce scroll-stopping assets that command attention and elevate brand perception.",
        icon: Zap,
    },
    {
        title: "ROI-Obsessed Optimization",
        description: "Likes and views are vanity metrics. We focus entirely on lowering CPA and increasing your bottom line.",
        icon: CheckCircle2,
    },
    {
        title: "Dedicated Growth Experts",
        description: "You get direct access to a team of specialists who treat your business capital like their own.",
        icon: Users,
    },
];

export function WhyChooseUsSection() {
    return (
        <section id="why-us" className="relative scroll-mt-32">
            <div className="flex flex-col lg:flex-row gap-16 items-center">

                {/* Left Side: Comparison/Visual */}
                <div className="lg:w-1/2 w-full">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="relative rounded-[2.5rem] p-8 md:p-12 bg-zinc-900 overflow-hidden group shadow-2xl"
                    >
                        {/* Glowing orb in dark card for contrast */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-400/20 rounded-full blur-[80px] group-hover:scale-150 transition-transform duration-1000" />

                        <div className="relative z-10 flex flex-col gap-8">
                            <h3 className="text-3xl font-bold font-outfit text-white">Traditional Agencies</h3>
                            <ul className="space-y-4 text-zinc-400 opacity-80">
                                <li className="flex items-center gap-3"><span className="text-yellow-500">✕</span> Guesswork & Templates</li>
                                <li className="flex items-center gap-3"><span className="text-yellow-500">✕</span> Focus on Vanity Metrics</li>
                                <li className="flex items-center gap-3"><span className="text-yellow-500">✕</span> Slow Turnarounds</li>
                            </ul>

                            <div className="w-full h-px bg-white/10 my-4" />

                            <h3 className="text-4xl font-bold font-outfit text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-400">
                                Scale Socials
                            </h3>
                            <ul className="space-y-4 text-white font-medium">
                                <li className="flex items-center gap-3"><span className="text-green-400">✓</span> Blueprint-Driven Growth</li>
                                <li className="flex items-center gap-3"><span className="text-green-400">✓</span> Obsessive ROI Tracking</li>
                                <li className="flex items-center gap-3"><span className="text-green-400">✓</span> Agile & Aggressive Scaling</li>
                            </ul>
                        </div>
                    </motion.div>
                </div>

                {/* Right Side: Features */}
                <div className="lg:w-1/2 w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-sm font-bold tracking-widest uppercase text-yellow-500 mb-4 flex items-center gap-2">
                            <span className="w-8 h-px bg-yellow-500" />
                            The Scale Advantage
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-bold font-outfit text-zinc-900 leading-tight mb-8">
                            Why industry leaders choose us.
                        </h3>
                    </motion.div>

                    <div className="space-y-8 mt-12">
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                className="flex gap-6 group"
                            >
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center border border-zinc-100 shadow-sm group-hover:border-yellow-400/50 group-hover:shadow-[0_0_20px_rgba(250,204,21,0.15)] transition-all duration-300">
                                        <feature.icon className="w-6 h-6 text-yellow-500 group-hover:text-yellow-600 transition-colors" />
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold font-outfit text-zinc-900 mb-2 group-hover:text-yellow-500 transition-colors">
                                        {feature.title}
                                    </h4>
                                    <p className="text-zinc-600 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
