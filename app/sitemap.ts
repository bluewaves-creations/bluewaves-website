import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || 'https://bluewaves.boutique';

  return [
    {
      url: `${baseUrl}/`,
      changeFrequency: 'weekly',
      priority: 1.0,
      lastModified: new Date().toISOString(),
    },
  ];
}
