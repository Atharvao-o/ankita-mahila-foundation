"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Heart, ArrowRight } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";

export function CTASection() {
    const { t } = useLocale();

    return (
        <section className="py-24 relative overflow-hidden font-sans">
            <div className="absolute inset-0 bg-brand-magenta/95" />
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 h-[500px] w-[500px] rounded-full bg-brand-gold/20 blur-3xl opacity-50" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto bg-white rounded-[60px] p-8 md:p-20 shadow-2xl flex flex-col lg:flex-row items-center gap-12 border border-brand-gold/10"
                >
                    <div className="flex-1 space-y-8 text-center lg:text-left">
                        <div className="inline-flex items-center space-x-2 px-6 py-2 rounded-full bg-brand-magenta/10 text-brand-magenta text-sm font-black uppercase tracking-[0.2em] border border-brand-magenta/10">
                            <Heart className="h-4 w-4 fill-current" />
                            <span>{t.cta.badge}</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black tracking-tight text-foreground leading-[1.1]">
                            {t.cta.title} <span className="text-brand-magenta italic">{t.cta.titleItalic}</span> {t.cta.titleEnd}
                        </h2>
                        <p className="text-xl text-foreground/60 leading-relaxed font-medium">
                            {t.cta.description}
                        </p>
                    </div>

                    <div className="flex flex-col gap-6 w-full lg:w-auto min-w-[300px]">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button size="lg" className="group relative overflow-hidden bg-brand-magenta hover:bg-brand-magenta/90 text-white rounded-full px-12 h-20 text-xl font-black shadow-2xl shadow-brand-magenta/20 w-full">
                                <span className="relative z-10 flex items-center justify-center">
                                    {t.cta.ctaPrimary}
                                    <ArrowRight className="ml-3 h-7 w-7 group-hover:translate-x-1 transition-transform" />
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[100%] group-hover:animate-shimmer" />
                            </Button>
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button variant="outline" size="lg" className="border-brand-magenta/20 text-brand-magenta hover:bg-brand-magenta/5 rounded-full px-12 h-20 text-xl font-black w-full transition-all">
                                {t.cta.ctaSecondary}
                            </Button>
                        </motion.div>
                    </div>
                </motion.div>

                {/* New Illustrations Section */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="group relative h-[300px] md:h-[400px] rounded-[40px] overflow-hidden shadow-xl"
                    >
                        <img 
                            src="/images/illustrations/stall_business.jpg" 
                            alt="Woman selling at a stall" 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                            <p className="text-white text-xl font-bold">Physical Business Support</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="group relative h-[300px] md:h-[400px] rounded-[40px] overflow-hidden shadow-xl"
                    >
                        <img 
                            src="/images/illustrations/online_ecom.jpg" 
                            alt="Woman doing online e-commerce" 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                            <p className="text-white text-xl font-bold">Digital Growth & E-commerce</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
