'use client';

import Link from 'next/link';
import { RevealOnScroll } from '@/components/animations/RevealOnScroll';
import { services } from '@/data/services';
import { ArrowRight } from 'lucide-react';

export function Faults() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-text mb-4">Типовые неисправности</h2>
            <p className="text-muted max-w-2xl mx-auto">
              Определите проблему вашего холодильника и узнайте стоимость ремонта
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <RevealOnScroll key={service.slug} delay={i * 0.08}>
              <Link
                href={`/uslugi/${service.slug}`}
                className="group block bg-surface rounded-2xl border border-border p-6 hover:shadow-lg hover:border-accent/30 transition-all duration-300"
              >
                <h3 className="font-semibold text-text mb-3 group-hover:text-accent transition-colors">
                  {service.shortName}
                </h3>
                <ul className="text-sm text-muted space-y-1.5 mb-4">
                  {service.symptoms.slice(0, 3).map((s, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-accent">
                    от {service.priceFrom.toLocaleString('ru-RU')} ₽
                  </span>
                  <ArrowRight className="w-4 h-4 text-muted group-hover:text-accent group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
