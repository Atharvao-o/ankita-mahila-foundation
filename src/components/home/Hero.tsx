"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Sparkles } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";

export function Hero() {
    const { t } = useLocale();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any },
        },
    };

    return (
        <section className="relative overflow-hidden bg-[#FDFCF6] py-20 lg:py-32 font-sans">
            {/* Animated Background Blobs */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 h-[500px] w-[500px] bg-brand-magenta/10 rounded-full blur-[120px] animate-blob" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 h-[600px] w-[600px] bg-brand-gold/10 rounded-full blur-[120px] animate-blob [animation-delay:2s]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] bg-brand-green/5 rounded-full blur-[100px] animate-blob [animation-delay:4s]" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center space-y-8"
                >
                    <motion.div
                        variants={itemVariants}
                        className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-brand-magenta/10 text-brand-magenta text-sm font-bold tracking-wide uppercase border border-brand-magenta/20 glass"
                    >
                        <Sparkles className="h-4 w-4 fill-current" />
                        <span>{t.hero.tagline}</span>
                    </motion.div>

                    <motion.h1
                        variants={itemVariants}
                        className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-foreground leading-[1.05]"
                    >
                        {t.hero.title} <span className="text-brand-magenta italic relative inline-block">
                            {t.hero.titleItalic}
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: "100%" }}
                                transition={{ delay: 1, duration: 1 }}
                                className="absolute -bottom-2 left-0 h-4 bg-brand-gold/20 -z-10"
                            />
                        </span>
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="text-xl md:text-2xl text-foreground/70 leading-relaxed max-w-2xl mx-auto font-medium"
                    >
                        {t.hero.description}
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6"
                    >
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button size="lg" className="group relative overflow-hidden bg-brand-magenta hover:bg-brand-magenta/90 text-white rounded-full px-12 h-20 text-2xl font-black shadow-2xl shadow-brand-magenta/30 transition-all border-b-4 border-brand-magenta/50 active:border-b-0">
                                <span className="relative z-10 flex items-center">
                                    {t.hero.ctaPrimary}
                                    <ArrowRight className="ml-3 h-7 w-7 group-hover:translate-x-2 transition-transform" />
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-[100%] group-hover:animate-shimmer" />
                            </Button>
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button size="lg" variant="outline" className="border-brand-magenta/20 text-brand-magenta hover:bg-brand-magenta/5 rounded-full px-12 h-20 text-2xl font-black transition-all glass">
                                {t.hero.ctaSecondary}
                                <Heart className="ml-3 h-7 w-7 fill-current animate-pulse" />
                            </Button>
                        </motion.div>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 100, rotateX: 20 }}
                    whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-20 relative aspect-[16/9] max-w-6xl mx-auto rounded-[80px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(131,24,67,0.3)] border-[12px] border-white/50 glass group animate-float"
                >
                    <div className="absolute inset-0 bg-gradient-to-tr from-brand-magenta/40 via-transparent to-brand-gold/20 z-10 group-hover:opacity-0 transition-opacity duration-1000" />
                    <img
                        src="/images/home_hero.png"
                        alt="Indian Women Entrepreneurs Collective"
                        className="object-cover w-full h-full scale-105 group-hover:scale-110 transition-transform duration-[2s] ease-out"
                    />
                </motion.div>
            </div>
        </section>
    );
}

