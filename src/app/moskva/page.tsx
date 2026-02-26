import type { Metadata } from 'next';
import Link from 'next/link';
import { generateMeta } from '@/lib/seo';
import { districts } from '@/data/districts';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { CallToAction } from '@/components/sections/CallToAction';
import { MapPin, Clock, ArrowRight } from 'lucide-react';

export const metadata: Metadata = generateMeta({
  title: 'Ремонт холодильников в Москве — все районы | КриоМастер',
  description: 'Ремонт холодильников во всех округах Москвы. Выезд мастера от 30 минут. Бесплатная диагностика. Гарантия 12 месяцев.',
  path: '/moskva',
});

export default function MoskvaPage() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Breadcrumbs items={[{ label: 'Москва' }]} />

        <h1 className="text-3xl sm:text-4xl font-bold text-text mt-6 mb-4">
          Ремонт холодильников в Москве
        </h1>
        <p className="text-muted max-w-3xl mb-10">
          Наши мастера работают во всех административных округах Москвы. Среднее время прибытия — от 30 до 80 минут в зависимости от вашего расположения. Запчасти в наличии — большинство ремонтов выполняется за один визит.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {districts.map((d) => (
            <Link
              key={d.slug}
              href={`/moskva/${d.slug}`}
              className="group bg-surface rounded-2xl border border-border p-6 hover:shadow-lg hover:border-accent/30 transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-5 h-5 text-accent" />
                <h2 className="font-semibold text-lg text-text group-hover:text-accent transition-colors">{d.name}</h2>
              </div>
              <p className="text-xs text-muted mb-3">{d.fullName}</p>
              <div className="flex items-center gap-1.5 text-sm text-muted mb-3">
                <Clock className="w-3.5 h-3.5" />
                Выезд: {d.arrivalTime}
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-accent font-medium">Подробнее</span>
                <ArrowRight className="w-3.5 h-3.5 text-muted group-hover:text-accent group-hover:translate-x-1 transition-all" />
              </div>
            </Link>
          ))}
        </div>
      </div>

      <CallToAction />
    </>
  );
}
