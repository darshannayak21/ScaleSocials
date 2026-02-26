"use client";

import { motion } from "framer-motion";
import { MagneticButton } from "../ui/MagneticButton";
import { ArrowRight, PlayCircle } from "lucide-react";

export function HeroSection() {
    return (
        <section id="home" className="relative min-h-screen w-full flex flex-col items-center justify-center pt-20 overflow-hidden bg-white">
            {/* Dynamic Backgrounds */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-red-500/10 rounded-full blur-[120px] mix-blend-multiply pointer-events-none animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-yellow-400/10 rounded-full blur-[100px] mix-blend-multiply pointer-events-none" />

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[url('/grid-light.svg')] bg-center [mask-image:linear-gradient(180deg,black,rgba(0,0,0,0))] opacity-5 pointer-events-none" />

            <div className="container px-4 z-10 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-zinc-200 mb-8"
                >
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-sm font-medium text-zinc-600">Accepting new clients for {new Date().getFullYear()}</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                    className="text-6xl md:text-8xl font-bold font-outfit tracking-tighter max-w-5xl leading-[1.1]"
                >
                    <span className="block text-zinc-900">Scale Faster.</span>
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-orange-400 to-red-500 drop-shadow-sm">
                        Grow Smarter.
                    </span>
                    <span className="block text-zinc-900">Dominate Social.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="mt-8 text-lg md:text-xl text-zinc-600 max-w-2xl leading-relaxed"
                >
                    We help ambitious brands grow using data-driven digital marketing strategies.
                    Stop guessing and start scaling with a team of experts dedicated to your ROI.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    className="mt-12 flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto"
                >
                    <MagneticButton variant="primary" onClick={() => document.getElementById("contact")?.scrollIntoView()}>
                        Get Started <ArrowRight className="w-4 h-4 ml-1" />
                    </MagneticButton>
                    <MagneticButton variant="outline" onClick={() => document.getElementById("portfolio")?.scrollIntoView()}>
                        <PlayCircle className="w-4 h-4 mr-1 text-yellow-500" /> View Our Work
                    </MagneticButton>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-400"
                >
                    <span className="text-xs font-semibold uppercase tracking-widest text-zinc-500">Scroll</span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                        className="w-5 h-8 border-2 border-zinc-300 rounded-full flex justify-center p-1"
                    >
                        <div className="w-1 h-2 bg-yellow-400 rounded-full" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
