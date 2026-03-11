"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Store, GraduationCap, Globe, Users, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useLocale } from "@/context/LocaleContext";

export default function ProgramsPage() {
    const { t } = useLocale();

    const programs = [
        {
            title: t.programsPage.p1Title,
            description: t.programsPage.p1Desc,
            icon: Store,
            color: "bg-brand-magenta",
            features: ["Prime retail locations", "Customer interaction space", "Sales & marketing support"]
        },
        {
            title: t.programsPage.p2Title,
            description: t.programsPage.p2Desc,
            icon: GraduationCap,
            color: "bg-brand-gold",
            features: ["One-on-one sessions", "Management workshops", "Pricing strategy advice"]
        },
        {
            title: t.programsPage.p3Title,
            description: t.programsPage.p3Desc,
            icon: Globe,
            color: "bg-brand-green",
            features: ["Store setup training", "Online marketing basics", "Inventory management"]
        },
        {
            title: t.programsPage.p4Title,
            description: t.programsPage.p4Desc,
            icon: Users,
            color: "bg-blue-600",
            features: ["Peer support forum", "Growth storytelling", "Partner opportunities"]
        }
    ];

    return (
        <div className="flex flex-col min-h-screen font-sans">
            <Navbar />
            <main className="flex-grow">
                {/* Header Section */}
                <section className="relative overflow-hidden bg-brand-cream/50 py-24">
                    <div className="absolute inset-0 bg-gradient-to-b from-brand-gold/5 to-transparent" />
                    <div className="container relative z-10 mx-auto px-4 md:px-6 text-center space-y-8">
                        <motion.h1
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-5xl md:text-8xl font-black tracking-tight text-foreground leading-tight"
                        >
                            {t.programsPage.heroTitle}
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl md:text-2xl text-foreground/60 max-w-3xl mx-auto font-medium"
                        >
                            {t.programsPage.heroDesc}
                        </motion.p>
                    </div>
                </section>

                {/* Programs Grid */}
                <section className="py-24 bg-white overflow-hidden">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                            {programs.map((program, i) => (
                                <motion.div
                                    key={program.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    whileHover={{ y: -5 }}
                                    className="group relative bg-white rounded-[50px] border border-brand-gold/10 p-10 shadow-xl hover:shadow-2xl transition-all border-l-[12px] overflow-hidden"
                                    style={{ borderLeftColor: `var(--brand-${program.color.split("-")[2]})` }}
                                >
                                    <div className="flex flex-col sm:flex-row items-start gap-8">
                                        <div className={`${program.color} p-5 rounded-3xl text-white shadow-lg group-hover:scale-110 transition-transform`}>
                                            <program.icon className="h-10 w-10" />
                                        </div>
                                        <div className="flex-1 space-y-6">
                                            <h3 className="text-3xl font-black">{program.title}</h3>
                                            <p className="text-foreground/70 leading-relaxed text-lg font-medium">
                                                {program.description}
                                            </p>
                                            <ul className="grid grid-cols-1 gap-4 pt-4">
                                                {program.features.map(f => (
                                                    <li key={f} className="flex items-center gap-3 font-semibold text-foreground/80 bg-brand-cream/30 p-3 rounded-2xl border border-brand-gold/5">
                                                        <div className={`h-3 w-3 rounded-full ${program.color} shadow-sm`} />
                                                        {f}
                                                    </li>
                                                ))}
                                            </ul>
                                            <div className="pt-8">
                                                <Button className={`group relative overflow-hidden rounded-full px-10 h-16 text-lg font-black ${program.color} hover:opacity-90 text-white shadow-xl shadow-${program.color.split("-")[2]}/20 w-fit sm:w-auto`}>
                                                    <span className="relative z-10 flex items-center">
                                                        {t.programsPage.learnMore}
                                                        <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                                    </span>
                                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-[100%] group-hover:animate-shimmer" />
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Shopify Focus Section */}
                <section className="py-32 bg-brand-magenta text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 h-[600px] w-[600px] rounded-full bg-brand-gold/20 blur-3xl opacity-30" />
                    <div className="container relative z-10 mx-auto px-4 md:px-6 flex flex-col lg:flex-row items-center gap-20">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex-1 space-y-10"
                        >
                            <div className="inline-flex items-center gap-3 px-6 py-2 bg-white/10 rounded-full text-sm font-black tracking-[0.2em] border border-white/10 shadow-xl">
                                <Globe className="h-5 w-5" />
                                {t.programsPage.shopifyBadge}
                            </div>
                            <h2 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tight">
                                {t.programsPage.shopifyTitle}
                            </h2>
                            <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-medium">
                                {t.programsPage.shopifyDesc}
                            </p>
                            <Button className="bg-brand-gold hover:bg-brand-gold/90 text-white rounded-full px-12 h-20 text-xl font-black shadow-2xl shadow-black/10 transition-all hover:scale-105 active:scale-95">
                                {t.programsPage.shopifyCTA}
                            </Button>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex-1 relative"
                        >
                            <div className="absolute -inset-6 bg-white/5 rounded-[60px] blur-2xl" />
                            <div className="bg-white/5 p-4 rounded-[60px] border border-white/10 backdrop-blur-xl shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
                                    alt="Community Impact"
                                    className="rounded-[50px] shadow-2xl w-full h-[500px] object-cover"
                                />
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

