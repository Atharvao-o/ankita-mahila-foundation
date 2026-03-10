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
  title: "Ankita Mahila Foundation | Support • Uplift • Empower",
  description: "Ankita Mahila Foundation is a women empowerment organization focusing on financial independence through entrepreneurship, exhibitions, and digital literacy.",
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
