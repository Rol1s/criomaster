'use client';

import Link from 'next/link';
import { RevealOnScroll } from '@/components/animations/RevealOnScroll';
import { brands } from '@/data/brands';

export function BrandGrid() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-text mb-4">Ремонтируем все бренды</h2>
            <p className="text-muted max-w-2xl mx-auto">
              Опыт работы с техникой более 50 производителей. Знаем специфику каждой марки.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {brands.map((brand, i) => (
            <RevealOnScroll key={brand.slug} delay={i * 0.05}>
              <Link
                href={`/brendy/${brand.slug}`}
                className="group flex flex-col items-center justify-center bg-bg rounded-xl border border-border p-6 hover:border-accent/30 hover:shadow-md transition-all duration-300"
              >
                <div className="w-16 h-16 bg-primary/5 rounded-xl flex items-center justify-center mb-3 group-hover:bg-accent/10 transition-colors">
                  <span className="text-xl font-bold text-primary group-hover:text-accent transition-colors">
                    {brand.name.charAt(0)}
                  </span>
                </div>
                <span className="font-semibold text-sm text-text group-hover:text-accent transition-colors">
                  {brand.name}
                </span>
                <span className="text-xs text-muted mt-1">от {brand.priceFrom.toLocaleString('ru-RU')} ₽</span>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
