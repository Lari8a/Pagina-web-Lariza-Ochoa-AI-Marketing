import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Metadata } from "next";

type Props = {
    params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const slug = params.slug;
    return {
        title: `Lectura: ${slug.replace(/-/g, " ")}`,
        description: `Explora nuestro artículo sobre ${slug.replace(/-/g, " ")} en Lariza Ochoa AI Marketing.`,
    };
}

export default function BlogPost({ params }: Props) {
    return (
        <main>
            <Navbar />
            <article className="pt-32 pb-24 bg-white">
                <div className="max-w-4xl mx-auto px-6">
                    <header className="mb-12">
                        <h1 className="text-4xl md:text-5xl font-black text-navy uppercase italic tracking-tighter mb-4">
                            {params.slug.replace(/-/g, " ")}
                        </h1>
                        <p className="text-primary font-bold text-sm uppercase tracking-widest">Contenido en desarrollo</p>
                    </header>

                    <div className="prose prose-lg max-w-none text-navy/70">
                        <p>Este es un espacio reservado para el contenido estratégico de Lariza Ochoa AI Marketing. Pronto encontrarás aquí guías detalladas y análisis sobre el uso de la IA en el mundo real.</p>
                    </div>
                </div>
            </article>
            <Footer />
        </main>
    );
}
