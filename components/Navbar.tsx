"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
    { label: "Inicio", href: "#" },
    { label: "Lo que Nos Define", href: "#definicion" },
    { label: "Servicios", href: "#servicios" },
    { label: "Portafolio", href: "#portafolio" },
    { label: "Contacto", href: "#contacto" },
];

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
                    ? "bg-white/80 backdrop-blur-xl border-b border-navy/5 shadow-sm"
                    : "bg-transparent"
                    }`}
            >
                <nav className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
                    <Link
                        href="/"
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToTop();
                        }}
                        className="relative z-10 hover:opacity-80 transition-opacity"
                    >
                        <Image
                            src="/logo-v2.png"
                            alt="Lariza Ochoa AI Marketing"
                            width={600}
                            height={270}
                            className="h-20 md:h-24 w-auto object-contain"
                            priority
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <ul className="hidden md:flex items-center gap-10">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    className="text-[10px] uppercase tracking-[0.3em] font-black text-navy/80 hover:text-primary transition-all duration-300 relative group"
                                >
                                    {link.label}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Desktop CTA */}
                    <div className="hidden md:block">
                        <a
                            href="#contacto"
                            className="bg-navy text-white text-[10px] uppercase tracking-[0.2em] font-black px-8 py-3.5 rounded-full hover:bg-primary hover:shadow-[0_10px_30px_rgba(255,106,61,0.3)] transition-all duration-500"
                        >
                            Empezar ahora
                        </a>
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        className="md:hidden text-secondary p-2 hover:bg-slate-100 rounded-xl transition-colors"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </nav>

                {/* Mobile menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden bg-white/95 backdrop-blur-2xl border-t border-slate-100 p-8 flex flex-col gap-8 shadow-2xl animate-fade-in">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-sm uppercase tracking-widest font-black text-navy hover:text-primary transition-colors py-2"
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href="#contacto"
                            onClick={() => setMobileMenuOpen(false)}
                            className="bg-primary text-white text-center py-4 rounded-xl text-xs uppercase tracking-widest font-black"
                        >
                            Contactar Ahora
                        </a>
                    </div>
                )}
            </header>
        </>
    );
}
