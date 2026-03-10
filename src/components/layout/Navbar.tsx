"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Heart, Globe, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useLocale } from "@/context/LocaleContext";
import { Locale } from "@/locales/dictionary";
import Image from "next/image";

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [isLangOpen, setIsLangOpen] = React.useState(false);
    const pathname = usePathname();
    const { locale, setLocale, t } = useLocale();
    const { scrollY } = useScroll();

    const navBg = useTransform(
        scrollY,
        [0, 100],
        ["rgba(253, 252, 246, 0)", "rgba(253, 252, 246, 0.8)"]
    );

    const navBlur = useTransform(
        scrollY,
        [0, 100],
        ["blur(0px)", "blur(12px)"]
    );

    const navBorder = useTransform(
        scrollY,
        [0, 100],
        ["rgba(229, 231, 235, 0)", "rgba(229, 231, 235, 1)"]
    );

    const navLinks = [
        { name: t.nav.home, href: "/" },
        { name: t.nav.about, href: "/about" },
        { name: t.nav.programs, href: "/programs" },
        { name: t.nav.gallery, href: "/gallery" },
        { name: t.nav.contact, href: "/contact" },
    ];

    const languages: { label: string; value: Locale }[] = [
        { label: "English", value: "en" },
        { label: "हिंदी", value: "hi" },
        { label: "मराठी", value: "mr" },
    ];

    const currentLangLabel = languages.find((l) => l.value === locale)?.label;

    return (
        <motion.nav
            style={{ backgroundColor: navBg, backdropFilter: navBlur, borderColor: navBorder }}
            className="sticky top-0 z-50 w-full border-b transition-colors duration-300"
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex h-20 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-3 group">
                        <motion.div
                            whileHover={{ scale: 1.05, rotate: -5 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative h-12 w-12"
                        >
                            <Image
                                src="/logo.png"
                                alt="Ankita Mahila Foundation Logo"
                                fill
                                className="object-contain drop-shadow-md"
                                priority
                            />
                        </motion.div>
                        <div className="flex flex-col justify-center">
                            <span className="text-xl font-black tracking-tighter text-brand-magenta leading-none sm:text-2xl text-glow">
                                Ankita Mahila
                            </span>
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold leading-none mt-1">
                                Foundation
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center space-x-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "text-sm font-medium transition-colors hover:text-brand-magenta relative py-2",
                                    pathname === link.href
                                        ? "text-brand-magenta font-semibold"
                                        : "text-foreground/70"
                                )}
                            >
                                {link.name}
                                {pathname === link.href && (
                                    <motion.div
                                        layoutId="nav-underline"
                                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-magenta rounded-full"
                                    />
                                )}
                            </Link>
                        ))}

                        {/* Language Switcher */}
                        <div className="relative">
                            <button
                                onClick={() => setIsLangOpen(!isLangOpen)}
                                className="flex items-center space-x-1 text-sm font-medium text-foreground/70 hover:text-brand-magenta transition-colors"
                            >
                                <Globe className="h-4 w-4" />
                                <span>{currentLangLabel}</span>
                                <ChevronDown className={cn("h-4 w-4 transition-transform", isLangOpen && "rotate-180")} />
                            </button>

                            <AnimatePresence>
                                {isLangOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        className="absolute right-0 mt-2 w-32 bg-background border rounded-2xl shadow-xl overflow-hidden"
                                    >
                                        {languages.map((lang) => (
                                            <button
                                                key={lang.value}
                                                onClick={() => {
                                                    setLocale(lang.value);
                                                    setIsLangOpen(false);
                                                }}
                                                className={cn(
                                                    "w-full text-left px-4 py-2 text-sm hover:bg-brand-magenta/5 transition-colors",
                                                    locale === lang.value ? "text-brand-magenta font-bold bg-brand-magenta/5" : "text-foreground/70"
                                                )}
                                            >
                                                {lang.label}
                                            </button>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button className="bg-brand-magenta hover:bg-brand-magenta/90 text-white rounded-full px-6 shadow-md shadow-brand-magenta/20 transition-all active:scale-95">
                                {t.nav.join}
                            </Button>
                        </motion.div>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="flex items-center space-x-4 lg:hidden">
                        {/* Mobile Language cycles */}
                        <button
                            onClick={() => {
                                const next = locale === "en" ? "hi" : locale === "hi" ? "mr" : "en";
                                setLocale(next);
                            }}
                            className="p-2 text-foreground/70 border rounded-full transition-all active:scale-90"
                        >
                            <Globe className="h-5 w-5" />
                        </button>
                        <button
                            className="p-2 text-foreground transition-all active:scale-90"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden border-t bg-background overflow-hidden shadow-2xl"
                    >
                        <div className="container mx-auto px-4 py-8 flex flex-col space-y-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={cn(
                                        "text-xl font-bold transition-colors hover:text-brand-magenta",
                                        pathname === link.href ? "text-brand-magenta" : "text-foreground/70"
                                    )}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Button className="bg-brand-magenta hover:bg-brand-magenta/90 text-white rounded-full w-full py-8 text-xl font-bold shadow-xl shadow-brand-magenta/20 transition-all active:scale-95">
                                {t.nav.join}
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
