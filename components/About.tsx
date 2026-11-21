"use client";

import { useEffect, useRef } from "react";
import { ShieldCheck, Zap, Heart, Target } from "lucide-react";

const pillars = [
    {
        icon: Target,
        title: "Claridad estratégica",
        desc: "Menos ruido, más estrategia. Cada acción tiene un porqué claro.",
        iconBg: "bg-primary/15 text-primary"
    },
    {
        icon: Zap,
        title: "Eficiencia con IA",
        desc: "Uso tecnología de vanguardia para multiplicar tus resultados.",
        iconBg: "bg-secondary/15 text-secondary"
    },
    {
        icon: Heart,
        title: "Esencia humana",
        desc: "La tecnología no reemplaza personas: potencia el talento real.",
        iconBg: "bg-amber-500/15 text-amber-600"
    },
    {
        icon: ShieldCheck,
        title: "Responsabilidad",
        desc: "Comunicación ética, honesta y alineada con tus valores.",
        iconBg: "bg-navy/10 text-navy"
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
        <section id="definicion" ref={sectionRef} className="py-16 md:py-20 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
                    <div className="reveal inline-flex items-center gap-2 bg-primary/10 text-primary font-extrabold text-xs uppercase tracking-wider px-4 py-1.5 rounded-full border border-primary/20">
                        🚀 Cómo trabajo
                    </div>
                    <h2 className="reveal delay-100 text-3xl md:text-5xl font-black text-navy leading-tight tracking-tight">
                        Cómo <span className="text-primary">trabajo</span>
                    </h2>
                    <p className="reveal delay-200 text-base md:text-lg text-navy/80 font-medium">
                        Mi propósito es liberar a negocios y profesionales de la carga operativa,
                        dando claridad y dirección para crecer sin burnout.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {pillars.map((val, i) => (
                        <div
                            key={i}
                            className={`reveal delay-${(i + 1) * 100} group bg-gray-light p-6 rounded-2xl border border-navy/10 hover:border-primary/30 transition-all duration-300 flex flex-col items-start text-left gap-4`}
                        >
                            <div className={`p-3.5 rounded-xl transition-transform duration-300 group-hover:scale-105 ${val.iconBg}`}>
                                <val.icon size={26} strokeWidth={2.2} />
                            </div>
                            <div className="space-y-1.5">
                                <h3 className="font-bold text-navy text-lg leading-snug">{val.title}</h3>
                                <p className="text-navy/85 text-sm font-medium leading-relaxed">{val.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="reveal delay-500 mt-12 p-6 md:p-8 bg-primary/10 rounded-3xl border border-primary/20 text-center max-w-4xl mx-auto">
                    <p className="text-navy font-bold text-base md:text-lg leading-relaxed">
                        &ldquo;Más negocios sostenibles, profesionales enfocados en su vocación y marcas que
                        comuniquen con propósito, no por obligación.&rdquo;
                    </p>
                </div>
            </div>
        </section>
    );
}
