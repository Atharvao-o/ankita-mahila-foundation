import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import { LocaleProvider } from "@/context/LocaleContext";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ankitamahilafoundation.com"),
  title: {
    default: "Ankita Mahila Foundation | Women Empowerment NGO in India",
    template: "%s | Ankita Mahila Foundation"
  },
  description: "Ankita Mahila Foundation is an NGO dedicated to women empowerment, education, skill development, and community support in India.",
  keywords: ["Ankita Mahila Foundation", "Women Empowerment India", "Female Entrepreneurship", "Women Exhibitions", "Social Upliftment", "Digital Literacy for Women"],
  authors: [{ name: "Ankita Mahila Foundation" }],
  creator: "Ankita Mahila Foundation",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ankitamahilafoundation.com",
    title: "Ankita Mahila Foundation",
    description: "Women Empowerment NGO",
    siteName: "Ankita Mahila Foundation",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ankita Mahila Foundation",
    description: "Supporting women's journey to financial independence.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
};

import { ThemeProvider } from "@/components/theme-provider";
import { DevelopmentBanner } from "@/components/layout/DevelopmentBanner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="mr" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${rubik.variable} font-sans antialiased bg-background text-foreground`}
      >
        <LocaleProvider>
          <DevelopmentBanner />
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
