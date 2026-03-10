"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { translations, Locale, TranslationType } from "@/locales/dictionary";

interface LocaleContextType {
    locale: Locale;
    setLocale: (locale: Locale) => void;
    t: TranslationType;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
    const [locale, setLocale] = useState<Locale>("en");

    // Optional: Load locale from localStorage
    useEffect(() => {
        const savedLocale = localStorage.getItem("locale") as Locale;
        if (savedLocale && (savedLocale === "en" || savedLocale === "hi" || savedLocale === "mr")) {
            setLocale(savedLocale);
        }
    }, []);

    const handleSetLocale = (newLocale: Locale) => {
        setLocale(newLocale);
        localStorage.setItem("locale", newLocale);
        document.documentElement.lang = newLocale;
    };

    const t = translations[locale];

    return (
        <LocaleContext.Provider value={{ locale, setLocale: handleSetLocale, t }}>
            {children}
        </LocaleContext.Provider>
    );
}

export function useLocale() {
    const context = useContext(LocaleContext);
    if (context === undefined) {
        throw new Error("useLocale must be used within a LocaleProvider");
    }
    return context;
}
