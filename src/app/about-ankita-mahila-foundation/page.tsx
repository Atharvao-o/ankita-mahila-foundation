"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Heart, Target, Lightbulb, UserCheck } from "lucide-react";
import { motion } from "framer-motion";
import { useLocale } from "@/context/LocaleContext";

export default function SEOAboutPage() {
    const { t } = useLocale();

    return (
        <div className="flex flex-col min-h-screen font-sans">
            <Navbar />
            <main className="flex-grow">
                {/* About Hero */}
                <section className="bg-brand-magenta py-24 text-white text-center rounded-b-[60px] shadow-2xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent" />
                    <div className="container relative z-10 mx-auto px-4 md:px-6">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-7xl font-black mb-6 tracking-tight"
                        >
                            {t.aboutPage.seoAboutTitle}
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed font-medium"
                        >
                            {t.aboutPage.heroDesc}
                        </motion.p>
                    </div>
                </section>

                {/* Story Section */}
                <section className="py-24 bg-white overflow-hidden">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="flex flex-col lg:flex-row gap-20 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="flex-1 space-y-8"
                            >
                                <div className="space-y-4">
                                    <span className="text-brand-magenta font-black tracking-[0.3em] uppercase text-sm">
                                        {t.aboutPage.ngoHistory}
                                    </span>
                                    <h2 className="text-4xl md:text-6xl font-black tracking-tight text-foreground leading-[1.1]">
                                        {t.aboutPage.womenEmpowermentWork}
                                    </h2>
                                </div>
                                <div className="space-y-6 text-xl text-foreground/70 leading-relaxed font-medium">
                                    <p>{t.aboutPage.storyP1}</p>
                                    <p>{t.aboutPage.storyP2}</p>
                                    <p>{t.aboutPage.empoweringIndia}</p>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="flex-1 relative"
                            >
                                <div className="absolute -inset-4 bg-brand-gold/10 rounded-[60px] rotate-3 -z-10" />
                                <div className="rounded-[60px] overflow-hidden shadow-2xl border-8 border-white group">
                                    <img
                                        src="/images/illustrations/indian_artisans.png"
                                        alt="Ankita Mahila Foundation Women Empowerment"
                                        className="w-full h-[600px] object-cover group-hover:scale-105 transition-transform duration-1000"
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Mission & Vision Cards */}
                <section className="py-24 bg-brand-cream/50 relative overflow-hidden">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {/* Mission Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ y: -10 }}
                                className="bg-white p-12 md:p-16 rounded-[60px] shadow-2xl border border-brand-gold/10 space-y-8 relative overflow-hidden group"
                            >
                                <div className="absolute top-0 right-0 p-12 text-brand-magenta opacity-5 group-hover:opacity-10 transition-opacity">
                                    <Target size={200} />
                                </div>
                                <div className="p-6 bg-brand-magenta/10 rounded-3xl w-fit shadow-lg shadow-brand-magenta/5">
                                    <Target className="text-brand-magenta h-12 w-12" />
                                </div>
                                <h2 className="text-4xl font-black text-foreground">{t.aboutPage.ngoMission}</h2>
                                <p className="text-xl text-foreground/70 leading-relaxed font-medium relative z-10">
                                    {t.aboutPage.missionDesc}
                                </p>
                            </motion.div>

                            {/* Vision Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ y: -10 }}
                                transition={{ delay: 0.2 }}
                                className="bg-white p-12 md:p-16 rounded-[60px] shadow-2xl border border-brand-gold/10 space-y-8 relative overflow-hidden group"
                            >
                                <div className="absolute top-0 right-0 p-12 text-brand-gold opacity-5 group-hover:opacity-10 transition-opacity">
                                    <Lightbulb size={200} />
                                </div>
                                <div className="p-6 bg-brand-gold/10 rounded-3xl w-fit shadow-lg shadow-brand-gold/5">
                                    <Lightbulb className="text-brand-gold h-12 w-12" />
                                </div>
                                <h3 className="text-4xl font-black text-foreground">{t.aboutPage.visionTitle}</h3>
                                <p className="text-xl text-foreground/70 leading-relaxed font-medium relative z-10">
                                    {t.aboutPage.visionDesc}
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Programs and Activities summary */}
                <section className="py-24 bg-white text-center">
                    <div className="container mx-auto px-4 md:px-6 space-y-12">
                        <h2 className="text-4xl md:text-6xl font-black text-foreground tracking-tight">
                            {t.aboutPage.programsActivities}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="p-8 bg-brand-magenta/5 rounded-3xl border border-brand-magenta/10">
                                <h3 className="text-2xl font-bold mb-4">{t.aboutPage.activityWomen}</h3>
                                <p className="text-foreground/70">{t.features.empower.desc}</p>
                            </div>
                            <div className="p-8 bg-brand-gold/5 rounded-3xl border border-brand-gold/10">
                                <h3 className="text-2xl font-bold mb-4">{t.aboutPage.activitySkill}</h3>
                                <p className="text-foreground/70">{t.aboutPreview.point4}</p>
                            </div>
                            <div className="p-8 bg-brand-green/5 rounded-3xl border border-brand-green/10">
                                <h3 className="text-2xl font-bold mb-4">{t.aboutPage.activitySupport}</h3>
                                <p className="text-foreground/70">{t.aboutPreview.point3}</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
