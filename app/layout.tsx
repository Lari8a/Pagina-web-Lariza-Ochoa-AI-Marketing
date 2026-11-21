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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://larizaochoa.ai";

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    icons: {
        icon: "/icon-brand.png",
        shortcut: "/icon-brand.png",
        apple: "/icon-brand.png",
    },
    title: {
        default: "Marketing digital en Guadalajara | Lariza Ochoa",
        template: "%s | Lariza Ochoa"
    },
    description:
        "Gestiono tus redes sociales, diseño tu página web y automatizo tu atención por WhatsApp con IA. Desde Guadalajara, trabajo con negocios en todo México.",
    keywords: [
        "marketing digital en guadalajara",
        "gestión de redes sociales guadalajara",
        "diseño de páginas web y landing pages",
        "chatbots para negocios méxico",
        "automatización de whatsapp con ia",
        "consultoría de marketing digital",
        "lariza ochoa marketing",
        "marketing digital con ia méxico"
    ],
    authors: [{ name: "Lariza Ochoa" }],
    creator: "Lariza Ochoa",
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
        title: "Marketing digital en Guadalajara | Lariza Ochoa",
        description: "Gestiono tus redes sociales, diseño tu página web y automatizo tu atención por WhatsApp con IA. Desde Guadalajara, trabajo con negocios en todo México.",
        url: siteUrl,
        siteName: "Lariza Ochoa AI Marketing",
        locale: "es_MX",
        type: "website",
        images: [
            {
                url: "/lariza-ochoa.jpg",
                width: 576,
                height: 1024,
                alt: "Lariza Ochoa - Marketing digital con IA en Guadalajara para todo México",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Marketing digital en Guadalajara | Lariza Ochoa",
        description: "Gestiono tus redes sociales, diseño tu página web y automatizo tu atención por WhatsApp con IA. Desde Guadalajara, trabajo con negocios en todo México.",
        images: ["/lariza-ochoa.jpg"],
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
