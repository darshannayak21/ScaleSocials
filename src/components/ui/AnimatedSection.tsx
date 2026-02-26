"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    id?: string;
}

export function AnimatedSection({ children, className, delay = 0, id }: AnimatedSectionProps) {
    return (
        <motion.section
            id={id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
                duration: 0.8,
                delay: delay,
                ease: [0.21, 0.47, 0.32, 0.98],
            }}
            className={cn("w-full py-24", className)}
        >
            {children}
        </motion.section>
    );
}
