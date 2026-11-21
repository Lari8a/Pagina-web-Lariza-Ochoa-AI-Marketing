"use client";

import React from "react";

export default function SchemaMarkup() {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://larizaochoa.ai";

    const businessSchema = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "@id": `${siteUrl}/#business`,
        "name": "Lariza Ochoa AI Marketing",
        "image": `${siteUrl}/lariza-ochoa.jpg`,
        "logo": `${siteUrl}/logo-brand.png`,
        "url": siteUrl,
        "telephone": "+523353313224",
        "founder": {
            "@id": `${siteUrl}/#person`
        },
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Guadalajara",
            "addressRegion": "Jalisco",
            "addressCountry": "MX"
        },
        "areaServed": [
            {
                "@type": "City",
                "name": "Guadalajara"
            },
            {
                "@type": "Country",
                "name": "México"
            }
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+52-33-5331-3224",
            "contactType": "customer service",
            "availableLanguage": ["es"],
            "areaServed": "MX"
        },
        "sameAs": [
            "https://www.facebook.com/LarizaOchoaAIMarketing",
            "https://www.instagram.com/larizaochoaai/",
            "https://wa.me/523353313224"
        ],
        "description": "Gestiono tus redes sociales, diseño tu página web y automatizo tu atención por WhatsApp con IA. Desde Guadalajara, trabajo con negocios en todo México.",
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Servicios de marketing digital e inteligencia artificial",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Gestión de redes sociales",
                        "description": "Creación, diseño y programación de contenido en Facebook e Instagram con calendario mensual alineado a ventas."
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Chatbots y atención con IA",
                        "description": "Atención automatizada 24/7 en WhatsApp y redes sociales con respuestas a preguntas frecuentes y seguimiento a prospectos."
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Páginas web y landing pages",
                        "description": "Diseño de páginas web rápidas, adaptadas a celular, optimizadas para Google y conectadas con WhatsApp."
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Consultoría personalizada",
                        "description": "Sesión de diagnóstico y plan de acción por prioridades para mejorar tu estrategia digital."
                    }
                }
            ]
        }
    };

    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        "name": "Lariza Ochoa",
        "url": siteUrl,
        "image": `${siteUrl}/lariza-ochoa.jpg`,
        "jobTitle": "Especialista en Marketing Digital e Inteligencia Artificial",
        "worksFor": {
            "@id": `${siteUrl}/#business`
        },
        "alumniOf": {
            "@type": "CollegeOrUniversity",
            "name": "Universidad del Valle de Atemajac"
        },
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Guadalajara",
            "addressRegion": "Jalisco",
            "addressCountry": "MX"
        },
        "knowsAbout": [
            "Marketing Digital",
            "Gestión de Redes Sociales",
            "Chatbots con Inteligencia Artificial",
            "Diseño de Páginas Web y Landing Pages",
            "Consultoría de Marketing"
        ],
        "sameAs": [
            "https://www.facebook.com/LarizaOchoaAIMarketing",
            "https://www.instagram.com/larizaochoaai/"
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
            />
        </>
    );
}
