import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Blog de marketing digital con IA",
    description: "Artículos, guías y consejos sobre gestión de redes sociales, páginas web, chatbots con IA y estrategia digital para negocios en Guadalajara y todo México.",
    alternates: {
        canonical: "/blog",
    },
    robots: {
        index: false,
        follow: true,
    },
};

export default function BlogPage() {
    return (
        <main>
            <Navbar />
            <section className="pt-32 pb-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16 space-y-4">
                        <h1 className="text-3xl md:text-5xl font-black text-navy tracking-tight">
                            Blog de <span className="text-primary">marketing digital con IA</span>
                        </h1>
                        <p className="text-navy/80 text-lg max-w-2xl mx-auto font-medium">
                            Explora tendencias en inteligencia artificial aplicada al marketing, gestión de redes sociales y automatización para hacer crecer tu negocio.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Placeholder for future posts */}
                        <div className="bg-gray-light p-8 rounded-3xl border border-navy/10 flex flex-col gap-4">
                            <div className="aspect-video bg-navy/10 rounded-2xl animate-pulse" />
                            <h2 className="text-xl font-bold text-navy">Próximamente</h2>
                            <p className="text-navy/80 text-sm font-medium">
                                Estoy preparando artículos prácticos sobre estrategia digital e inteligencia artificial para tu negocio.
                            </p>
                            <Link href="/#servicios" className="text-sm font-bold text-primary hover:text-navy transition-colors mt-2">
                                Ver servicios disponibles →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
