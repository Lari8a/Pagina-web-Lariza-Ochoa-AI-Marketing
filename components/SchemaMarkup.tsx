"use client";

import React from "react";

export default function SchemaMarkup() {
    const schema = {
        "@context": "https://schema.org",
        "@type": ["ProfessionalService", "LocalBusiness"],
        "name": "Lariza Ochoa AI Marketing",
        "image": "https://larizaochoa.ai/logo-v2.png", // Assuming domain
        "@id": "https://larizaochoa.ai",
        "url": "https://larizaochoa.ai",
        "telephone": "+523312181168",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "",
            "addressLocality": "Guadalajara", // Likely based on phone code 33
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
        "description": "Agencia de Marketing con Inteligencia Artificial especializada en gestión de redes sociales y automatizaciones."
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
