"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const projects = [
    { name: "CESH", category: "Educativo", image: "/analysis.png" },
    { name: "C14", category: "Autopartes", image: "/smart.png" },
    { name: "Dr. Almendra", category: "Medicina", image: "/strategy.png" },
    { name: "Instituto Vitalista", category: "Medicina alternativa", image: "/web.png" },
    { name: "Normatika", category: "Consultoría", image: "/4.png" },
    { name: "Las Fresquitas", category: "Alimentos y bebidas", image: "/5.png" },
    { name: "Femme", category: "Medicina", image: "/68.png" },
    { name: "Home Fitness", category: "Deportes", image: "/8.png" },
];

export default function Portfolio() {
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
        <section id="portafolio" ref={sectionRef} className="section-padding bg-gray-light relative overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-0 sm:px-2 relative z-10">
                {/* Header */}
                <div className="text-center mb-12 md:mb-16 space-y-3 sm:space-y-4">
                    <div className="reveal inline-flex items-center gap-2 bg-secondary/10 text-secondary font-extrabold text-xs uppercase tracking-wider px-5 py-2 rounded-full border border-secondary/20">
                        Portafolio
                    </div>
                    <h2 className="reveal delay-100 text-3xl md:text-5xl font-black text-navy tracking-tight leading-tight">
                        Negocios que ya <span className="text-primary">confían en mí</span>
                    </h2>
                    <p className="reveal delay-200 text-navy/80 text-base sm:text-lg font-medium max-w-2xl mx-auto">
                        Gestión estratégica de redes sociales para marcas con propósito.
                    </p>
                </div>

                {/* Advanced Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 md:gap-8">
                    {projects.map((project, i) => (
                        <div
                            key={i}
                            className={`reveal delay-${(i % 4 + 1) * 100} group flex flex-col gap-3 max-w-sm mx-auto sm:max-w-none w-full`}
                        >
                            <div className="relative overflow-hidden rounded-2xl bg-navy/5 aspect-[4/5] shadow-sm">
                                <Image
                                    src={project.image}
                                    alt={`${project.name} - ${project.category} | Contenido semanal en Facebook e Instagram por Lariza Ochoa AI Marketing`}
                                    fill
                                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 280px"
                                />
                            </div>

                            {/* Text below image */}
                            <div className="px-1 space-y-0.5">
                                <h3 className="font-bold text-navy text-base leading-snug">
                                    {project.name}
                                </h3>
                                <p className="text-primary font-semibold text-sm leading-snug">
                                    {project.category}
                                </p>
                                <p className="text-navy/80 text-xs sm:text-sm leading-snug font-medium">
                                    Contenido semanal en Facebook e Instagram
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
