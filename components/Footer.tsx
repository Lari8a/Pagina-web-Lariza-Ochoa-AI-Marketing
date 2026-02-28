"use client";

import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-gray-light border-t border-navy/5 py-16">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
                    <div className="space-y-6">
                        <Image
                            src="/logo-v2.png"
                            alt="Lariza Ochoa AI Marketing"
                            width={600}
                            height={270}
                            className="h-40 w-auto object-contain"
                        />
                        <p className="text-navy/60 text-base font-medium max-w-sm leading-relaxed">
                            Potenciando marcas en la era de la inteligencia artificial. Estrategia y tecnología al servicio de tus objetivos.
                        </p>
                    </div>

                    <div className="flex justify-center md:justify-end">
                        <div className="space-y-6 w-full md:w-auto">
                            <h4 className="text-xs uppercase tracking-[0.3em] font-black text-navy italic text-center md:text-left">Contacto & Ubicación</h4>
                            <div className="flex flex-col gap-6">
                                <div className="flex flex-wrap justify-center md:justify-start gap-8 items-center">
                                    <a href="https://wa.me/523312181168" target="_blank" className="text-sm font-black text-navy/40 hover:text-[#25D366] transition-colors uppercase tracking-[0.2em] flex items-center gap-3 group">
                                        <div className="w-10 h-10 rounded-full bg-navy/5 flex items-center justify-center group-hover:bg-[#25D366]/10 transition-colors">
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                            </svg>
                                        </div>
                                        WhatsApp
                                    </a>
                                    <a href="https://www.facebook.com/LarizaOchoaAIMarketing" target="_blank" className="text-sm font-black text-navy/40 hover:text-[#1877F2] transition-colors uppercase tracking-[0.2em] flex items-center gap-3 group">
                                        <div className="w-10 h-10 rounded-full bg-navy/5 flex items-center justify-center group-hover:bg-[#1877F2]/10 transition-colors">
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="#1877F2" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                            </svg>
                                        </div>
                                        Facebook
                                    </a>
                                </div>
                                <div className="flex justify-center md:justify-start items-center gap-3 text-sm font-black text-navy/40 uppercase tracking-[0.2em]">
                                    <div className="w-10 h-10 rounded-full bg-navy/5 flex items-center justify-center">
                                        <MapPin size={18} className="text-primary" />
                                    </div>
                                    <span>Ubicación — México</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom footer */}
                <div className="pt-12 border-t border-navy/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[10px] uppercase tracking-widest font-black text-navy/30">
                        © {new Date().getFullYear()} Lariza Ochoa AI Marketing. <span className="text-primary/40 ml-2 italic">Futuro implementado — México.</span>
                    </p>
                    <div className="flex items-center gap-8">
                        <div className="flex items-center gap-2 text-[10px] uppercase font-black tracking-tighter text-navy/30">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            Systems Operational
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
