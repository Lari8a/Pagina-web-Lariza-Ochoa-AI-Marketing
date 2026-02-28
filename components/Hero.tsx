"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Hero() {
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
        <section
            ref={sectionRef}
            className="min-h-[70vh] flex items-center pt-20 pb-10 justify-center bg-white overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-6 relative">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center relative z-10">
                    {/* Text Content - Scaled down and separated */}
                    <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left order-2 lg:order-1">
                        <div className="reveal space-y-3">
                            <div className="inline-flex items-center gap-2 bg-primary/5 text-primary font-bold text-[10px] uppercase tracking-[0.3em] px-4 py-1.5 rounded-full border border-primary/10">
                                🚀 IA de Próxima Generación
                            </div>
                            <h1 className="text-3xl md:text-5xl xl:text-6xl font-black text-navy leading-[0.9] italic tracking-tighter uppercase p-1">
                                <span className="block whitespace-nowrap">Agencia de Marketing <span className="text-primary italic">AI</span></span>
                                <span className="block whitespace-nowrap text-secondary">Resultados que Transforman</span>
                                <span className="block whitespace-nowrap">tu presencia digital</span>
                            </h1>
                        </div>

                        <p className="reveal delay-100 text-sm md:text-lg text-navy/70 font-bold leading-snug max-w-md mx-auto lg:mx-0 text-justify">
                            Impulsamos tu negocio con estrategias de inteligencia artificial, gestión de redes sociales y automatizaciones diseñadas para convertir.
                        </p>
                    </div>

                    {/* Final Image Illustration - Contained and separated */}
                    <div className="w-full lg:w-1/2 reveal delay-200 relative order-1 lg:order-2 flex justify-center lg:justify-end">
                        <div className="w-full max-w-[350px] md:max-w-[450px]">
                            <Image
                                src="/hero-final.png"
                                alt="Estrategias de Marketing con Inteligencia Artificial por Lariza Ochoa - Agencia Digital"
                                width={800}
                                height={800}
                                className="w-full h-auto drop-shadow-[0_15px_40px_rgba(31,42,68,0.1)] animate-float"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
