"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const projects = [
    { title: "Gestión Estratégica 1", category: "Social Media", image: "/analysis.png" },
    { title: "Gestión Estratégica 2", category: "Social Media", image: "/smart.png" },
    { title: "Gestión Estratégica 3", category: "Social Media", image: "/strategy.png" },
    { title: "Gestión Estratégica 4", category: "Social Media", image: "/web.png" },
    { title: "Gestión Estratégica 5", category: "Social Media", image: "/4.png" },
    { title: "Gestión Estratégica 6", category: "Social Media", image: "/5.png" },
    { title: "Gestión Estratégica 7", category: "Social Media", image: "/68.png" },
    { title: "Gestión Estratégica 8", category: "Social Media", image: "/8.png" },
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
            <div className="max-w-[1200px] mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-16 space-y-4">
                    <div className="reveal inline-flex items-center gap-2 bg-secondary/5 text-secondary font-bold text-xs uppercase tracking-[0.3em] px-5 py-2 rounded-full border border-secondary/10">
                        Portafolio
                    </div>
                    <h2 className="reveal delay-100 section-title !text-navy">
                        Casos de <span className="text-primary italic">Éxito Digital</span>
                    </h2>
                    <p className="reveal delay-200 text-gray-dark text-lg font-medium max-w-2xl mx-auto">
                        Gestión estratégica de redes sociales para marcas con propósito.
                    </p>
                </div>

                {/* Advanced Grid */}
                <div className="grid grid-cols-2 md:grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-6">
                    {projects.map((project, i) => (
                        <div
                            key={i}
                            className={`reveal delay-${(i % 4 + 1) * 100} group relative overflow-hidden rounded-2xl bg-navy/5 aspect-[4/5]`}
                        >
                            <Image
                                src={project.image}
                                alt={`${project.title} - Caso de Éxito en ${project.category} por Lariza Ochoa AI Marketing`}
                                fill
                                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 220px"
                            />

                            {/* Overlay on Hover */}
                            <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                                <span className="text-[10px] uppercase tracking-widest text-primary font-black mb-1">
                                    {project.category}
                                </span>
                                <h3 className="text-white font-black text-sm uppercase tracking-tighter">
                                    {project.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
