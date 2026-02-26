'use client';

import { RevealOnScroll } from '@/components/animations/RevealOnScroll';
import { Shield, Clock, Wrench, Award, Truck, CreditCard } from 'lucide-react';

const advantages = [
  {
    icon: Clock,
    title: 'Выезд за 30 минут',
    description: 'Мастер приедет в удобное для вас время. Среднее время ожидания — от 30 минут.',
    back: 'Работаем ежедневно с 8:00 до 22:00, включая выходные и праздники.',
  },
  {
    icon: Shield,
    title: 'Гарантия 12 месяцев',
    description: 'Официальная гарантия на все выполненные работы и установленные запчасти.',
    back: 'Гарантийный талон с печатью организации. Повторный выезд по гарантии — бесплатно.',
  },
  {
    icon: Wrench,
    title: 'Оригинальные запчасти',
    description: 'Используем только оригинальные комплектующие и сертифицированные аналоги.',
    back: 'Прямые поставки от производителей. Основные детали мастер везёт с собой.',
  },
  {
    icon: Award,
    title: 'Опытные мастера',
    description: 'Инженеры с опытом от 5 лет. Регулярное повышение квалификации.',
    back: 'Каждый мастер проходит аттестацию. Знание специфики всех популярных брендов.',
  },
  {
    icon: Truck,
    title: 'Бесплатная диагностика',
    description: 'Диагностика бесплатна при заказе ремонта. Без скрытых платежей.',
    back: 'Мастер называет точную стоимость до начала работ. Вы решаете — ремонтировать или нет.',
  },
  {
    icon: CreditCard,
    title: 'Удобная оплата',
    description: 'Наличные, карта, перевод. Оплата только после завершения ремонта.',
    back: 'Никаких предоплат. Полный пакет документов для юридических лиц.',
  },
];

export function Advantages() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-text mb-4">Почему выбирают нас</h2>
            <p className="text-muted max-w-2xl mx-auto">
              Более 15 000 клиентов доверили нам ремонт своей техники. Вот почему:
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((item, i) => (
            <RevealOnScroll key={i} delay={i * 0.1}>
              <div className="group [perspective:1000px] h-64">
                <div className="relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* Front */}
                  <div className="absolute inset-0 bg-surface rounded-2xl border border-border p-6 flex flex-col items-center justify-center text-center [backface-visibility:hidden]">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <item.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg text-text mb-2">{item.title}</h3>
                    <p className="text-sm text-muted">{item.description}</p>
                  </div>
                  {/* Back */}
                  <div className="absolute inset-0 bg-primary rounded-2xl p-6 flex items-center justify-center text-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    <p className="text-white text-sm leading-relaxed">{item.back}</p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
