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
    default: "Ankita Mahila Foundation | Empowering Women through Entrepreneurship",
    template: "%s | Ankita Mahila Foundation"
  },
  description: "Ankita Mahila Foundation is a premier women empowerment organization in India focusing on financial independence, entrepreneurship exhibitions, and digital literacy.",
  keywords: ["Ankita Mahila Foundation", "Women Empowerment India", "Female Entrepreneurship", "Women Exhibitions", "Social Upliftment", "Digital Literacy for Women"],
  authors: [{ name: "Ankita Mahila Foundation" }],
  creator: "Ankita Mahila Foundation",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.ankitamahilafoundation.com",
    title: "Ankita Mahila Foundation | Support • Uplift • Empower",
    description: "Empowering women to achieve financial independence through entrepreneurship and support networks.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${rubik.variable} font-sans antialiased bg-background text-foreground`}
      >
        <LocaleProvider>
          {children}
        </LocaleProvider>
      </body>
    </html>
  );
}
