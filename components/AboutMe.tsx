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
        <section id="sobre-mi" ref={sectionRef} className="py-24 bg-gray-light relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <div className="flex flex-col gap-12 items-center text-center">
                    {/* Biography Content - Centered and No Images */}
                    <div className="w-full space-y-8">
                        <div className="space-y-4">
                            <div className="reveal inline-flex items-center gap-2 bg-primary/5 text-primary font-bold text-[10px] uppercase tracking-[0.3em] px-4 py-1.5 rounded-full border border-primary/10 mx-auto">
                                ✨ Sobre Mí
                            </div>
                            <h2 className="reveal delay-100 text-4xl md:text-5xl font-black text-navy leading-tight tracking-tighter uppercase italic">
                                Soy <span className="text-primary italic">Lariza Ochoa</span>
                            </h2>
                        </div>

                        <div className="reveal delay-200 space-y-6 text-navy/80 text-base md:text-lg font-medium leading-relaxed">
                            <p>
                                Especialista en marketing digital, gestión estratégica de redes sociales y creación de contenido, con más de 10 años de experiencia ayudando a negocios a crecer en el mundo digital.
                            </p>
                            <p>
                                A lo largo de mi trayectoria he trabajado con clientes en diferentes partes de México, apoyando a empresas, emprendedores y marcas personales a construir una presencia digital sólida, profesional y alineada con sus objetivos de negocio.
                            </p>
                            <p className="font-bold italic text-navy text-xl">
                                Creo firmemente que las redes sociales no son solo para publicar, sino para comunicar, conectar y generar oportunidades reales de crecimiento para cada marca.
                            </p>
                            <p>
                                Trabajo de manera cercana con cada cliente para entender su esencia, su mercado y su audiencia. A partir de ahí, desarrollamos estrategias personalizadas que incluyen gestión de redes sociales, análisis y optimización de cuentas, creación de contenido estratégico y desarrollo de páginas web que ayuden a fortalecer su presencia digital.
                            </p>
                            <p>
                                Soy Licenciada en Publicidad por la Universidad del Valle de Atemajac, y a lo largo de estos años he complementado mi formación con diversas certificaciones en marketing digital y herramientas digitales, lo que me permite mantenerme actualizada en un entorno que evoluciona constantemente.
                            </p>
                            <div className="p-8 bg-white rounded-[2.5rem] border border-navy/5 shadow-sm italic font-bold text-primary max-w-3xl mx-auto">
                                Mi enfoque combina estrategia, creatividad y análisis, porque detrás de cada publicación, campaña o página web, siempre debe existir un objetivo claro: hacer que tu negocio crezca.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
