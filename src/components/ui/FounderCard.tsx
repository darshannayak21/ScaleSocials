"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";
import Image from "next/image";

interface FounderCardProps {
    name: string;
    role: string;
    bio: string;
    imageSrc?: string;
    placeholderColor?: string;
}

export function FounderCard({ name, role, bio, imageSrc, placeholderColor = "bg-zinc-100" }: FounderCardProps) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <motion.div
            className="relative group rounded-[2rem] overflow-hidden bg-white p-1 border border-zinc-100 shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
            onMouseMove={handleMouseMove}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 transition duration-300 group-hover:opacity-100 z-10"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              300px circle at ${mouseX}px ${mouseY}px,
              rgba(239, 68, 68, 0.08),
              transparent 80%
            )
          `,
                }}
            />

            <div className="relative h-96 w-full rounded-[1.75rem] overflow-hidden bg-zinc-100 group-hover:scale-[0.98] transition-transform duration-500 ease-out z-0">
                {imageSrc ? (
                    <Image
                        src={imageSrc}
                        alt={name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                    />
                ) : (
                    <div className={`w-full h-full ${placeholderColor} flex flex-col items-center justify-center`}>
                        <svg className="w-20 h-20 text-zinc-300" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                        </svg>
                        <span className="mt-4 text-zinc-400 font-medium tracking-widest text-sm uppercase">Add Photo</span>
                    </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Content Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-3xl font-bold text-white font-outfit">{name}</h3>
                    <p className="text-yellow-400 font-medium mb-3">{role}</p>
                    <p className="text-zinc-200 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-3">
                        {bio}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}
