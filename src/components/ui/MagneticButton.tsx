"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
    children: ReactNode;
    className?: string;
    onClick?: () => void;
    variant?: "primary" | "secondary" | "outline";
}

export function MagneticButton({
    children,
    className,
    onClick,
    variant = "primary",
}: MagneticButtonProps) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    const baseClasses =
        "relative group flex items-center justify-center gap-2 overflow-hidden rounded-full px-8 py-3.5 font-semibold transition-transform duration-300 ease-out hover:scale-105 active:scale-95";

    const variants = {
        primary: "bg-gradient-to-r from-yellow-500 to-yellow-400 text-zinc-900 border-none shadow-[0_4px_14px_0_rgb(234,179,8,0.39)] hover:shadow-[0_6px_20px_rgba(234,179,8,0.23)] hover:from-yellow-400 hover:to-yellow-300",
        secondary: "bg-gradient-to-r from-red-600 to-red-500 text-white shadow-sm hover:from-red-500 hover:to-red-400 border-none shadow-[0_4px_14px_0_rgb(239,68,68,0.2)] hover:shadow-[0_6px_20px_rgba(239,68,68,0.3)]",
        outline: "bg-transparent text-zinc-900 border border-zinc-200 hover:border-yellow-400 hover:bg-yellow-50",
    };

    return (
        <motion.button
            className={cn(baseClasses, variants[variant], className)}
            onMouseMove={handleMouseMove}
            onClick={onClick}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-full opacity-0 transition duration-300 group-hover:opacity-100 mix-blend-overlay"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              100px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 255, 255, 0.4),
              transparent 80%
            )
          `,
                }}
            />
            <span className="relative z-10 flex items-center gap-2">{children}</span>
        </motion.button>
    );
}
