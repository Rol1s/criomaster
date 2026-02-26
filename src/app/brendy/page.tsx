import type { Metadata } from 'next';
import Link from 'next/link';
import { generateMeta } from '@/lib/seo';
import { brands } from '@/data/brands';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = generateMeta({
  title: 'Ремонт холодильников всех брендов в Москве | КриоМастер',
  description: 'Ремонтируем холодильники LG, Samsung, Bosch, Indesit, Liebherr, ATLANT, Beko, Whirlpool, Electrolux, Haier. Гарантия 12 месяцев.',
  path: '/brendy',
});

export default function BrendyPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumbs items={[{ label: 'Бренды' }]} />

      <h1 className="text-3xl sm:text-4xl font-bold text-text mt-6 mb-4">Ремонт холодильников по брендам</h1>
      <p className="text-muted max-w-3xl mb-10">
        Мы ремонтируем холодильники всех популярных производителей. Знаем особенности каждого бренда, используем оригинальные запчасти и специализированное диагностическое оборудование.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {brands.map((b) => (
          <Link
            key={b.slug}
            href={`/brendy/${b.slug}`}
            className="group bg-surface rounded-2xl border border-border p-6 hover:shadow-lg hover:border-accent/30 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-primary/5 rounded-xl flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                <span className="text-2xl font-bold text-primary group-hover:text-accent transition-colors">{b.name.charAt(0)}</span>
              </div>
              <div>
                <h2 className="font-semibold text-lg text-text group-hover:text-accent transition-colors">{b.name}</h2>
                <span className="text-xs text-muted">{b.country}</span>
              </div>
            </div>
            <p className="text-sm text-muted leading-relaxed mb-4 line-clamp-2">{b.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-accent">от {b.priceFrom.toLocaleString('ru-RU')} ₽</span>
              <ArrowRight className="w-4 h-4 text-muted group-hover:text-accent group-hover:translate-x-1 transition-all" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
