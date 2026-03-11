"use client";

import Link from "next/link";
import { Heart, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/context/LocaleContext";
import { motion } from "framer-motion";
import Image from "next/image";

export function Footer() {
    const { t } = useLocale();

    return (
        <footer className="bg-brand-magenta text-white py-16 font-sans">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand Info */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center space-x-3">
                            <motion.div
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                className="relative h-12 w-12"
                            >
                                <Image
                                    src="/logo.png"
                                    alt="Ankita Mahila Foundation Logo"
                                    fill
                                    sizes="48px"
                                    className="object-contain brightness-0 invert"
                                />
                            </motion.div>
                            <div className="flex flex-col">
                                <span className="text-xl font-bold tracking-tight">Ankita Mahila</span>
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-80">Foundation</span>
                            </div>
                        </Link>
                        <p className="text-white/80 leading-relaxed">
                            {t.footer.desc}
                        </p>
                        <div className="flex space-x-4">
                            <Link href="#" className="p-2 hover:bg-white/10 rounded-full transition-colors active:scale-90">
                                <Facebook className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="p-2 hover:bg-white/10 rounded-full transition-colors active:scale-90">
                                <Instagram className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="p-2 hover:bg-white/10 rounded-full transition-colors active:scale-90">
                                <Twitter className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-bold border-b border-white/20 pb-2">{t.footer.quickLinks}</h3>
                        <ul className="space-y-3 text-white/80">
                            <li><Link href="/about" className="hover:text-white transition-colors">{t.nav.about}</Link></li>
                            <li><Link href="/programs" className="hover:text-white transition-colors">{t.nav.programs}</Link></li>
                            <li><Link href="/gallery" className="hover:text-white transition-colors">{t.nav.gallery}</Link></li>
                            <li><Link href="/contact" className="hover:text-white transition-colors">{t.nav.contact}</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-bold border-b border-white/20 pb-2">{t.footer.contactUs}</h3>
                        <ul className="space-y-4 text-white/80">
                            <li className="flex items-start space-x-3">
                                <MapPin className="h-5 w-5 shrink-0 mt-0.5" />
                                <span>E/4 Bhagyalaxmi soc , Ram nagar , Bandrekarwadi Jogeshwari ( East ) , Mumbai - 400060 , Maharashtra</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone className="h-5 w-5 shrink-0" />
                                <span>+91 98698 73323</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail className="h-5 w-5 shrink-0" />
                                <span>contact@ankitamahilafoundation.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-bold border-b border-white/20 pb-2">{t.footer.newsletter}</h3>
                        <p className="text-white/80 text-sm">
                            {t.footer.newsDesc}
                        </p>
                        <div className="flex flex-col space-y-3">
                            <input
                                type="email"
                                placeholder="..."
                                className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/50"
                            />
                            <Button className="bg-brand-gold hover:bg-brand-gold/90 text-white font-semibold transition-all active:scale-95 shadow-lg shadow-black/20">
                                {t.footer.subscribe}
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-white/60 text-sm">
                    <p>© 2026 Ankita Mahila Foundation. {t.footer.rights}</p>
                </div>
            </div>
        </footer>
    );
}
