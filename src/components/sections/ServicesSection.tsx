"use client";

import { motion } from "framer-motion";
import { ServiceCard } from "../ui/ServiceCard";
import { Target, Film, Megaphone, BrainCircuit, Layout, Search } from "lucide-react";

const services = [
    {
        title: "AI Long-Form Video Production",
        description: "End-to-end AI powered long-form video creation for YouTube, courses and storytelling. From idea to final export — script, visuals, voice and editing handled for you.",
        icon: Film,
        features: ["Scriptwriting", "Voiceover", "Editing", "Production"]
    },
    {
        title: "AI Short-Form Videos",
        description: "High-performing Reels, Shorts and TikToks created using AI workflows designed for reach, retention and rapid content scaling.",
        icon: Film,
        features: ["Scriptwriting", "Voiceover", "Editing", "Production"]
    },
    {
        title: "AI Cinematic Video Production",
        description: "Cinematic storytelling using advanced AI tools. Perfect for brand films, ads, product videos and visually rich storytelling content.",
        icon: Megaphone,
        features: ["Scriptwriting", "Voiceover", "Editing", "Production"]
    },
    {
        title: "Professional Video Editing",
        description: "Premium editing using After Effects and industry tools for both long-form and short-form content — motion graphics, transitions, sound design and polish.",
        icon: Film,
        features: ["Motion Graphics", "Transitions", "Sound Design", "Polish"]
    },
    {
        title: "Script Writing & YouTube Management",
        description: "Content strategy, script writing, publishing, optimization and growth support to build and scale your YouTube channel consistently.",
        icon: Layout,
        features: ["Scriptwriting", "Content Management", "Analytics"]
    },
    {
        title: "Thumbnails & Graphic Design",
        description: "Scroll-stopping thumbnails and high-quality graphics designed to increase CTR, branding consistency and overall content performance.",
        icon: Search,
        features: ["Thumbnails", "Graphics", "Branding"]
    }
];

export function ServicesSection() {
    return (
        <section id="services" className="relative scroll-mt-32">
            <div className="text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-sm font-bold tracking-widest uppercase text-yellow-500 mb-4 flex items-center justify-center gap-2"
                >
                    <span className="w-8 h-px bg-yellow-500" />
                    Our Arsenal
                    <span className="w-8 h-px bg-yellow-500" />
                </motion.h2>
                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-4xl md:text-5xl font-bold font-outfit text-zinc-900 leading-tight max-w-3xl mx-auto"
                >
                    Premium services to <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-red-500">dominate</span> your market
                </motion.h3>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-6 text-lg text-zinc-600 max-w-2xl mx-auto"
                >
                    From cutting-edge AI implementation to high-converting performance marketing, we have everything you need to scale aggressively.
                </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {services.map((service, index) => (
                    <motion.div
                        key={service.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="h-full"
                    >
                        <ServiceCard {...service} />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
