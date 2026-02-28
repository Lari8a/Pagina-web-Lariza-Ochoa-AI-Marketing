import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Blog de Marketing con IA y Estrategia Digital",
    description: "Aprende sobre inteligencia artificial, automatización y estrategias de redes sociales para potenciar tu negocio.",
};

export default function BlogPage() {
    return (
        <main>
            <Navbar />
            <section className="pt-32 pb-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-6xl font-black text-navy uppercase italic tracking-tighter mb-6">
                            Blog <span className="text-primary italic">IA Marketing</span>
                        </h1>
                        <p className="text-navy/60 text-lg max-w-2xl mx-auto">
                            Explora las últimas tendencias en inteligencia artificial aplicada al marketing y descubre cómo automatizar tu éxito.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Placeholder for future posts */}
                        <div className="bg-gray-light p-8 rounded-3xl border border-navy/5 flex flex-col gap-4">
                            <div className="aspect-video bg-navy/10 rounded-2xl animate-pulse" />
                            <h2 className="text-xl font-black text-navy uppercase italic">Próximamente</h2>
                            <p className="text-navy/60 text-sm italic">Estamos preparando contenido de alto impacto para ti.</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
