"use client";

import { motion } from "framer-motion";
import { ShieldCheck, TrendingUp, Users, HeartHandshake } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";

export function Features() {
    const { t } = useLocale();

    const features = [
        {
            title: t.features.support.title,
            description: t.features.support.desc,
            icon: HeartHandshake,
            color: "bg-brand-magenta/10 text-brand-magenta",
        },
        {
            title: t.features.uplift.title,
            description: t.features.uplift.desc,
            icon: TrendingUp,
            color: "bg-brand-gold/10 text-brand-gold",
        },
        {
            title: t.features.empower.title,
            description: t.features.empower.desc,
            icon: ShieldCheck,
            color: "bg-brand-green/10 text-brand-green",
        },
        {
            title: t.features.community.title,
            description: t.features.community.desc,
            icon: Users,
            color: "bg-blue-50 text-blue-600",
        },
    ];

    return (
        <section className="py-24 bg-white font-sans overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center space-y-4 mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-5xl font-black tracking-tight text-foreground"
                    >
                        {t.features.title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-foreground/60 max-w-2xl mx-auto"
                    >
                        {t.features.description}
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="p-8 rounded-[40px] border border-border/50 bg-background hover:shadow-2xl hover:border-brand-magenta/20 transition-all group relative overflow-hidden"
                        >
                            <div className={`p-5 rounded-3xl w-fit mb-8 transition-all group-hover:scale-110 group-hover:rotate-6 ${feature.color} shadow-lg shadow-black/5`}>
                                <feature.icon className="h-10 w-10" />
                            </div>
                            <h3 className="text-2xl font-black mb-4 group-hover:text-brand-magenta transition-colors">{feature.title}</h3>
                            <p className="text-foreground/70 leading-relaxed text-lg">
                                {feature.description}
                            </p>

                            {/* Decorative Shimmer on Hover */}
                            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent translate-y-2 group-hover:translate-y-0 transition-transform" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
