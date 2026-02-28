"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const services = [
    {
        id: "analysis",
        title: "Análisis de\nRedes Sociales",
        icon: "/services/analysis-v8.png",
        description: "Analizo a profundidad el estado actual de tus redes para detectar qué está funcionando, qué no y qué oportunidades de mejora existen.",
        extra: "Utilizo herramientas de inteligencia artificial para evaluar contenido, interacción, optimización de perfil y posicionamiento frente a tu competencia.",
        solution: "La falta de claridad y dirección en tu estrategia digital.",
        color: "from-primary/20",
    },
    {
        id: "strategic-mgmt",
        title: "Gestión Estratégica\nde Redes Sociales",
        icon: "/services/strategy-v8.png",
        description: "Me encargo de crear, estructurar y programar tu contenido para que tus redes se mantengan activas, profesionales y alineadas a tus objetivos de negocio.",
        extra: "Optimizo tus perfiles y desarrollo comunicación estratégica para atraer clientes potenciales.",
        solution: "Redes abandonadas, desordenadas o sin estrategia.",
        color: "from-secondary/20",
    },
    {
        id: "smart-mgmt",
        title: "Gestión Inteligente\nde Redes + AI",
        icon: "/services/smart-v8.png",
        description: "Llevo tu gestión a un nivel avanzado integrando contenido, atención a prospectos y automatización con inteligencia artificial.",
        extra: "Implemento chatbots, respuestas automáticas y sistemas de seguimiento para que tu negocio atienda clientes 24/7, incluso cuando no estás disponible.",
        solution: "Pérdida de prospectos, falta de seguimiento y saturación operativa.",
        color: "from-primary/20",
    },
    {
        id: "web-design",
        title: "Diseño de Páginas\nWeb & Landings",
        icon: "/services/web-v8.png",
        description: "Diseño sitios web modernos, rápidos y optimizados para conversión, estructurados estratégicamente para atraer y captar clientes.",
        extra: "Integro formularios inteligentes, automatizaciones y herramientas de seguimiento para que tu página no solo informe… sino que genere oportunidades de venta.",
        solution: "Negocios sin presencia profesional o con páginas que no convierten.",
        color: "from-navy/10",
    },
];

export default function Services() {
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

    const whatsappUrl = "https://wa.me/523312181168";

    return (
        <section id="servicios" ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
                    <div className="reveal inline-flex items-center gap-2 bg-primary/5 text-primary font-bold text-[10px] uppercase tracking-[0.3em] px-4 py-1.5 rounded-full border border-primary/10">
                        ⚡ Propuesta de Valor
                    </div>
                    <h2 className="reveal delay-100 text-4xl md:text-5xl font-black text-navy uppercase italic tracking-tighter leading-tight">
                        Servicios <span className="text-primary italic">IA</span> de Alto Impacto
                    </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
                    {services.map((service, i) => (
                        <div
                            key={service.id}
                            className={`reveal delay-${(i + 1) * 100} group relative bg-gray-light/30 p-8 md:p-14 rounded-[3rem] border border-navy/5 hover:border-primary/20 transition-all duration-700 hover:shadow-2xl hover:shadow-primary/5 flex flex-col gap-8 overflow-hidden`}
                        >
                            {/* Decorative Background Gradient */}
                            <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${service.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full blur-3xl -mr-20 -mt-20`} />

                            {/* Header: Icon next to Title */}
                            <div className="relative z-10 flex items-center gap-6 md:gap-8">
                                <div className="flex-shrink-0">
                                    <div className="relative w-20 h-20 md:w-28 md:h-28 transform transition-all duration-700 group-hover:scale-110 group-hover:rotate-3">
                                        <Image
                                            src={service.icon}
                                            alt={`Servicio de ${service.title} - Lariza AI Marketing`}
                                            width={112}
                                            height={112}
                                            className="w-full h-full object-contain filter drop-shadow-md"
                                            priority
                                        />
                                    </div>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-black text-navy uppercase italic leading-[1.1] tracking-tighter whitespace-pre-line">
                                    {service.title}
                                </h3>
                            </div>

                            {/* Description below */}
                            <div className="relative z-10 space-y-6">
                                <div className="space-y-5 text-navy/70 font-medium leading-relaxed text-sm md:text-base">
                                    <p>
                                        {service.description}
                                    </p>
                                    <p className="text-xs md:text-sm text-navy/50 italic border-l-2 border-primary/30 pl-6 py-2">
                                        {service.extra}
                                    </p>
                                </div>

                                <div className="pt-6 border-t border-navy/5 space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-navy/5 flex items-center justify-center">
                                            <span className="text-[10px] font-black text-navy/40">?</span>
                                        </div>
                                        <span className="text-[10px] font-black uppercase tracking-widest text-navy/50">¿Qué soluciona?</span>
                                    </div>
                                    <p className="text-navy font-bold text-base md:text-lg leading-tight">
                                        {service.solution}
                                    </p>
                                </div>

                                <div className="pt-8">
                                    <a
                                        href={whatsappUrl}
                                        target="_blank"
                                        className="inline-flex items-center gap-3 text-[11px] font-black text-navy uppercase tracking-[0.2em] group/btn transition-all duration-300 hover:text-primary"
                                    >
                                        <span className="relative">
                                            Comienza ahora
                                            <span className="absolute -bottom-1 left-0 w-full h-px bg-current transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300" />
                                        </span>
                                        <ArrowRight size={16} className="transform transition-transform group-hover/btn:translate-x-2" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
