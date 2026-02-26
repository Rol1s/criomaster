'use client';

import { RevealOnScroll } from '@/components/animations/RevealOnScroll';
import type { CaseWork } from '@/types';

const cases: CaseWork[] = [
  {
    title: 'Замена инверторного компрессора LG',
    description: 'Холодильник LG GA-B509 перестал охлаждать. Диагностика показала обрыв обмотки линейного компрессора. Заменили на оригинальный агрегат, заправили R600a.',
    brand: 'LG',
    service: 'Замена компрессора',
  },
  {
    title: 'Устранение утечки фреона Samsung',
    description: 'Samsung RB37 — утечка в запененной части корпуса. Выполнили обход контура, установили навесной испаритель, заправили систему.',
    brand: 'Samsung',
    service: 'Заправка фреоном',
  },
  {
    title: 'Ремонт платы управления Bosch',
    description: 'Bosch KGN39 — после грозы перестал включаться. Обнаружены сгоревшие варисторы и конденсаторы на плате. Компонентный ремонт на месте.',
    brand: 'Bosch',
    service: 'Ремонт платы',
  },
  {
    title: 'Восстановление системы No Frost',
    description: 'Liebherr CBNef — намерзание льда на испарителе. Перегорел ТЭН оттайки и термоплавкий предохранитель. Замена обоих компонентов.',
    brand: 'Liebherr',
    service: 'Ремонт No Frost',
  },
];

export function CaseGallery() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-text mb-4">Примеры наших работ</h2>
            <p className="text-muted max-w-2xl mx-auto">
              Реальные кейсы из нашей практики
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid sm:grid-cols-2 gap-6">
          {cases.map((c, i) => (
            <RevealOnScroll key={i} delay={i * 0.1}>
              <div className="bg-bg rounded-2xl border border-border overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-primary/10 to-primary-light/10 flex items-center justify-center">
                  <div className="text-center">
                    <span className="block text-4xl font-bold text-primary/20 mb-1">{c.brand}</span>
                    <span className="text-sm text-muted">{c.service}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-text mb-2">{c.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{c.description}</p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
