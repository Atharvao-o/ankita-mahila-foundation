"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { useLocale } from "@/context/LocaleContext";

const images = [
    { src: "/images/illustrations/stall_business.jpg", span: "row-span-2" },
    { src: "/images/illustrations/online_ecom.jpg", span: "" },
    { src: "/images/gallery_3.png", span: "row-span-2" },
    { src: "/images/illustrations/community_impact.png", span: "" },
    { src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800", span: "col-span-2" },
    { src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400", span: "" },
    { src: "/images/gallery_6.png", span: "" },
    { src: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=400", span: "row-span-2" },
    { src: "/images/gallery_8.png", span: "" }
];

export default function GalleryPage() {
    const { t } = useLocale();

    return (
        <div className="flex flex-col min-h-screen font-sans">
            <Navbar />
            <main className="flex-grow">
                <section className="py-32 bg-brand-magenta text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-brand-magenta/95" />
                    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 h-[500px] w-[500px] rounded-full bg-brand-gold/20 blur-3xl opacity-30" />

                    <div className="container relative z-10 mx-auto px-4 md:px-6 space-y-8 text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-6xl md:text-8xl font-black tracking-tight leading-[0.9]"
                        >
                            {t.galleryPage.title}
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto font-medium"
                        >
                            {t.galleryPage.description}
                        </motion.p>
                    </div>
                </section>

                <section className="py-24 bg-brand-cream/30">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {images.map((img, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: i * 0.05 }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -10, rotate: i % 2 === 0 ? 1 : -1 }}
                                    className={`relative group rounded-[50px] overflow-hidden shadow-xl hover:shadow-2xl transition-all border-4 border-white hover:border-brand-gold ${img.span}`}
                                >
                                    <img
                                        src={img.src}
                                        alt={`Foundation Gallery ${i}`}
                                        className="w-full h-full min-h-[300px] object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
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
