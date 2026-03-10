import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { VisionMarquee } from "@/components/home/VisionMarquee";
import { Features } from "@/components/home/Features";
import { AboutUsPreview } from "@/components/home/AboutUsPreview";
import { Impact } from "@/components/home/Impact";
import { CTASection } from "@/components/home/CTASection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <VisionMarquee />
        <Features />
        <Impact />
        <AboutUsPreview />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
