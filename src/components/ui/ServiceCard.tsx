"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { useState } from "react";

interface ServiceCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
    features: string[];
}

export function ServiceCard({ title, description, icon: Icon, features }: ServiceCardProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            className="relative group rounded-3xl p-8 overflow-hidden bg-white border border-zinc-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(252,211,77,0.08)] cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{ scale: 1.02 }}
        >
            {/* Background Gradient Blob */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-yellow-400/20 rounded-full blur-[50px] group-hover:bg-yellow-400/30 transition-colors duration-500" />
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-red-500/10 rounded-full blur-[50px] group-hover:bg-red-500/20 transition-colors duration-500" />

            <div className="relative z-10 flex flex-col h-full gap-6">
                <div className="flex items-center justify-between">
                    <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-100 group-hover:border-yellow-400/50 transition-colors duration-300">
                        <Icon className="w-8 h-8 text-yellow-500 group-hover:text-yellow-400 transition-colors" />
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
                        className="w-10 h-10 rounded-full bg-yellow-400 text-zinc-900 flex items-center justify-center font-bold shadow-sm"
                    >
                        →
                    </motion.div>
                </div>

                <div>
                    <h3 className="text-2xl font-bold font-outfit text-zinc-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-red-500 transition-all duration-300">
                        {title}
                    </h3>
                    <p className="text-zinc-500 leading-relaxed font-sans text-sm md:text-base group-hover:text-zinc-700 transition-colors">
                        {description}
                    </p>
                </div>

                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: isHovered ? "auto" : 0, opacity: isHovered ? 1 : 0 }}
                    className="overflow-hidden mt-auto pt-4 border-t border-zinc-100"
                >
                    <ul className="space-y-2">
                        {features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm text-zinc-600">
                                <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                                {feature}
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </motion.div>
    );
}
