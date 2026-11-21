"use client";

import { useEffect, useRef } from "react";

const contactWhatsappUrl = `https://wa.me/523353313224?text=${encodeURIComponent("Hola, Lari. Me interesa agendar un diagnóstico para mi negocio")}`;

export default function CTA() {
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
        <section id="contacto" ref={sectionRef} className="py-16 md:py-24 relative overflow-hidden bg-white">
            <div className="max-w-5xl mx-auto px-5 sm:px-6 relative z-10">
                <div className="bg-navy rounded-3xl sm:rounded-[3rem] p-7 sm:p-10 md:p-16 lg:p-20 relative overflow-hidden group text-center">
                    {/* Background Orbs */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -mr-48 -mt-48 animate-pulse" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/15 rounded-full blur-[120px] -ml-48 -mb-48" />

                    <div className="max-w-3xl mx-auto space-y-6 sm:space-y-8 relative z-10">
                        <h2 className="reveal delay-100 text-[1.75rem] sm:text-5xl md:text-6xl font-black text-white leading-tight tracking-tight">
                            Agenda tu{" "}
                            <span className="text-primary">diagnóstico estratégico</span>
                        </h2>

                        <div className="reveal delay-200 space-y-3 sm:space-y-4">
                            <p className="text-white text-base sm:text-lg md:text-2xl font-bold">
                                Cuéntame sobre tu negocio y tus objetivos.
                            </p>
                            <p className="text-white/90 text-[15px] sm:text-base md:text-lg font-medium leading-relaxed max-w-2xl mx-auto">
                                Escríbeme por WhatsApp. Revisaré tu situación y te propondré la solución que realmente impulse tus resultados.
                            </p>
                        </div>

                        <div className="reveal delay-300 pt-2 sm:pt-4 flex items-center justify-center">
                            <a
                                href={contactWhatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group bg-[#25D366] hover:bg-[#1ebe5d] text-white px-6 sm:px-10 py-4 sm:py-5 min-h-[52px] rounded-2xl font-extrabold text-sm sm:text-base tracking-normal inline-flex items-center justify-center gap-2.5 sm:gap-3 hover:scale-105 transition-all duration-300 shadow-2xl shadow-[#25D366]/30 w-full sm:w-auto"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                Escríbeme por WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
