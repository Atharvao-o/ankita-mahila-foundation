"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Heart, Target, Lightbulb, UserCheck } from "lucide-react";
import { motion } from "framer-motion";
import { useLocale } from "@/context/LocaleContext";

export default function AboutPage() {
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
                            {t.aboutPage.heroTitle}
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
                                        {t.aboutPage.storyBadge}
                                    </span>
                                    <h2 className="text-4xl md:text-6xl font-black tracking-tight text-foreground leading-[1.1]">
                                        {t.aboutPage.storyTitle}
                                    </h2>
                                </div>
                                <div className="space-y-6 text-xl text-foreground/70 leading-relaxed font-medium">
                                    <p>{t.aboutPage.storyP1}</p>
                                    <p>{t.aboutPage.storyP2}</p>
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
                                        src="https://images.unsplash.com/photo-1544333346-64749d056322?auto=format&fit=crop&q=80&w=800"
                                        alt="Foundation Story"
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
                                <h3 className="text-4xl font-black text-foreground">{t.aboutPage.missionTitle}</h3>
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

                {/* Values Breakdown */}
                <section className="py-24 bg-white text-center overflow-hidden">
                    <div className="container mx-auto px-4 md:px-6 space-y-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="space-y-6"
                        >
                            <h2 className="text-4xl md:text-6xl font-black text-foreground tracking-tight">
                                {t.aboutPage.valuesTitle}
                            </h2>
                            <p className="text-xl text-foreground/60 max-w-3xl mx-auto font-medium">
                                {t.aboutPage.valuesDesc}
                            </p>
                        </motion.div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                            {[
                                { icon: Heart, title: t.features.support.title, desc: t.features.support.desc, color: "bg-brand-magenta" },
                                { icon: UserCheck, title: t.features.uplift.title, desc: t.features.uplift.desc, color: "bg-brand-gold" },
                                { icon: Target, title: t.features.empower.title, desc: t.features.empower.desc, color: "bg-brand-green" }
                            ].map((value, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: i * 0.1 }}
                                    whileHover={{ y: -10 }}
                                    className="space-y-6 p-10 rounded-[40px] bg-brand-cream/20 border border-brand-gold/5 shadow-xl group"
                                >
                                    <div className={`${value.color} text-white p-5 rounded-full w-fit mx-auto mb-6 shadow-lg shadow-black/10 group-hover:scale-110 transition-transform`}>
                                        <value.icon className="h-10 w-10" />
                                    </div>
                                    <h4 className="text-2xl font-black text-foreground">{value.title}</h4>
                                    <p className="text-foreground/70 text-lg font-medium leading-relaxed">{value.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

