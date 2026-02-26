"use client";

import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface StatCounterProps {
    value: number;
    suffix?: string;
    prefix?: string;
    label: string;
    delay?: number;
    className?: string;
}

export function StatCounter({ value, suffix = "", prefix = "", label, delay = 0, className }: StatCounterProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const spring = useSpring(0, {
        mass: 1,
        stiffness: 50,
        damping: 15,
    });

    const display = useTransform(spring, (current) => Math.round(current));

    useEffect(() => {
        if (isInView) {
            setTimeout(() => {
                spring.set(value);
            }, delay * 1000);
        }
    }, [isInView, spring, value, delay]);

    return (
        <div ref={ref} className={cn("flex flex-col items-center justify-center p-6 text-center", className)}>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.6, delay, type: "spring" }}
                className="text-5xl md:text-6xl font-bold font-outfit text-zinc-900 mb-2 tracking-tight drop-shadow-sm"
            >
                <span className="text-red-500">{prefix}</span>
                <motion.span>{display}</motion.span>
                <span className="text-red-500">{suffix}</span>
            </motion.div>
            <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.6, delay: delay + 0.2 }}
                className="text-zinc-500 font-medium uppercase tracking-wider text-sm"
            >
                {label}
            </motion.p>
        </div>
    );
}
