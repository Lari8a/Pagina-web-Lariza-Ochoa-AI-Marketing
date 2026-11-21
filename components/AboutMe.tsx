"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function AboutMe() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) =>
                entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
            { threshold: 0.1 }
        );
        sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section id="sobre-mi" ref={sectionRef} className="py-16 md:py-24 bg-gray-light relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-5 sm:px-6 relative z-10 space-y-8 lg:space-y-12">
                {/* Top Row: Left Text Block + Right Image matching exact height on desktop */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
                    {/* Left Column: Text Block (determines the row height on desktop) */}
                    <div className="lg:col-span-7 flex flex-col justify-between space-y-6 text-left">
                        <div className="space-y-3">
                            <div className="reveal inline-flex items-center gap-2 bg-primary/10 text-primary font-extrabold text-xs uppercase tracking-wider px-4 py-1.5 rounded-full border border-primary/20">
                                ✨ Sobre mí
                            </div>
                            <h2 className="reveal delay-100 text-3xl md:text-5xl font-black text-navy leading-tight tracking-tight">
                                Soy <span className="text-primary">Lariza Ochoa</span>
                            </h2>
                        </div>

                        <div className="reveal delay-200 space-y-5 text-navy/90 text-base md:text-lg font-medium leading-relaxed text-left">
                            <p>
                                Soy Lariza Ochoa, Licenciada en Publicidad por la Universidad del Valle de Atemajac, con más de 10 años de experiencia en marketing digital. Desde Guadalajara trabajo con negocios y marcas personales de todo México.
                            </p>
                            <p>
                                Creo que las redes no son solo para publicar, sino para generar oportunidades. Por eso cada plan parte de entender tu negocio, tu mercado y tu cliente.
                            </p>
                            <p>
                                Combino estrategia, creatividad y herramientas de IA para que te dediques a lo que sabes hacer.
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Image (below text on mobile with vertical aspect ratio, exact height match on desktop) */}
                    <div className="lg:col-span-5 reveal delay-150 relative aspect-[3/4] sm:aspect-[4/5] lg:aspect-auto lg:h-full w-full max-w-md mx-auto lg:max-w-none rounded-3xl overflow-hidden bg-white border border-navy/10 shadow-lg">
                        <Image
                            src="/lariza-ochoa.jpg"
                            alt="Lariza Ochoa trabajando en estrategia de marketing digital e inteligencia artificial"
                            fill
                            sizes="(max-width: 1024px) 100vw, 42vw"
                            className="object-cover object-[center_48%]"
                            priority
                        />
                    </div>
                </div>

                {/* Bottom Row: Orange closing box below both columns */}
                <div className="reveal delay-300 p-6 md:p-8 bg-primary text-white rounded-3xl shadow-md font-bold text-base md:text-lg leading-relaxed text-left lg:text-center">
                    Mi enfoque combina estrategia, creatividad y análisis, porque detrás de cada publicación, campaña o página web, siempre debe existir un objetivo claro: hacer que tu negocio crezca.
                </div>
            </div>
        </section>
    );
}
