"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/context/LocaleContext";

export function DevelopmentBanner() {
    const { t } = useLocale();
    const message = t.contactPage.underDevelopment;

    // Duplicate message to ensure seamless infinite loop
    const messages = Array(10).fill(message);

    return (
        <div className="relative w-full overflow-hidden bg-[#FFD700] py-1.5 z-[60] border-b-2 border-black shadow-md">
            {/* Construction Stripe Pattern Overlay */}
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: `linear-gradient(45deg, #000 25%, transparent 25%, transparent 50%, #000 50%, #000 75%, transparent 75%, transparent)`,
                    backgroundSize: '20px 20px'
                }}
            />

            <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                    ease: "linear",
                    duration: 25,
                    repeat: Infinity,
                }}
                className="flex whitespace-nowrap items-center space-x-12 relative z-10"
            >
                {messages.map((msg, i) => (
                    <div key={i} className="flex items-center space-x-12">
                        <span className="text-[10px] sm:text-xs font-black text-black uppercase tracking-normal flex items-center">
                            <span className="mr-3">⚠️</span>
                            {msg}

                        </span>
                        <div className="h-2 w-2 bg-black rotate-45" />
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
