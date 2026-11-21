"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
    { label: "Inicio", href: "/#" },
    { label: "Sobre mí", href: "/#sobre-mi" },
    { label: "Servicios", href: "/#servicios" },
    { label: "Portafolio", href: "/#portafolio" },
    { label: "Cómo trabajo", href: "/#definicion" },
    { label: "Contacto", href: "/#contacto" },
];

const consultWhatsappUrl = `https://wa.me/523353313224?text=${encodeURIComponent("Hola, Lari. Me interesa agendar una consulta para mi negocio")}`;

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                    ? "bg-white/95 backdrop-blur-xl border-b border-navy/10 shadow-sm"
                    : "bg-white/80 backdrop-blur-md"
                    }`}
            >
                <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex items-center justify-between gap-3">
                    <Link
                        href="/"
                        onClick={(e) => {
                            e.preventDefault();
                            setMobileMenuOpen(false);
                            scrollToTop();
                        }}
                        className="relative z-10 hover:opacity-85 transition-opacity flex-shrink-0"
                    >
                        <Image
                            src="/logo-brand.png"
                            alt="Lariza Ochoa AI Marketing"
                            width={600}
                            height={270}
                            className="h-14 sm:h-20 xl:h-24 w-auto object-contain"
                            priority
                        />
                    </Link>

                    {/* Desktop & Laptop Navigation (active from lg: 1024px upwards, single-line no-wrap) */}
                    <ul className="hidden lg:flex items-center gap-5 xl:gap-8 flex-nowrap">
                        {navLinks.map((link) => (
                            <li key={link.href} className="flex-shrink-0">
                                <a
                                    href={link.href}
                                    className="text-sm xl:text-[15px] font-bold text-navy hover:text-primary transition-colors duration-300 relative group whitespace-nowrap tracking-normal"
                                >
                                    {link.label}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Desktop CTA */}
                    <div className="hidden lg:block flex-shrink-0">
                        <a
                            href={consultWhatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center bg-primary text-white text-xs font-extrabold uppercase tracking-wider px-5 xl:px-7 py-3.5 rounded-full hover:bg-navy hover:shadow-lg transition-all duration-300 whitespace-nowrap"
                        >
                            Agenda una consulta
                        </a>
                    </div>

                    {/* Hamburger button (shown below lg: 1024px so items never overlap or wrap) */}
                    <button
                        className="lg:hidden text-navy p-2.5 hover:bg-slate-100 rounded-xl transition-colors"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Abrir o cerrar menú"
                        aria-expanded={mobileMenuOpen}
                    >
                        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </nav>

                {/* Mobile & Tablet menu */}
                {mobileMenuOpen && (
                    <div className="lg:hidden bg-white border-t border-slate-200 px-6 py-6 flex flex-col gap-4 shadow-2xl animate-fade-in">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-base font-bold text-navy hover:text-primary transition-colors py-2 border-b border-navy/5 last:border-b-0"
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href={consultWhatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setMobileMenuOpen(false)}
                            className="mt-2 bg-primary hover:bg-navy text-white text-center py-4 px-6 rounded-xl text-xs uppercase tracking-wider font-extrabold transition-colors"
                        >
                            Agenda una consulta
                        </a>
                    </div>
                )}
            </header>
        </>
    );
}
