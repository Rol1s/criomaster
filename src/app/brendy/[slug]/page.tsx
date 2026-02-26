import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { brands, getBrandBySlug } from '@/data/brands';
import { services } from '@/data/services';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { LocalBusinessJsonLd } from '@/components/seo/JsonLd';
import { Button } from '@/components/ui/Button';
import { CallToAction } from '@/components/sections/CallToAction';
import { AlertTriangle, CheckCircle, ArrowRight, Monitor } from 'lucide-react';

export function generateStaticParams() {
  return brands.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const brand = getBrandBySlug(slug);
  if (!brand) return {};
  return {
    title: brand.metaTitle,
    description: brand.metaDescription,
    alternates: { canonical: `https://criomaster.ru/brendy/${slug}` },
  };
}

export default async function BrandPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const brand = getBrandBySlug(slug);
  if (!brand) notFound();

  const relatedServices = services.filter((s) => brand.relatedServices.includes(s.slug));

  return (
    <>
      <LocalBusinessJsonLd />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Breadcrumbs items={[{ label: 'Бренды', href: '/brendy' }, { label: brand.name }]} />

        <div className="grid lg:grid-cols-3 gap-12 mt-8">
          <div className="lg:col-span-2">
            <h1 className="text-3xl sm:text-4xl font-bold text-text mb-2">
              Ремонт холодильников {brand.name} в Москве
            </h1>
            <p className="text-sm text-muted mb-6">Страна-производитель: {brand.country}</p>
            <p className="text-muted leading-relaxed mb-8">{brand.description}</p>

            {/* Common issues */}
            <div className="bg-bg rounded-2xl p-6 mb-8">
              <h2 className="flex items-center gap-2 text-xl font-semibold text-text mb-4">
                <AlertTriangle className="w-5 h-5 text-accent" />
                Частые неисправности {brand.name}
              </h2>
              <ul className="space-y-3">
                {brand.commonIssues.map((issue, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                    {issue}
                  </li>
                ))}
              </ul>
            </div>

            {/* Repair features */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-text mb-3">Особенности ремонта {brand.name}</h2>
              <p className="text-muted leading-relaxed">{brand.repairFeatures}</p>
            </div>

            {/* Popular models */}
            <div className="mb-8">
              <h2 className="flex items-center gap-2 text-xl font-semibold text-text mb-4">
                <Monitor className="w-5 h-5 text-primary" />
                Популярные модели
              </h2>
              <div className="flex flex-wrap gap-2">
                {brand.popularModels.map((model, i) => (
                  <span key={i} className="px-3 py-1.5 bg-bg border border-border rounded-lg text-sm text-muted">
                    {model}
                  </span>
                ))}
              </div>
            </div>

            {/* Related services */}
            <div>
              <h2 className="text-xl font-semibold text-text mb-4">Услуги для {brand.name}</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {relatedServices.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/uslugi/${s.slug}`}
                    className="group flex items-center justify-between bg-bg rounded-xl border border-border p-4 hover:border-accent/30 transition-colors"
                  >
                    <div>
                      <span className="font-medium text-sm text-text group-hover:text-accent transition-colors">{s.shortName}</span>
                      <span className="block text-xs text-muted mt-0.5">от {s.priceFrom.toLocaleString('ru-RU')} ₽</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted group-hover:text-accent transition-all" />
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
                  <span className="text-sm text-muted">Ремонт {brand.name}</span>
                  <p className="text-3xl font-bold text-accent">от {brand.priceFrom.toLocaleString('ru-RU')} ₽</p>
                </div>
                <ul className="space-y-2 mb-6 text-sm text-muted">
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Бесплатная диагностика</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Оригинальные запчасти {brand.name}</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Гарантия 12 месяцев</li>
                </ul>
                <Button href="/kontakty" variant="primary" className="w-full">
                  Вызвать мастера
                </Button>
              </div>

              {/* Other brands */}
              <div className="bg-bg rounded-2xl p-6">
                <h3 className="font-semibold text-text mb-4">Другие бренды</h3>
                <div className="space-y-2">
                  {brands.filter((b) => b.slug !== brand.slug).slice(0, 6).map((b) => (
                    <Link
                      key={b.slug}
                      href={`/brendy/${b.slug}`}
                      className="flex items-center justify-between py-2 text-sm text-muted hover:text-accent transition-colors"
                    >
                      <span>Ремонт {b.name}</span>
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
