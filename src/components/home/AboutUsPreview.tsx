"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";

export function AboutUsPreview() {
    const { t } = useLocale();

    const points = [
        t.aboutPreview.point1,
        t.aboutPreview.point2,
        t.aboutPreview.point3,
        t.aboutPreview.point4,
    ];

    return (
        <section className="relative py-24 bg-[#FDFCF6] font-sans overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 h-[600px] w-[600px] bg-brand-magenta/5 rounded-full blur-[120px] animate-blob" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Visual Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="flex-1 relative"
                    >
                        <div className="grid grid-cols-2 gap-6">
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="space-y-4 pt-12"
                            >
                                <img
                                    src="/images/illustrations/indian_artisans.png"
                                    alt="Indian women working on handicrafts"
                                    className="rounded-[40px] shadow-2xl border-4 border-white object-cover aspect-[3/4]"
                                />
                            </motion.div>
                            <div className="space-y-6">
                                <motion.div whileHover={{ scale: 1.02 }}>
                                    <img
                                        src="/images/illustrations/mentorship.png"
                                        alt="Indian entrepreneur mentorship"
                                        className="rounded-[40px] shadow-2xl border-4 border-white object-cover aspect-[3/4]"
                                    />
                                </motion.div>

                            </div>
                        </div>
                        {/* Decals */}
                        <div className="absolute -top-10 -left-10 h-32 w-32 bg-brand-gold/20 rounded-full blur-3xl animate-pulse" />
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="flex-1 space-y-10"
                    >
                        <div className="space-y-6 text-left">
                            <motion.h3
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="text-brand-magenta font-black uppercase tracking-[0.2em] text-sm"
                            >
                                {t.aboutPreview.badge}
                            </motion.h3>
                            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-foreground leading-tight">
                                {t.aboutPreview.title}
                            </h2>
                            <p className="text-xl text-foreground/70 leading-relaxed font-medium">
                                {t.aboutPreview.description}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {points.map((point, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-start space-x-4 group"
                                >
                                    <div className="h-8 w-8 rounded-full bg-brand-green/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-brand-green group-hover:text-white transition-colors">
                                        <CheckCircle2 className="h-5 w-5 text-brand-green group-hover:text-white transition-colors" />
                                    </div>
                                    <span className="text-foreground/80 font-bold text-lg leading-snug">{point}</span>
                                </motion.div>
                            ))}
                        </div>

                        <div className="pt-6">
                            <Link href="/about">
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <Button size="lg" className="bg-brand-magenta hover:bg-brand-magenta/90 text-white rounded-full px-12 h-16 text-xl font-black group shadow-2xl shadow-brand-magenta/20 transition-all">
                                        {t.aboutPreview.cta}
                                        <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
                                    </Button>
                                </motion.div>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
