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
    icons: {
        icon: "/icon-brand.png",
        shortcut: "/icon-brand.png",
        apple: "/icon-brand.png",
    },
    title: {
        default: "Lariza Ochoa AI Marketing | Estrategias con IA en México",
        template: "%s | Lariza Ochoa AI Marketing"
    },
    description:
        "Transforma tu negocio con marketing de IA. Expertos en gestión de redes sociales, automatizaciones inteligentes y diseño web estratégico en México.",
    keywords: [
        "marketing inteligencia artificial méxico",
        "agencia ia guadalajara",
        "gestión de redes sociales estratégica",
        "chatbots para negocios méxico",
        "automatización de marketing ia",
        "lariza ochoa marketing",
        "marketing digital con ia",
        "diseño web con inteligencia artificial"
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
        title: "Lariza Ochoa AI Marketing | Marketing con IA que genera resultados",
        description: "Potenciamos tu presencia digital con Inteligencia Artificial. Estrategias avanzadas en redes sociales y automatización.",
        url: "https://larizaochoa.ai",
        siteName: "Lariza Ochoa AI Marketing",
        locale: "es_MX",
        type: "website",
        images: [
            {
                url: "/hero-final.png",
                width: 1200,
                height: 630,
                alt: "Lariza Ochoa AI Marketing",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Lariza Ochoa AI Marketing | IA para tu Negocio",
        description: "Liderando el marketing con IA en México. Gestión de redes y automatizaciones estratégicas.",
        images: ["/hero-final.png"],
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
