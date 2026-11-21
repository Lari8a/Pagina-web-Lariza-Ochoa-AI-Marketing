"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const diagnosticWhatsappUrl = `https://wa.me/523353313224?text=${encodeURIComponent("Hola, Lari. Me interesa agendar un diagnóstico para mi negocio")}`;

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
            className="flex items-center pt-24 pb-12 sm:pt-32 sm:pb-20 justify-center bg-white overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-5 sm:px-6 w-full relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    {/* Columna izquierda (~60% en escritorio): Texto, botón y experiencia alineados a la izquierda */}
                    <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-left">
                        <div className="reveal space-y-3 sm:space-y-4">
                            <div className="inline-flex items-center bg-primary/10 text-primary font-extrabold text-[11px] sm:text-sm leading-snug tracking-wide px-3.5 sm:px-4 py-1.5 rounded-2xl sm:rounded-full border border-primary/20">
                                Marketing digital con IA · Guadalajara, para todo México
                            </div>
                            <h1 className="text-[2rem] sm:text-5xl xl:text-6xl font-black text-navy leading-[1.12] sm:leading-[1.08] tracking-tight break-words">
                                Redes sociales que te traen <span className="text-primary">clientes</span>, no solo likes
                            </h1>
                        </div>

                        <p className="reveal delay-100 text-[15px] sm:text-lg text-navy/85 font-medium leading-relaxed max-w-2xl">
                            Gestiono el contenido de tus redes, diseño tu página web y automatizo con IA la atención a tus prospectos. Todo como parte de una misma estrategia para que más personas encuentren tu negocio y puedan contactarte. Así tú puedes concentrarte en atender a tus clientes.
                        </p>

                        {/* Botón naranja inmediatamente después del subtítulo y línea de experiencia debajo */}
                        <div className="reveal delay-150 pt-1 flex flex-col items-start gap-3">
                            <a
                                href={diagnosticWhatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-primary hover:bg-navy text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider px-6 sm:px-10 py-4 min-h-[52px] sm:min-h-[54px] rounded-2xl shadow-lg shadow-primary/25 hover:shadow-navy/20 hover:-translate-y-0.5 active:scale-95 transition-all duration-300 text-center"
                            >
                                Agenda tu diagnóstico
                            </a>

                            <p className="text-xs sm:text-sm font-bold text-navy/75 tracking-wide w-full sm:w-auto text-center sm:text-left">
                                +10 años de experiencia · Clientes en todo México
                            </p>
                        </div>
                    </div>

                    {/* Columna derecha (~40% en escritorio): Ilustración del teléfono centrada verticalmente */}
                    <div className="lg:col-span-5 reveal delay-200 flex items-center justify-center pt-2 lg:pt-0">
                        <Image
                            src="/hero-phone.png"
                            alt="Lariza Ochoa AI Marketing - Estrategia digital en celular"
                            width={800}
                            height={800}
                            className="w-full max-w-[220px] xs:max-w-[250px] sm:max-w-[320px] lg:max-w-[400px] h-auto object-contain drop-shadow-lg"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
