"use client";

import React from "react";

export default function SchemaMarkup() {
    const businessSchema = {
        "@context": "https://schema.org",
        "@type": ["ProfessionalService", "LocalBusiness"],
        "name": "Lariza Ochoa AI Marketing",
        "image": "https://larizaochoa.ai/logo-brand.png",
        "@id": "https://larizaochoa.ai",
        "url": "https://larizaochoa.ai",
        "telephone": "+523312181168",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "",
            "addressLocality": "Guadalajara",
            "addressRegion": "Jalisco",
            "addressCountry": "MX"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 20.6597,
            "longitude": -103.3496
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
            ],
            "opens": "09:00",
            "closes": "18:00"
        },
        "sameAs": [
            "https://www.facebook.com/LarizaOchoaAIMarketing",
            "https://wa.me/523312181168"
        ],
        "priceRange": "$$",
        "description": "Agencia de Marketing con Inteligencia Artificial especializada en gestión de redes sociales y automatizaciones.",
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Servicios de IA y Marketing",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Gestión Estratégica de Redes Sociales"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Automatizaciones con IA y Chatbots"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Diseño Web Estratégico"
                    }
                }
            ]
        }
    };

    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Lariza Ochoa",
        "url": "https://larizaochoa.ai",
        "jobTitle": "Especialista en Marketing Digital e IA",
        "alumniOf": {
            "@type": "CollegeOrUniversity",
            "name": "Universidad del Valle de Atemajac (UNIVA)"
        },
        "knowsAbout": [
            "Marketing Digital",
            "Inteligencia Artificial",
            "Gestión de Redes Sociales",
            "Publicidad"
        ],
        "sameAs": [
            "https://www.facebook.com/LarizaOchoaAIMarketing"
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
