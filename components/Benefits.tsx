"use client";

import { useEffect, useRef } from "react";
import {
    Target,
    Puzzle,
    Cpu,
    HeartHandshake,
    CheckCircle2,
} from "lucide-react";

const benefits = [
    {
        icon: Target,
        title: "Enfoque en Resultados",
        description:
            "No vendemos humo. Cada estrategia está orientada a métricas reales: ventas, leads, retención y ROI medible.",
    },
    {
        icon: Puzzle,
        title: "Soluciones a Medida",
        description:
            "Tu negocio es único. Creamos estrategias personalizadas, no plantillas genéricas que no se adaptan a tu realidad.",
    },
    {
        icon: Cpu,
        title: "IA Práctica, No Teórica",
        description:
            "Implementamos herramientas de IA que funcionan HOY en tu negocio. Sin tecnicismos, sin complejidad innecesaria.",
    },
    {
        icon: HeartHandshake,
        title: "Acompañamiento Continuo",
        description:
            "No desaparecemos después de entregarte el trabajo. Te acompañamos, ajustamos y optimizamos continuamente.",
    },
];

const checklist = [
    "Estrategia basada en datos reales",
    "Onboarding rápido en 48 horas",
    "Reportes mensuales detallados",
    "Soporte prioritario incluido",
    "Herramientas IA de última generación",
    "Sin contratos de permanencia",
];

export default function Benefits() {
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
        <section id="beneficios" ref={sectionRef} className="section-padding bg-slate-50 relative overflow-hidden">
            {/* Soft decorative elements */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/10 to-transparent" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    {/* Visual side */}
                    <div className="reveal order-2 lg:order-1 relative">
                        <div className="bg-white border border-slate-200 rounded-3xl p-2 relative overflow-hidden shadow-sm">
                            <div className="bg-white rounded-2xl p-8 space-y-8">
                                <h3 className="text-2xl font-black text-secondary tracking-tighter italic whitespace-nowrap">¿Por qué elegir nuestra Arquitectura de IA?</h3>
                                <div className="space-y-6">
                                    {[
                                        "Enfoque en Resultados Exponenciales",
                                        "Soluciones a Medida (No plantillas)",
                                        "IA Práctica, No Teórica",
                                        "Acompañamiento Estratégico Continuos",
                                        "Ecosistema Full-Stack AI Marketing"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-4 group">
                                            <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                                                <div className="w-2 h-2 rounded-full bg-primary group-hover:bg-white" />
                                            </div>
                                            <span className="text-sm font-bold text-secondary/80 group-hover:text-secondary transition-colors">{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                                    <div className="flex -space-x-3">
                                        {[1, 2, 3, 4].map(i => (
                                            <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[10px] font-bold text-secondary">
                                                IA
                                            </div>
                                        ))}
                                    </div>
                                    <span className="text-[10px] uppercase tracking-widest font-black text-primary animate-pulse">Sistemas Activos</span>
                                </div>
                            </div>
                        </div>
                        {/* Decorative blobs */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent-yellow/10 rounded-full blur-3xl opacity-50" />
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-50" />
                    </div>

                    {/* Text side */}
                    <div className="reveal delay-200 order-1 lg:order-2 space-y-10">
                        <div className="inline-flex items-center gap-2 bg-primary/5 text-primary font-bold text-xs uppercase tracking-[0.3em] px-5 py-2 rounded-full border border-primary/10">
                            Diferenciación
                        </div>
                        <h2 className="section-title">
                            Ingeniería de <br />
                            <span className="gradient-text">Crecimiento IA</span>
                        </h2>
                        <p className="section-subtitle">
                            Nuestra metodología fusiona el pensamiento creativo con sistemas autónomos para eliminar cuellos de botella y maximizar tu ROI.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-8 pt-4">
                            {[
                                { icon: Cpu, title: "Velocidad", desc: "Reducción de tiempos operativos en un 70%" },
                                { icon: Target, title: "Precisión", desc: "Segmentación algorítmica de alto nivel" }
                            ].map((benefit, i) => (
                                <div key={i} className="space-y-4">
                                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm border border-slate-100">
                                        <benefit.icon size={20} className="text-primary" />
                                    </div>
                                    <h4 className="font-black text-secondary uppercase tracking-widest text-sm italic">{benefit.title}</h4>
                                    <p className="text-secondary/60 text-xs font-medium leading-relaxed">{benefit.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="pt-6">
                            <a href="#contacto" className="btn-cyber-outline hover:bg-primary hover:text-white group">
                                Solicitar Diagnóstico <Target className="group-hover:rotate-12 transition-transform ml-2" size={18} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
