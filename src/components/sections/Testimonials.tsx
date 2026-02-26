'use client';

import { RevealOnScroll } from '@/components/animations/RevealOnScroll';
import { Star } from 'lucide-react';
import type { Testimonial } from '@/types';

const testimonials: Testimonial[] = [
  {
    name: 'Алексей К.',
    brand: 'Samsung',
    text: 'Мастер приехал через 40 минут после звонка. Быстро определил проблему — вышел из строя вентилятор No Frost. Заменил за час, всё работает отлично. Профессиональный подход.',
    rating: 5,
    date: '2025-12-01',
  },
  {
    name: 'Мария В.',
    brand: 'Liebherr',
    text: 'Обратились с проблемой — холодильник перестал охлаждать. Оказалась утечка фреона. Мастер нашёл место утечки, запаял, заправил. Работает уже 3 месяца без нареканий.',
    rating: 5,
    date: '2025-11-15',
  },
  {
    name: 'Дмитрий С.',
    brand: 'LG',
    text: 'Сгорела плата управления после скачка напряжения. Мастер отремонтировал плату на месте — заменил несколько конденсаторов. Стоимость оказалась в 3 раза ниже, чем замена платы целиком.',
    rating: 5,
    date: '2025-10-20',
  },
  {
    name: 'Елена П.',
    brand: 'Bosch',
    text: 'Холодильнику 9 лет, начал шуметь. Мастер честно сказал, что замена компрессора нецелесообразна по стоимости, и помог выбрать новую модель. Ценю такой честный подход.',
    rating: 5,
    date: '2025-09-10',
  },
  {
    name: 'Игорь Н.',
    brand: 'Indesit',
    text: 'Вода скапливалась под ящиками. Мастер прочистил дренаж за 20 минут. Взял символическую сумму. Приятно работать с адекватными специалистами.',
    rating: 5,
    date: '2025-08-25',
  },
  {
    name: 'Ольга Т.',
    brand: 'ATLANT',
    text: 'Заменили термостат на холодильнике ATLANT. Мастер объяснил причину поломки и дал рекомендации по эксплуатации. Всё чётко, быстро и с гарантией.',
    rating: 5,
    date: '2025-07-18',
  },
];

export function Testimonials() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-text mb-4">Отзывы клиентов</h2>
            <p className="text-muted max-w-2xl mx-auto">
              Мнения реальных клиентов о нашей работе
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <RevealOnScroll key={i} delay={i * 0.08}>
              <div className="bg-surface rounded-2xl border border-border p-6 h-full flex flex-col">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-sm text-muted leading-relaxed flex-1 mb-4">{t.text}</p>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <span className="font-medium text-sm text-text">{t.name}</span>
                    <span className="block text-xs text-muted">Ремонт {t.brand}</span>
                  </div>
                  <span className="text-xs text-muted">
                    {new Date(t.date).toLocaleDateString('ru-RU', { month: 'long', year: 'numeric' })}
                  </span>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
