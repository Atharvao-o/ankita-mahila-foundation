"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send, Instagram, Facebook, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "@/context/LocaleContext";

export default function ContactPage() {
    const { t } = useLocale();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: t.contactPage.subjects[0],
        message: ""
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error?.message || result.error || 'Something went wrong');
            }

            setSubmitted(true);
            setFormData({ name: "", email: "", subject: t.contactPage.subjects[0], message: "" });
        } catch (err: any) {
            console.error('Submission error:', err);
            setError(err.message || 'Failed to send message. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="flex flex-col min-h-screen font-sans bg-white">
            <Navbar />
            <main className="flex-grow">
                {/* Header */}
                <section className="relative overflow-hidden bg-brand-cream/50 py-32">
                    <div className="absolute inset-0 bg-gradient-to-b from-brand-gold/10 to-transparent" />
                    <div className="container relative z-10 mx-auto px-4 md:px-6 text-center space-y-8">
                        <motion.h1
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-5xl md:text-8xl font-black tracking-tight text-foreground leading-[1]"
                        >
                            {t.contactPage.heroTitle}
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl md:text-2xl text-foreground/60 max-w-3xl mx-auto font-medium"
                        >
                            {t.contactPage.heroDesc}
                        </motion.p>
                    </div>
                </section>

                {/* Contact Grid */}
                <section className="py-24 bg-white relative overflow-hidden">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
                            {/* Contact Info */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="lg:col-span-1 space-y-16"
                            >
                                <div className="space-y-10">
                                    <h2 className="text-4xl font-black tracking-tight">{t.contactPage.detailsTitle}</h2>
                                    <div className="space-y-8">
                                        <div className="flex items-start gap-8 group">
                                            <div className="bg-brand-magenta/10 p-5 rounded-3xl text-brand-magenta group-hover:scale-110 transition-transform shadow-lg shadow-brand-magenta/5">
                                                <MapPin className="h-8 w-8" />
                                            </div>
                                            <div>
                                                <h4 className="font-black text-xl mb-1">{t.contactPage.addressTitle}</h4>
                                                <p className="text-foreground/70 text-lg font-medium leading-relaxed">{t.contactPage.addressDesc}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-8 group">
                                            <div className="bg-brand-gold/10 p-5 rounded-3xl text-brand-gold group-hover:scale-110 transition-transform shadow-lg shadow-brand-gold/5">
                                                <Phone className="h-8 w-8" />
                                            </div>
                                            <div>
                                                <h4 className="font-black text-xl mb-1">{t.contactPage.phoneTitle}</h4>
                                                <p className="text-foreground/70 text-lg font-medium leading-relaxed">+91 98698 73323</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-8 group">
                                            <div className="bg-brand-green/10 p-5 rounded-3xl text-brand-green group-hover:scale-110 transition-transform shadow-lg shadow-brand-green/5">
                                                <Mail className="h-8 w-8" />
                                            </div>
                                            <div>
                                                <h4 className="font-black text-xl mb-1">{t.contactPage.emailTitle}</h4>
                                                <p className="text-foreground/70 text-lg font-medium leading-relaxed">contact@ankitamahilafoundation.com<br />support@ankitamahilafoundation.com</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-8 pt-10 border-t border-brand-gold/10">
                                    <h3 className="text-2xl font-black tracking-tight">{t.contactPage.followTitle}</h3>
                                    <div className="flex gap-4">
                                        {[Instagram, Facebook].map((Icon, i) => (
                                            <Button key={i} variant="outline" className="h-16 w-16 rounded-[20px] border-brand-magenta/20 text-brand-magenta hover:bg-brand-magenta hover:text-white border-2 transition-all hover:scale-110 active:scale-95 shadow-xl shadow-brand-magenta/5">
                                                <Icon className="h-7 w-7" />
                                            </Button>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>

                            {/* Contact Form */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="lg:col-span-2"
                            >
                                <div className="bg-zinc-50 rounded-[60px] p-10 md:p-16 border border-brand-gold/10 shadow-2xl relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 h-64 w-64 rounded-full bg-brand-gold/10 blur-3xl opacity-50" />
                                    <h2 className="text-4xl font-black mb-10 text-brand-magenta tracking-tight relative z-10">{t.contactPage.formTitle}</h2>
                                    
                                    <AnimatePresence mode="wait">
                                        {submitted ? (
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0.9 }}
                                                className="bg-brand-green/10 p-10 rounded-[40px] text-center space-y-6 relative z-10"
                                            >
                                                <div className="bg-brand-green text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto shadow-xl shadow-brand-green/20">
                                                    <CheckCircle2 className="w-10 h-10" />
                                                </div>
                                                <div className="space-y-2">
                                                    <h3 className="text-2xl font-black text-brand-green">Message Sent Successfully!</h3>
                                                    <p className="text-foreground/60 font-medium">Thank you for reaching out. We will get back to you soon.</p>
                                                </div>
                                                <Button 
                                                    onClick={() => setSubmitted(false)}
                                                    variant="outline"
                                                    className="rounded-full px-10 border-brand-green text-brand-green hover:bg-brand-green hover:text-white"
                                                >
                                                    Send Another Message
                                                </Button>
                                            </motion.div>
                                        ) : (
                                            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                    <div className="space-y-3">
                                                        <label className="text-sm font-black uppercase tracking-[0.2em] text-foreground/40 ml-2">{t.contactPage.nameLabel}</label>
                                                        <input 
                                                            type="text" 
                                                            name="name"
                                                            required
                                                            value={formData.name}
                                                            onChange={handleChange}
                                                            placeholder="Anjali Gupta" 
                                                            className="w-full rounded-2xl border-2 border-brand-gold/10 bg-white px-8 py-5 focus:border-brand-magenta outline-none transition-all shadow-lg shadow-black/5 font-medium text-lg placeholder:text-foreground/20" 
                                                        />
                                                    </div>
                                                    <div className="space-y-3">
                                                        <label className="text-sm font-black uppercase tracking-[0.2em] text-foreground/40 ml-2">{t.contactPage.emailLabel}</label>
                                                        <input 
                                                            type="email" 
                                                            name="email"
                                                            required
                                                            value={formData.email}
                                                            onChange={handleChange}
                                                            placeholder="anjali@example.com" 
                                                            className="w-full rounded-2xl border-2 border-brand-gold/10 bg-white px-8 py-5 focus:border-brand-magenta outline-none transition-all shadow-lg shadow-black/5 font-medium text-lg placeholder:text-foreground/20" 
                                                        />
                                                    </div>
                                                </div>
                                                <div className="space-y-3">
                                                    <label className="text-sm font-black uppercase tracking-[0.2em] text-foreground/40 ml-2">{t.contactPage.subjectLabel}</label>
                                                    <div className="relative">
                                                        <select 
                                                            name="subject"
                                                            value={formData.subject}
                                                            onChange={handleChange}
                                                            className="w-full rounded-2xl border-2 border-brand-gold/10 bg-white px-8 py-5 focus:border-brand-magenta outline-none transition-all shadow-lg shadow-black/5 appearance-none font-bold text-lg text-foreground/70"
                                                        >
                                                            {t.contactPage.subjects.map((s: string) => (
                                                                <option key={s}>{s}</option>
                                                            ))}
                                                        </select>
                                                        <div className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none">
                                                            <div className="h-2 w-2 border-b-2 border-right-2 border-brand-magenta rotate-45" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="space-y-3">
                                                    <label className="text-sm font-black uppercase tracking-[0.2em] text-foreground/40 ml-2">{t.contactPage.messageLabel}</label>
                                                    <textarea 
                                                        name="message"
                                                        required
                                                        value={formData.message}
                                                        onChange={handleChange}
                                                        placeholder="Tell us about your business or inquiry..." 
                                                        rows={5} 
                                                        className="w-full rounded-[30px] border-2 border-brand-gold/10 bg-white px-8 py-6 focus:border-brand-magenta outline-none transition-all shadow-lg shadow-black/5 resize-none font-medium text-lg placeholder:text-foreground/20" 
                                                    />
                                                </div>

                                                {error && (
                                                    <motion.div 
                                                        initial={{ opacity: 0, y: -10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        className="flex items-center gap-3 text-red-500 bg-red-50 p-4 rounded-2xl border border-red-100 font-medium"
                                                    >
                                                        <AlertCircle className="w-5 h-5 flex-shrink-0" />
                                                        <p>{error}</p>
                                                    </motion.div>
                                                )}

                                                <Button 
                                                    type="submit"
                                                    disabled={isSubmitting}
                                                    className="w-full md:w-auto bg-brand-magenta hover:bg-brand-magenta/90 text-white rounded-full px-16 h-20 text-xl font-black shadow-2xl shadow-brand-magenta/30 transition-all hover:scale-105 active:scale-95 group/btn disabled:opacity-70 disabled:scale-100"
                                                >
                                                    <span className="flex items-center">
                                                        {isSubmitting ? (
                                                            <>
                                                                Sending...
                                                                <Loader2 className="ml-3 h-6 w-6 animate-spin" />
                                                            </>
                                                        ) : (
                                                            <>
                                                                {t.contactPage.sendBtn}
                                                                <Send className="ml-3 h-6 w-6 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                                                            </>
                                                        )}
                                                    </span>
                                                </Button>
                                            </form>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
