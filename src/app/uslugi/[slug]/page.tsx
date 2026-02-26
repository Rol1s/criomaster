import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { services, getServiceBySlug } from '@/data/services';
import { brands } from '@/data/brands';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { ServiceJsonLd } from '@/components/seo/JsonLd';
import { Button } from '@/components/ui/Button';
import { CallToAction } from '@/components/sections/CallToAction';
import { CheckCircle, AlertTriangle, ArrowRight } from 'lucide-react';

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `https://criomaster.ru/uslugi/${slug}` },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const relatedBrands = brands.filter((b) => service.relatedBrands.includes(b.slug));

  return (
    <>
      <ServiceJsonLd name={service.name} description={service.description} price={service.priceFrom} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Breadcrumbs items={[{ label: 'Услуги', href: '/uslugi' }, { label: service.shortName }]} />

        <div className="grid lg:grid-cols-3 gap-12 mt-8">
          {/* Main content */}
          <div className="lg:col-span-2">
            <h1 className="text-3xl sm:text-4xl font-bold text-text mb-6">{service.name}</h1>
            <p className="text-muted leading-relaxed mb-8">{service.description}</p>

            {/* Symptoms */}
            <div className="bg-bg rounded-2xl p-6 mb-8">
              <h2 className="flex items-center gap-2 text-xl font-semibold text-text mb-4">
                <AlertTriangle className="w-5 h-5 text-accent" />
                Признаки неисправности
              </h2>
              <ul className="space-y-3">
                {service.symptoms.map((s, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            {/* When needed */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-text mb-3">Когда необходима эта услуга</h2>
              <p className="text-muted leading-relaxed">{service.whenNeeded}</p>
            </div>

            {/* Steps */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-text mb-4">Этапы работы</h2>
              <div className="space-y-3">
                {service.steps.map((step, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <span className="w-8 h-8 bg-primary text-white rounded-lg flex items-center justify-center text-sm font-semibold shrink-0">
                      {i + 1}
                    </span>
                    <span className="text-sm text-muted pt-1.5">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Related brands */}
            <div>
              <h2 className="text-xl font-semibold text-text mb-4">Бренды</h2>
              <div className="flex flex-wrap gap-2">
                {relatedBrands.map((b) => (
                  <Link
                    key={b.slug}
                    href={`/brendy/${b.slug}`}
                    className="px-4 py-2 bg-bg border border-border rounded-lg text-sm text-text hover:border-accent/50 hover:text-accent transition-colors"
                  >
                    {b.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-6">
              <div className="bg-surface rounded-2xl border border-border p-6">
                <div className="text-center mb-4">
                  <span className="text-sm text-muted">Стоимость</span>
                  <p className="text-3xl font-bold text-accent">от {service.priceFrom.toLocaleString('ru-RU')} ₽</p>
                </div>
                <ul className="space-y-2 mb-6 text-sm text-muted">
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Бесплатная диагностика</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Гарантия 12 месяцев</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Выезд в день обращения</li>
                </ul>
                <Button href="/kontakty" variant="primary" className="w-full">
                  Вызвать мастера
                </Button>
              </div>

              {/* Other services */}
              <div className="bg-bg rounded-2xl p-6">
                <h3 className="font-semibold text-text mb-4">Другие услуги</h3>
                <div className="space-y-2">
                  {services.filter((s) => s.slug !== service.slug).map((s) => (
                    <Link
                      key={s.slug}
                      href={`/uslugi/${s.slug}`}
                      className="flex items-center justify-between py-2 text-sm text-muted hover:text-accent transition-colors"
                    >
                      <span>{s.shortName}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CallToAction />
    </>
  );
}
