import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/'],
        disallow: '/v2/code/scan/',
      },
    ],
    sitemap: 'https://pass.sports.gouv.fr/sitemap.xml',
  };
}
