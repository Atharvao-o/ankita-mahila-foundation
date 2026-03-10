"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/context/LocaleContext";

export function Impact() {
    const { t } = useLocale();

    const stats = [
        { label: t.impact.women, value: "500+" },
        { label: t.impact.events, value: "50+" },
        { label: t.impact.launched, value: "100+" },
        { label: t.impact.stores, value: "40+" },
    ];

    return (
        <section className="py-24 bg-[#831843] bg-gradient-to-br from-[#831843] via-[#9d174d] to-[#4c0519] text-white font-sans overflow-hidden relative">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none" />
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{
                                type: "spring",
                                stiffness: 100,
                                damping: 15,
                                delay: i * 0.1
                            }}
                            viewport={{ once: true }}
                            className="space-y-4"
                        >
                            <p className="text-5xl md:text-7xl font-black tracking-tight text-white mb-2">
                                {stat.value}
                            </p>
                            <p className="text-white/60 font-black uppercase tracking-[0.2em] text-xs sm:text-sm">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
