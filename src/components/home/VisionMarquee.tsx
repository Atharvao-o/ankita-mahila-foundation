"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/context/LocaleContext";

export function VisionMarquee() {
    const { t } = useLocale();
    const baseVisions = t.visions;
    // Duplicate visions to ensure seamless infinite loop
    const visions = [...baseVisions, ...baseVisions, ...baseVisions];

    return (
        <div className="relative w-full overflow-hidden bg-brand-gold py-6 sm:py-10 shadow-inner">
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-brand-gold to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-brand-gold to-transparent z-10" />

            <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                    ease: "linear",
                    duration: 40,
                    repeat: Infinity,
                }}
                className="flex whitespace-nowrap items-center space-x-12 sm:space-x-20"
            >
                {visions.map((vision, i) => (
                    <div key={i} className="flex items-center space-x-8 sm:space-x-12">
                        <span className="text-xl sm:text-3xl font-black text-white/90 uppercase tracking-[0.2em] italic">
                            {vision}
                        </span>
                        <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-white/40" />
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
