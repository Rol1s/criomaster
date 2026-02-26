import type { MetadataRoute } from 'next';
import { services } from '@/data/services';
import { brands } from '@/data/brands';
import { districts } from '@/data/districts';
import { articles } from '@/data/articles';

export const dynamic = 'force-static';

const BASE_URL = 'https://criomaster.ru';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: BASE_URL, changeFrequency: 'weekly' as const, priority: 1 },
    { url: `${BASE_URL}/uslugi`, changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${BASE_URL}/brendy`, changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${BASE_URL}/moskva`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${BASE_URL}/tseny`, changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${BASE_URL}/blog`, changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${BASE_URL}/faq`, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${BASE_URL}/kontakty`, changeFrequency: 'monthly' as const, priority: 0.6 },
  ];

  const servicePages = services.map((s) => ({
    url: `${BASE_URL}/uslugi/${s.slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const brandPages = brands.map((b) => ({
    url: `${BASE_URL}/brendy/${b.slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const districtPages = districts.map((d) => ({
    url: `${BASE_URL}/moskva/${d.slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const articlePages = articles.map((a) => ({
    url: `${BASE_URL}/blog/${a.slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...servicePages, ...brandPages, ...districtPages, ...articlePages];
}
