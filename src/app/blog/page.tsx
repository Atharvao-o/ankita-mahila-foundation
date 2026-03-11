import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { BookOpen, Clock, ChevronRight } from "lucide-react";

const articles = [
    {
        title: "How to Price Your Handmade Products for Profit",
        description: "Learn the essential formulas and market research strategies for pricing your unique creations.",
        category: "Business Tips",
        date: "March 5, 2026",
        image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=400"
    },
    {
        title: "5 Steps to Launching Your Shopify Store",
        description: "A beginner's guide for women entrepreneurs looking to take their business into the digital world.",
        category: "Digital Learning",
        date: "February 28, 2026",
        image: "/images/illustrations/online_ecom.jpg"
    },
    {
        title: "The Power of Storytelling in Branding",
        description: "Why your personal journey as a woman entrepreneur is your most powerful marketing tool.",
        category: "Branding",
        date: "February 15, 2026",
        image: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?auto=format&fit=crop&q=80&w=400"
    }
];

export default function BlogPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow bg-zinc-50">
                <section className="bg-brand-gold py-24 text-white">
                    <div className="container mx-auto px-4 md:px-6 text-center space-y-6">
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Learning Center</h1>
                        <p className="text-xl text-white/80 max-w-2xl mx-auto">
                            Resources, tips, and stories to help you grow your business and navigate the digital economy.
                        </p>
                    </div>
                </section>

                <section className="py-24">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                            {articles.map((article) => (
                                <div key={article.title} className="bg-white rounded-[40px] overflow-hidden shadow-lg hover:shadow-2xl transition-all group">
                                    <div className="h-64 overflow-hidden">
                                        <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    </div>
                                    <div className="p-8 space-y-4">
                                        <span className="text-brand-magenta font-bold uppercase text-xs tracking-widest">{article.category}</span>
                                        <h3 className="text-2xl font-bold leading-tight group-hover:text-brand-magenta transition-colors">{article.title}</h3>
                                        <p className="text-foreground/60 line-clamp-2">{article.description}</p>
                                        <div className="flex items-center justify-between pt-6 border-t border-border/50">
                                            <span className="flex items-center gap-2 text-sm text-foreground/40 font-medium"><Clock className="h-4 w-4" /> {article.date}</span>
                                            <Button variant="ghost" className="text-brand-magenta font-bold p-0">
                                                Read More <ChevronRight className="h-5 w-5" />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
