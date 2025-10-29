import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://connecthairextensions.com';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/hair-clip-extensions-products`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/hair-clip-extensions-products/pony-tail`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9, // High priority - this is the page with the Cosmopolitan backlink
    },
    {
      url: `${baseUrl}/permanent-hair-extensions`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85, // High priority - major service funnel to fake.salon
    },
  ];
}
