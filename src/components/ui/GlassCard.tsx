"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    hoverEffect?: boolean;
}

export function GlassCard({ children, className, delay = 0, hoverEffect = false }: GlassCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay, ease: "easeOut" }}
            whileHover={hoverEffect ? { y: -5, scale: 1.01 } : {}}
            className={cn(
                "relative overflow-hidden rounded-3xl bg-white border border-zinc-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]",
                hoverEffect && "cursor-pointer transition-shadow hover:shadow-[0_12px_40px_rgba(239,68,68,0.1)]",
                className
            )}
        >
            {/* Subtle top glare */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-red-500/10 to-transparent" />
            {children}
        </motion.div>
    );
}
