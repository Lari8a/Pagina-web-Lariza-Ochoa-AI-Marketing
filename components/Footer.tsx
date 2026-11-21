"use client";

import Image from "next/image";
import { MapPin } from "lucide-react";

const footerNavLinks = [
    { label: "Servicios", href: "/#servicios" },
    { label: "Portafolio", href: "/#portafolio" },
    { label: "Sobre mí", href: "/#sobre-mi" },
    { label: "Contacto", href: "/#contacto" },
];

export default function Footer() {
    return (
        <footer className="bg-navy text-white border-t border-white/10 py-16">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-14 items-start">
                    {/* Columna 1: Logo y descripción */}
                    <div className="md:col-span-5 space-y-5 text-center md:text-left">
                        <div className="inline-block bg-white rounded-2xl p-3">
                            <Image
                                src="/logo-brand.png"
                                alt="Lariza Ochoa AI Marketing"
                                width={600}
                                height={270}
                                className="h-24 md:h-28 w-auto object-contain"
                            />
                        </div>
                        <p className="text-white/90 text-base font-medium max-w-md mx-auto md:mx-0 leading-relaxed">
                            Llevo las redes sociales, la atención a clientes y la página web de tu negocio, con estrategia e IA.
                        </p>
                    </div>

                    {/* Columna 2: Navegación */}
                    <div className="md:col-span-3 space-y-4 text-center md:text-left">
                        <h4 className="text-lg font-extrabold text-white tracking-normal">
                            Navegación
                        </h4>
                        <ul className="space-y-1.5 sm:space-y-3">
                            {footerNavLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className="inline-block py-1.5 sm:py-0.5 text-base font-semibold text-white/90 hover:text-primary transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Columna 3: Contacto */}
                    <div className="md:col-span-4 space-y-5 text-center md:text-left">
                        <h4 className="text-lg font-extrabold text-white tracking-normal">
                            Contacto
                        </h4>
                        <div className="flex flex-col gap-4 items-center md:items-start">
                            <a
                                href="https://wa.me/523353313224"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-base font-bold text-white hover:text-primary transition-colors flex items-center gap-3 group"
                            >
                                <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-primary" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                </div>
                                33 5331 3224
                            </a>

                            <div className="flex flex-col sm:flex-row flex-wrap justify-center md:justify-start gap-4 sm:gap-6 items-center md:items-start">
                                <a
                                    href="https://www.facebook.com/LarizaOchoaAIMarketing"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-base font-bold text-white hover:text-primary transition-colors flex items-center gap-3 group"
                                >
                                    <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-primary" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                        </svg>
                                    </div>
                                    Facebook
                                </a>

                                <a
                                    href="https://www.instagram.com/larizaochoaai/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-base font-bold text-white hover:text-primary transition-colors flex items-center gap-3 group"
                                >
                                    <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="text-primary" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                                        </svg>
                                    </div>
                                    Instagram
                                </a>
                            </div>

                            <div className="flex justify-center md:justify-start items-center gap-3 text-base font-bold text-white/95">
                                <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
                                    <MapPin size={20} className="text-primary" />
                                </div>
                                <span>Guadalajara, Jalisco, México</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Línea inferior: solo aviso de derechos de autor */}
                <div className="pt-8 border-t border-white/15 text-center md:text-left">
                    <p className="text-sm font-medium text-white/85 leading-relaxed">
                        © {new Date().getFullYear()} Lariza Ochoa AI Marketing. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
}
