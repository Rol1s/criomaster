import type { Metadata } from 'next';
import Link from 'next/link';
import { generateMeta } from '@/lib/seo';
import { services } from '@/data/services';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = generateMeta({
  title: 'Услуги по ремонту холодильников в Москве | КриоМастер',
  description: 'Все виды ремонта холодильников: замена компрессора, заправка фреоном, ремонт платы, устранение протечек. Гарантия 12 месяцев.',
  path: '/uslugi',
});

export default function UslugiPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumbs items={[{ label: 'Услуги' }]} />

      <h1 className="text-3xl sm:text-4xl font-bold text-text mt-6 mb-4">Услуги по ремонту холодильников</h1>
      <p className="text-muted max-w-3xl mb-10">
        Выполняем все виды ремонта холодильников на дому в Москве. Бесплатная диагностика при заказе ремонта, гарантия 12 месяцев, оригинальные запчасти.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <Link
            key={s.slug}
            href={`/uslugi/${s.slug}`}
            className="group bg-surface rounded-2xl border border-border p-6 hover:shadow-lg hover:border-accent/30 transition-all duration-300"
          >
            <h2 className="font-semibold text-lg text-text mb-3 group-hover:text-accent transition-colors">
              {s.shortName}
            </h2>
            <p className="text-sm text-muted leading-relaxed mb-4 line-clamp-3">{s.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-accent">от {s.priceFrom.toLocaleString('ru-RU')} ₽</span>
              <ArrowRight className="w-4 h-4 text-muted group-hover:text-accent group-hover:translate-x-1 transition-all" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
