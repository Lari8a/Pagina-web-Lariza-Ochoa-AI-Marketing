import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import Link from "next/link";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const readableTitle = slug.replace(/-/g, " ");
    return {
        title: `${readableTitle} | Blog`,
        description: `Artículo sobre ${readableTitle}: estrategias de marketing digital, gestión de redes sociales e inteligencia artificial por Lariza Ochoa.`,
        alternates: {
            canonical: `/blog/${slug}`,
        },
        robots: {
            index: false,
            follow: true,
        },
    };
}

export default async function BlogPost({ params }: Props) {
    const { slug } = await params;
    const readableTitle = slug.replace(/-/g, " ");
    return (
        <main>
            <Navbar />
            <article className="pt-32 pb-24 bg-white">
                <div className="max-w-4xl mx-auto px-6">
                    <header className="mb-10 space-y-3">
                        <p className="text-primary font-bold text-xs uppercase tracking-wider">Artículo en preparación</p>
                        <h1 className="text-3xl md:text-5xl font-black text-navy tracking-tight capitalize">
                            {readableTitle}
                        </h1>
                    </header>

                    <div className="prose prose-lg max-w-none text-navy/85 space-y-6">
                        <p>
                            Este espacio está reservado para un nuevo artículo de Lariza Ochoa AI Marketing sobre gestión de redes sociales, páginas web y automatización con inteligencia artificial.
                        </p>
                        <p>
                            <Link href="/#contacto" className="font-bold text-primary hover:text-navy transition-colors">
                                Agenda tu diagnóstico estratégico aquí →
                            </Link>
                        </p>
                    </div>
                </div>
            </article>
            <Footer />
        </main>
    );
}
