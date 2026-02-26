'use client';

import { RevealOnScroll } from '@/components/animations/RevealOnScroll';
import { PhoneCall, Search, Wrench, ShieldCheck } from 'lucide-react';

const steps = [
  {
    icon: PhoneCall,
    title: 'Заявка',
    description: 'Позвоните или оставьте заявку на сайте. Диспетчер уточнит детали и назначит время визита мастера.',
  },
  {
    icon: Search,
    title: 'Диагностика',
    description: 'Мастер проведёт полную диагностику холодильника, определит причину неисправности и назовёт точную стоимость ремонта.',
  },
  {
    icon: Wrench,
    title: 'Ремонт',
    description: 'После вашего согласия мастер выполнит ремонт. Большинство неисправностей устраняется за 1-2 часа на месте.',
  },
  {
    icon: ShieldCheck,
    title: 'Гарантия',
    description: 'По завершении работ вы получите гарантийный талон на 12 месяцев. Оплата — после проверки работоспособности.',
  },
];

export function RepairSteps() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-text mb-4">Как мы работаем</h2>
            <p className="text-muted max-w-2xl mx-auto">
              Четыре простых шага от заявки до полностью исправного холодильника
            </p>
          </div>
        </RevealOnScroll>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-border" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <RevealOnScroll key={i} delay={i * 0.15}>
                <div className="relative text-center">
                  {/* Number badge */}
                  <div className="relative z-10 w-20 h-20 mx-auto mb-6 bg-bg rounded-2xl border-2 border-border flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-accent" />
                    <span className="absolute -top-2 -right-2 w-7 h-7 bg-accent text-white text-xs font-bold rounded-full flex items-center justify-center">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="font-semibold text-lg text-text mb-2">{step.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{step.description}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
