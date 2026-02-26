import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { districts, getDistrictBySlug } from '@/data/districts';
import { services } from '@/data/services';
import { brands } from '@/data/brands';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { LocalBusinessJsonLd } from '@/components/seo/JsonLd';
import { Button } from '@/components/ui/Button';
import { CallToAction } from '@/components/sections/CallToAction';
import { MapPin, Clock, CheckCircle, ArrowRight } from 'lucide-react';

export function generateStaticParams() {
  return districts.map((d) => ({ district: d.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ district: string }> }): Promise<Metadata> {
  const { district: slug } = await params;
  const district = getDistrictBySlug(slug);
  if (!district) return {};
  return {
    title: district.metaTitle,
    description: district.metaDescription,
    alternates: { canonical: `https://criomaster.ru/moskva/${slug}` },
  };
}

export default async function DistrictPage({ params }: { params: Promise<{ district: string }> }) {
  const { district: slug } = await params;
  const district = getDistrictBySlug(slug);
  if (!district) notFound();

  return (
    <>
      <LocalBusinessJsonLd />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Breadcrumbs items={[{ label: 'Москва', href: '/moskva' }, { label: district.name }]} />

        <div className="grid lg:grid-cols-3 gap-12 mt-8">
          <div className="lg:col-span-2">
            <h1 className="text-3xl sm:text-4xl font-bold text-text mb-2">
              Ремонт холодильников в {district.name} Москвы
            </h1>
            <p className="text-sm text-muted mb-6">{district.fullName}</p>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 bg-bg rounded-lg px-4 py-2.5">
                <Clock className="w-4 h-4 text-accent" />
                <span className="text-sm text-text">Выезд: {district.arrivalTime}</span>
              </div>
              <div className="flex items-center gap-2 bg-bg rounded-lg px-4 py-2.5">
                <MapPin className="w-4 h-4 text-accent" />
                <span className="text-sm text-text">{district.name}, Москва</span>
              </div>
            </div>

            <p className="text-muted leading-relaxed mb-8">{district.description}</p>

            <div className="bg-bg rounded-2xl p-6 mb-8">
              <h2 className="text-xl font-semibold text-text mb-3">Особенности обслуживания</h2>
              <p className="text-muted leading-relaxed">{district.features}</p>
            </div>

            {/* Services */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-text mb-4">Услуги в {district.name}</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/uslugi/${s.slug}`}
                    className="flex items-center justify-between bg-surface border border-border rounded-xl p-4 hover:border-accent/30 transition-colors"
                  >
                    <span className="text-sm font-medium text-text">{s.shortName}</span>
                    <span className="text-xs text-accent font-semibold">от {s.priceFrom.toLocaleString('ru-RU')} ₽</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Brands */}
            <div>
              <h2 className="text-xl font-semibold text-text mb-4">Ремонтируем в {district.name}</h2>
              <div className="flex flex-wrap gap-2">
                {brands.map((b) => (
                  <Link
                    key={b.slug}
                    href={`/brendy/${b.slug}`}
                    className="px-4 py-2 bg-bg border border-border rounded-lg text-sm text-muted hover:border-accent/50 hover:text-accent transition-colors"
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
                <h3 className="font-semibold text-text mb-4 text-center">Вызвать мастера в {district.name}</h3>
                <ul className="space-y-2 mb-6 text-sm text-muted">
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Выезд: {district.arrivalTime}</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Бесплатная диагностика</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Гарантия 12 месяцев</li>
                </ul>
                <Button href="/kontakty" variant="primary" className="w-full">
                  Вызвать мастера
                </Button>
              </div>

              {/* Other districts */}
              <div className="bg-bg rounded-2xl p-6">
                <h3 className="font-semibold text-text mb-4">Другие округа</h3>
                <div className="space-y-2">
                  {districts.filter((d) => d.slug !== district.slug).map((d) => (
                    <Link
                      key={d.slug}
                      href={`/moskva/${d.slug}`}
                      className="flex items-center justify-between py-2 text-sm text-muted hover:text-accent transition-colors"
                    >
                      <span>{d.name}</span>
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
