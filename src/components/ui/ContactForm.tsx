"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send } from "lucide-react";

export function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [focusedField, setFocusedField] = useState<string | null>(null);
    const [hasMessage, setHasMessage] = useState(false);

    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus("idle");

        const form = e.currentTarget;
        const formData = new FormData(form);

        // Prevent FormSubmit fallback captcha and specify subject
        formData.append("_captcha", "false");
        formData.append("_subject", "New Consultation Request - Scale Socials");

        try {
            const response = await fetch("https://formsubmit.co/ajax/shivathmaj@scalesocials.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(Object.fromEntries(formData))
            });

            const data = await response.json();

            if (data.success) {
                setStatus("success");
                form.reset();
                setHasMessage(false);
            } else {
                setStatus("error");
                console.error("Form error:", data);
            }
        } catch (error) {
            setStatus("error");
            console.error("Submission failed:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <InputGroup
                    id="name"
                    label="Full Name"
                    type="text"
                    required={true}
                    focused={focusedField === "name"}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                />
                <InputGroup
                    id="email"
                    label="Email Address"
                    type="email"
                    required={true}
                    focused={focusedField === "email"}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <InputGroup
                    id="phone"
                    label="Phone Number"
                    type="tel"
                    required={false}
                    focused={focusedField === "phone"}
                    onFocus={() => setFocusedField("phone")}
                    onBlur={() => setFocusedField(null)}
                />
                <InputGroup
                    id="company"
                    label="Company Name"
                    type="text"
                    required={false}
                    focused={focusedField === "company"}
                    onFocus={() => setFocusedField("company")}
                    onBlur={() => setFocusedField(null)}
                />
            </div>

            <div className="relative group">
                <motion.label
                    htmlFor="message"
                    animate={{
                        y: focusedField === "message" || hasMessage ? -24 : 0,
                        scale: focusedField === "message" || hasMessage ? 0.85 : 1,
                        color: focusedField === "message" ? "#ef4444" : "#71717a",
                    }}
                    className="absolute left-4 top-4 text-zinc-500 pointer-events-none origin-left transition-colors"
                >
                    Tell us about your goals (Optional)
                </motion.label>
                <textarea
                    id="message"
                    name="message"
                    rows={4}
                    onFocus={() => setFocusedField("message")}
                    onChange={(e) => setHasMessage(e.target.value.length > 0)}
                    onBlur={(e) => {
                        if (e.target.value === "") setFocusedField(null);
                        setFocusedField(null);
                    }}
                    className="w-full bg-black/[0.03] border border-black/10 rounded-2xl px-4 py-4 text-zinc-900 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all resize-none shadow-inner"
                ></textarea>
            </div>

            {status === "success" && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-4 rounded-xl bg-green-50 border border-green-200 text-green-700 text-sm font-medium text-center">
                    Message sent successfully! We will be in touch shortly.
                </motion.div>
            )}

            {status === "error" && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm font-medium text-center">
                    Something went wrong. Please try again later.
                </motion.div>
            )}

            <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting || status === "success"}
                className={`w-full relative group overflow-hidden rounded-2xl p-[1px] shadow-lg ${status === "success" ? "bg-green-500 shadow-green-500/20" : "bg-gradient-to-r from-red-600 to-yellow-500 shadow-red-500/20"}`}
            >
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className={`px-8 py-4 rounded-2xl flex items-center justify-center gap-3 ${status === "success" ? "bg-green-500" : "bg-gradient-to-r from-red-600 to-yellow-500"}`}>
                    <span className="font-bold text-white text-lg drop-shadow-sm">
                        {isSubmitting ? "Sending..." : status === "success" ? "Sent!" : "Request Consultation"}
                    </span>
                    {!isSubmitting && status !== "success" && <Send className="w-5 h-5 text-white" />}
                </div>
            </motion.button>
        </form>
    );
}

function InputGroup({
    id, label, type, required = false, focused, onFocus, onBlur
}: {
    id: string; label: string; type: string; required?: boolean; focused: boolean; onFocus: () => void; onBlur: (e: any) => void;
}) {
    const [hasValue, setHasValue] = useState(false);

    return (
        <div className="relative group">
            <motion.label
                htmlFor={id}
                initial={{ y: 0, scale: 1, color: "#71717a" }}
                animate={{
                    y: focused || hasValue ? -24 : 0,
                    scale: focused || hasValue ? 0.85 : 1,
                    color: focused ? "#ef4444" : "#71717a",
                }}
                className="absolute left-4 top-3.5 text-zinc-500 pointer-events-none origin-left z-10"
            >
                {label}
            </motion.label>
            <input
                type={type}
                id={id}
                name={id}
                onFocus={onFocus}
                onChange={(e) => setHasValue(e.target.value.length > 0)}
                onBlur={(e) => {
                    onBlur(e);
                }}
                className="w-full bg-black/[0.03] border border-black/10 rounded-2xl px-4 py-3 text-zinc-900 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all h-14 shadow-inner"
                required={required}
            />
        </div>
    );
}
