"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { useLocale } from "@/context/LocaleContext";

export default function SkillDevelopmentPage() {
    const { t } = useLocale();

    return (
        <div className="flex flex-col min-h-screen font-sans">
            <Navbar />
            <main className="flex-grow">
                <section className="bg-brand-gold py-24 text-white text-center rounded-b-[60px] shadow-2xl relative overflow-hidden">
                    <div className="container relative z-10 mx-auto px-4 md:px-6">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-7xl font-black mb-6 tracking-tight"
                        >
                            {t.aboutPage.activitySkill}
                        </motion.h1>
                        <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed font-medium">
                            {t.programsPage.heroDesc}
                        </p>
                    </div>
                </section>

                <section className="py-24 bg-white">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="max-w-4xl mx-auto space-y-12">
                            <h2 className="text-4xl font-black text-foreground">{t.aboutPage.dedicatedGrowth}</h2>
                            <div className="prose prose-xl text-foreground/70 font-medium">
                                <p>{t.programsPage.shopifyDesc}</p>
                            </div>
                             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
                                <div className="p-8 bg-brand-magenta/5 rounded-3xl border border-brand-magenta/10">
                                    <h3 className="text-2xl font-bold mb-4">{t.programsPage.p3Title}</h3>
                                    <p>{t.programsPage.p3Desc}</p>
                                </div>
                                <div className="p-8 bg-brand-gold/5 rounded-3xl border border-brand-gold/10">
                                    <h3 className="text-2xl font-bold mb-4">{t.programsPage.p2Title}</h3>
                                    <p>{t.programsPage.p2Desc}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
