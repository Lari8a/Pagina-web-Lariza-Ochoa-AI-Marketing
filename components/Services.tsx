"use client";

import { useEffect, useRef } from "react";
import { Share2, Bot, Globe, Compass } from "lucide-react";

const services = [
    {
        id: "strategic-mgmt",
        title: "Gestión de redes sociales",
        Icon: Share2,
        description: "Creo, diseño y programo tu contenido en Facebook e Instagram, con un calendario mensual alineado a lo que quieres vender.",
        bullets: [
            "Calendario mensual de contenido",
            "Diseño de posts, carruseles y reels",
            "Programación y publicación",
            "Optimización de tus perfiles",
        ],
        forYouIf: "tus redes están abandonadas, desordenadas o no sabes qué publicar.",
        buttonText: "Cotiza tu gestión",
        message: "Hola, Lari. Me interesa cotizar la gestión de redes sociales para mi negocio.",
        cardBg: "bg-[#FFF3EE] border-[#FFD8C9]", // Coral suave
        iconBg: "bg-[#FF6A3D] text-white",
    },
    {
        id: "smart-mgmt",
        title: "Chatbots y atención con IA",
        Icon: Bot,
        description: "Tu negocio responde a clientes en WhatsApp y redes las 24 horas, con respuestas automáticas y seguimiento a cada prospecto.",
        bullets: [
            "Chatbot con las preguntas frecuentes de tu negocio",
            "Respuestas automáticas fuera de horario",
            "Seguimiento a prospectos que no compraron",
            "Ajustes durante el primer mes",
        ],
        forYouIf: "pierdes clientes porque tardas en contestar.",
        buttonText: "Quiero mi chatbot",
        message: "Hola, Lari. Me interesa un chatbot para atender a los clientes de mi negocio.",
        cardBg: "bg-[#F4F0FF] border-[#DDD2FE]", // Lavanda suave
        iconBg: "bg-[#7B3FE4] text-white",
    },
    {
        id: "web-design",
        title: "Páginas web y landing pages",
        Icon: Globe,
        description: "Páginas rápidas, claras y pensadas para que el visitante te escriba o te compre.",
        bullets: [
            "Diseño adaptado a celular",
            "Formularios y botón directo a WhatsApp",
            "Textos escritos para vender",
            "Listas para aparecer en Google",
        ],
        forYouIf: "no tienes página o la tuya no te genera mensajes.",
        buttonText: "Cotiza tu página",
        message: "Hola, Lari. Me interesa cotizar una página web o landing page para mi negocio.",
        cardBg: "bg-[#FFF7EB] border-[#FDE2BA]", // Durazno suave
        iconBg: "bg-[#F59E0B] text-white",
    },
    {
        id: "consulting",
        title: "Consultoría personalizada",
        Icon: Compass,
        description: "Reviso contigo qué funciona, qué puedes mejorar y por dónde te conviene empezar. Te propongo un plan claro que puedes poner en marcha conmigo o por tu cuenta.",
        bullets: [
            "Sesión de diagnóstico",
            "Plan de acción por prioridades",
        ],
        forYouIf: "sabes que algo no está funcionando, pero no sabes qué.",
        buttonText: "Agenda tu consultoría",
        message: "Hola, Lari. Me interesa agendar una consultoría personalizada para mi negocio.",
        cardBg: "bg-[#FDF2F4] border-[#F8D4DC]", // Rosa empolvado suave
        iconBg: "bg-[#E11D48] text-white",
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

    const whatsappBaseUrl = "https://wa.me/523353313224";

    return (
        <section id="servicios" ref={sectionRef} className="py-16 md:py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16 space-y-3 sm:space-y-4">
                    <div className="reveal inline-flex items-center gap-2 bg-primary/10 text-primary font-extrabold text-xs uppercase tracking-wider px-4 py-1.5 rounded-full border border-primary/20">
                        ⚡ Propuesta de valor
                    </div>
                    <h2 className="reveal delay-100 text-3xl md:text-5xl font-black text-navy tracking-tight leading-tight">
                        Servicios <span className="text-primary">IA</span> de Alto Impacto
                    </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
                    {services.map((service, i) => {
                        const whatsappUrl = `${whatsappBaseUrl}?text=${encodeURIComponent(service.message)}`;
                        const IconComponent = service.Icon;
                        return (
                            <div
                                key={service.id}
                                className={`reveal delay-${(i + 1) * 100} group relative ${service.cardBg} p-6 sm:p-8 md:p-10 rounded-3xl sm:rounded-[2.5rem] border transition-all duration-500 hover:shadow-xl flex flex-col justify-between gap-6 sm:gap-8 overflow-hidden h-full`}
                            >
                                <div className="relative z-10 flex flex-col gap-5 sm:gap-6 flex-1">
                                    {/* Header: Distinct Icon next to Title */}
                                    <div className="flex items-center gap-4 sm:gap-5">
                                        <div className={`w-13 h-13 sm:w-16 sm:h-16 p-3 sm:p-0 rounded-2xl ${service.iconBg} shadow-md flex items-center justify-center flex-shrink-0 transition-transform duration-500 group-hover:scale-105`}>
                                            <IconComponent className="w-7 h-7 sm:w-8 sm:h-8" strokeWidth={2.2} />
                                        </div>
                                        <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-navy leading-snug tracking-tight">
                                            {service.title}
                                        </h3>
                                    </div>

                                    {/* Description and Bullets */}
                                    <div className="space-y-5 sm:space-y-6 flex-1 flex flex-col justify-between">
                                        <div className="space-y-4 text-navy font-medium leading-relaxed text-[15px] sm:text-base">
                                            <p>
                                                {service.description}
                                            </p>
                                            <ul className="space-y-2.5 pl-1">
                                                {service.bullets.map((bullet, idx) => (
                                                    <li key={idx} className="flex items-start gap-3 text-navy text-sm md:text-base font-medium">
                                                        <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                                                        <span>{bullet}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="pt-4 sm:pt-5 border-t border-navy/10">
                                            <p className="text-navy text-sm md:text-base leading-relaxed">
                                                <strong className="font-black text-navy">Para ti si:</strong>{" "}
                                                <span className="text-navy font-medium">{service.forYouIf}</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Footer Button aligned to bottom */}
                                <div className="relative z-10 pt-1 sm:pt-2 mt-auto">
                                    <a
                                        href={whatsappUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 sm:gap-3 bg-primary hover:bg-navy text-white font-extrabold text-xs uppercase tracking-wider px-5 sm:px-8 py-4 min-h-[50px] rounded-2xl shadow-lg shadow-primary/25 hover:shadow-navy/20 hover:-translate-y-0.5 active:scale-95 transition-all duration-300 text-center"
                                    >
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                        </svg>
                                        <span>{service.buttonText}</span>
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
