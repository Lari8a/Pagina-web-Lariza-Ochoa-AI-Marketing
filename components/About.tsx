"use client";

import { useEffect, useRef } from "react";
import { ShieldCheck, Zap, Heart, Target, Lightbulb } from "lucide-react";

const pillars = [
    {
        icon: Target,
        title: "Claridad Estratégica",
        desc: "Menos ruido, más estrategia. Cada acción tiene un porqué claro.",
        color: "text-primary"
    },
    {
        icon: Zap,
        title: "Eficiencia con IA",
        desc: "Usamos tecnología de vanguardia para multiplicar tus resultados.",
        color: "text-secondary"
    },
    {
        icon: Heart,
        title: "Esencia Humana",
        desc: "La tecnología no reemplaza personas: potencia el talento real.",
        color: "text-accent-yellow"
    },
    {
        icon: ShieldCheck,
        title: "Responsabilidad",
        desc: "Comunicación ética, honesta y alineada con tus valores.",
        color: "text-navy"
    }
];

export default function About() {
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
        <section id="definicion" ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <div className="reveal inline-flex items-center gap-2 bg-primary/5 text-primary font-bold text-[10px] uppercase tracking-[0.3em] px-4 py-1.5 rounded-full border border-primary/10">
                        🚀 Lo que Nos Define
                    </div>
                    <h2 className="reveal delay-100 text-4xl md:text-5xl font-black text-navy leading-tight tracking-tighter uppercase italic">
                        Resolver un <span className="text-primary">problema real</span>
                    </h2>
                    <p className="reveal delay-200 text-lg text-navy/60 font-medium">
                        Nacemos para liberar a negocios y profesionales de la carga operativa,
                        dando claridad y dirección para crecer sin burnout.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {pillars.map((val, i) => (
                        <div
                            key={i}
                            className={`reveal delay-${(i + 1) * 100} group bg-gray-light p-8 rounded-3xl border border-navy/5 hover:border-primary/20 transition-all duration-500 flex flex-col items-center text-center gap-6`}
                        >
                            <div className={`p-4 rounded-2xl bg-white shadow-sm transition-transform duration-500 group-hover:scale-110 ${val.color}`}>
                                <val.icon size={24} />
                            </div>
                            <div className="space-y-2">
                                <h3 className="font-black text-navy uppercase tracking-tighter italic text-lg">{val.title}</h3>
                                <p className="text-navy/60 text-sm font-medium leading-relaxed">{val.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="reveal delay-500 mt-16 p-8 bg-primary/5 rounded-[2.5rem] border border-primary/10 text-center max-w-4xl mx-auto">
                    <p className="text-navy font-bold italic text-lg leading-relaxed">
                        "Más negocios sostenibles, profesionales enfocados en su vocación y marcas que <br className="hidden md:block" />
                        comuniquen con propósito, no por obligación."
                    </p>
                </div>
            </div>
        </section>
    );
}
