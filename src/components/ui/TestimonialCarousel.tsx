"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
    id: number;
    name: string;
    role: string;
    content: string;
    company?: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "CEO of Funnel Digitals",
        role: "Client",
        content: "Our experience was great! We're going to be using him for everything that we do from now on! Exceptional to work with and very punctual. He will deliver exactly what you want how you want and is so easy to work with."
    },
    {
        id: 2,
        name: "CEO of UNI media",
        role: "Client",
        content: "Reviewed it, Vaibhav! Looks awesome! I'm so proud of how this has turned out! Great job, man! 🙌🏻"
    },
    {
        id: 3,
        name: "CEO of Apptuitive.tech",
        role: "Client",
        content: "Hey Shiv, Great stuff! I love the videos you guys have put out. I'm looking forward to a long-term collaboration."
    }
];

export function TestimonialCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setDirection(1);
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 100 : -100,
            opacity: 0,
            scale: 0.95
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 100 : -100,
            opacity: 0,
            scale: 0.95
        })
    };

    const paginate = (newDirection: number) => {
        setDirection(newDirection);
        setCurrentIndex((prev) => {
            let nextIndex = prev + newDirection;
            if (nextIndex < 0) nextIndex = testimonials.length - 1;
            if (nextIndex >= testimonials.length) nextIndex = 0;
            return nextIndex;
        });
    };

    return (
        <div className="relative w-full max-w-4xl mx-auto h-[400px] md:h-[300px] flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-between z-20 px-4 md:-mx-12">
                <button
                    onClick={() => paginate(-1)}
                    className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-zinc-50 border border-zinc-100 transition-colors text-zinc-600 hover:text-red-500"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                    onClick={() => paginate(1)}
                    className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-zinc-50 border border-zinc-100 transition-colors text-zinc-600 hover:text-red-500"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>

            <div className="relative w-full h-full overflow-hidden flex items-center justify-center px-12">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                    <motion.div
                        key={currentIndex}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.4 }
                        }}
                        className="absolute w-full flex flex-col items-center text-center max-w-2xl px-4"
                    >
                        <Quote className="w-12 h-12 text-red-500/20 mb-6" />
                        <p className="text-xl md:text-2xl font-medium text-zinc-800 leading-relaxed mb-8">
                            &quot;{testimonials[currentIndex].content}&quot;
                        </p>
                        <div>
                            <h4 className="font-bold text-lg font-outfit text-red-600">
                                {testimonials[currentIndex].name}
                            </h4>
                            <p className="text-zinc-500 text-sm">
                                {testimonials[currentIndex].role}
                            </p>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Indicators */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2">
                {testimonials.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => {
                            setDirection(idx > currentIndex ? 1 : -1);
                            setCurrentIndex(idx);
                        }}
                        className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? "w-8 bg-red-500" : "w-1.5 bg-zinc-300 hover:bg-zinc-400"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}
