import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://larizaochoa.ai'

    // Solo incluimos la página de inicio pública lista para indexar.
    // La sección /blog se mantiene fuera del sitemap hasta que tenga artículos publicados.
    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
    ]
}
