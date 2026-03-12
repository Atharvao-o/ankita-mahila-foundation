"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
    className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return <div className={cn("h-10 w-10", className)} />;

    const isDark = theme === "dark";

    return (
        <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className={cn(
                "relative h-10 w-10 rounded-full flex items-center justify-center transition-colors overflow-hidden border border-border hover:bg-accent group active:scale-90 duration-200",
                className
            )}
            aria-label="Toggle theme"
        >
            <AnimatePresence mode="wait" initial={false}>
                <motion.div
                    key={theme}
                    initial={{ y: 20, opacity: 0, rotate: -90 }}
                    animate={{ y: 0, opacity: 1, rotate: 0 }}
                    exit={{ y: -20, opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2, ease: "circOut" }}
                    className="flex items-center justify-center h-full w-full"
                >
                    {isDark ? (
                        <Moon className="h-5 w-5 text-brand-gold fill-brand-gold/10" />
                    ) : (
                        <Sun className="h-5 w-5 text-brand-magenta fill-brand-magenta/10" />
                    )}
                </motion.div>
            </AnimatePresence>
            
            {/* Subtle glow effect */}
            <div className={cn(
                "absolute inset-0 opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300",
                isDark ? "bg-brand-gold" : "bg-brand-magenta"
            )} />
        </button>
    );
}
