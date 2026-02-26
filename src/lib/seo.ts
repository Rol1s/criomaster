import type { Metadata } from 'next';
import { COMPANY } from './constants';

interface SeoParams {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
}

export function generateMeta({ title, description, path, noIndex }: SeoParams): Metadata {
  const url = `${COMPANY.url}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: COMPANY.name,
      locale: 'ru_RU',
      type: 'website',
    },
    robots: noIndex ? { index: false, follow: false } : undefined,
  };
}
