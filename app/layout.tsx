import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import SchemaMarkup from "@/components/SchemaMarkup";

const outfit = Outfit({
    subsets: ["latin"],
    variable: "--font-outfit",
    weight: ["300", "400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
    themeColor: "#1F2A44",
    width: "device-width",
    initialScale: 1,
};

export const metadata: Metadata = {
    metadataBase: new URL("https://larizaochoa.ai"), // Placeholder domain
    title: {
        default: "Lariza Ochoa AI Marketing | Estrategias con IA que Transforman",
        template: "%s | Lariza Ochoa AI Marketing"
    },
    description:
        "Agencia líder en marketing con Inteligencia Artificial en México. Gestión estratégica de redes sociales, automatizaciones con IA y diseño web enfocado a resultados.",
    keywords: [
        "marketing con IA México",
        "inteligencia artificial marketing",
        "automatizaciones con IA",
        "gestión de redes sociales",
        "agencia digital Guadalajara",
        "diseño web estratégico",
        "Lariza Ochoa",
    ],
    authors: [{ name: "Lariza Ochoa" }],
    creator: "Lariza Ochoa AI Marketing",
    publisher: "Lariza Ochoa AI Marketing",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    alternates: {
        canonical: "/",
    },
    openGraph: {
        title: "Lariza Ochoa AI Marketing | Potencia tu Negocio con IA",
        description: "Transformamos tu presencia digital con estrategias de IA de alto impacto. Gestión de redes y automatización.",
        url: "https://larizaochoa.ai",
        siteName: "Lariza Ochoa AI Marketing",
        locale: "es_MX",
        type: "website",
        images: [
            {
                url: "/og-image.png", // Recommended to have this asset
                width: 1200,
                height: 630,
                alt: "Lariza Ochoa AI Marketing",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Lariza Ochoa AI Marketing",
        description: "Estrategias de Marketing con IA en México.",
        images: ["/og-image.png"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es" className="scroll-smooth">
            <body className={`${outfit.variable} font-sans antialiased`}>
                <SchemaMarkup />
                {children}
            </body>
        </html>
    );
}
