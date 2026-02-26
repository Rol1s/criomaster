import { COMPANY } from '@/lib/constants';

interface JsonLdProps {
  data: Record<string, unknown>;
}

function JsonLdScript({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function LocalBusinessJsonLd() {
  return (
    <JsonLdScript
      data={{
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: COMPANY.name,
        description: 'Профессиональный ремонт холодильников всех марок в Москве',
        url: COMPANY.url,
        telephone: COMPANY.phone,
        email: COMPANY.email,
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'ул. Примерная, д. 10, офис 5',
          addressLocality: 'Москва',
          addressCountry: 'RU',
        },
        openingHours: 'Mo-Su 08:00-22:00',
        priceRange: '₽₽',
        areaServed: {
          '@type': 'City',
          name: 'Москва',
        },
      }}
    />
  );
}

export function ServiceJsonLd({ name, description, price }: { name: string; description: string; price: number }) {
  return (
    <JsonLdScript
      data={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name,
        description,
        provider: {
          '@type': 'LocalBusiness',
          name: COMPANY.name,
        },
        areaServed: { '@type': 'City', name: 'Москва' },
        offers: {
          '@type': 'Offer',
          priceCurrency: 'RUB',
          price: price.toString(),
          priceSpecification: {
            '@type': 'PriceSpecification',
            minPrice: price.toString(),
            priceCurrency: 'RUB',
          },
        },
      }}
    />
  );
}

export function FaqJsonLd({ items }: { items: { question: string; answer: string }[] }) {
  return (
    <JsonLdScript
      data={{
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: items.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      }}
    />
  );
}

export function ArticleJsonLd({ title, description, date, url }: { title: string; description: string; date: string; url: string }) {
  return (
    <JsonLdScript
      data={{
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title,
        description,
        datePublished: date,
        author: {
          '@type': 'Organization',
          name: COMPANY.name,
        },
        publisher: {
          '@type': 'Organization',
          name: COMPANY.name,
        },
        mainEntityOfPage: url,
      }}
    />
  );
}
