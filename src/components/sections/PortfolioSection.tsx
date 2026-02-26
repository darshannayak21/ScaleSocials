"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import { ChevronLeft, ChevronRight } from "lucide-react";

// Placeholder videos - user must add these to the public folder
const videos = [
    "/portfolio-1.mp4",
    "/portfolio-2.mp4",
    "/portfolio-3.mp4",
    "/portfolio-4.mp4",
    "/portfolio-5.mp4",
    "/portfolio-6.mp4",
    "/portfolio-7.mp4"

];

export function PortfolioSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % videos.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
    };

    return (
        <section id="portfolio" className="relative scroll-mt-32 py-16">
            <div className="flex flex-col items-center justify-center text-center gap-4 mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-sm font-bold tracking-widest uppercase text-yellow-500 flex items-center gap-2"
                >
                    <span className="w-8 h-px bg-yellow-500" />
                    Our Work
                    <span className="w-8 h-px bg-yellow-500" />
                </motion.h2>
                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-4xl md:text-5xl font-bold font-outfit text-zinc-900 leading-tight"
                >
                    See Our Campaigns in Action
                </motion.h3>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-zinc-500 max-w-lg mt-4"
                >
                    Scroll through our latest high-performing video creatives designed for viral reach and maximum conversion.
                </motion.p>
            </div>

            <div className="relative w-full max-w-sm mx-auto flex items-center justify-center">

                {/* Previous Button */}
                <button
                    onClick={handlePrev}
                    className="absolute left-0 md:-left-20 lg:-left-24 z-40 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 backdrop-blur-sm border border-zinc-200 shadow-xl flex items-center justify-center text-zinc-600 hover:text-yellow-500 hover:border-yellow-400 transition-all hover:scale-110"
                    aria-label="Previous video"
                >
                    <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 -ml-0.5" />
                </button>

                {/* Phone Frame */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, type: "spring" }}
                    className="relative w-[320px] h-[650px] bg-zinc-900 rounded-[3rem] p-3 shadow-2xl border-[6px] border-zinc-800"
                >
                    {/* Notch/Dynamic Island Mockup */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-zinc-900 rounded-b-3xl z-30"></div>

                    {/* Stories Progress Bars */}
                    <div className="absolute top-6 left-0 right-0 px-6 flex gap-2 z-20">
                        {videos.map((_, idx) => (
                            <div key={idx} className="h-1 flex-1 bg-white/30 rounded-full overflow-hidden">
                                <motion.div
                                    className="h-full bg-white"
                                    initial={{ width: currentIndex > idx ? "100%" : "0%" }}
                                    animate={{ width: currentIndex === idx ? "100%" : currentIndex > idx ? "100%" : "0%" }}
                                    transition={{ duration: currentIndex === idx ? 15 : 0.3, ease: "linear" }}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Video Player container */}
                    <div className="relative w-full h-full bg-zinc-950 rounded-[2.25rem] overflow-hidden flex items-center justify-center">
                        <video
                            key={currentIndex}
                            src={videos[currentIndex]}
                            autoPlay
                            muted
                            playsInline
                            onEnded={handleNext}
                            className="absolute inset-0 w-full h-full object-contain"
                        >
                            <source src={videos[currentIndex]} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>

                        {/* Video overlay gradient for better UI visibility */}
                        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/50 to-transparent pointer-events-none" />
                        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />

                        {/* Bottom Info Overlay */}
                        <div className="absolute bottom-6 left-6 right-6 z-20 text-white">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-500 to-red-500 p-[2px]">
                                    <div className="w-full h-full rounded-full bg-zinc-900 flex items-center justify-center font-bold text-xs">
                                        SS
                                    </div>
                                </div>
                                <span className="font-semibold tracking-wide text-sm shadow-sm">@scale.socials</span>
                            </div>
                            <p className="text-sm text-zinc-200 line-clamp-2">
                                Check our high-converting latest campaign creative.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Next Button */}
                <button
                    onClick={handleNext}
                    className="absolute right-0 md:-right-20 lg:-right-24 z-40 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 backdrop-blur-sm border border-zinc-200 shadow-xl flex items-center justify-center text-zinc-600 hover:text-yellow-500 hover:border-yellow-400 transition-all hover:scale-110"
                    aria-label="Next video"
                >
                    <ChevronRight className="w-5 h-5 md:w-6 md:h-6 ml-0.5" />
                </button>

            </div>
        </section>
    );
}
