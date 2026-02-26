'use client';

import { Button } from '@/components/ui/Button';
import { FloatingPart } from '@/components/animations/FloatingPart';
import { HeroBackground } from '@/components/animations/HeroBackground';
import { AnimatedCounter } from '@/components/animations/AnimatedCounter';
import { COMPANY } from '@/lib/constants';
import { Shield, Clock, Award, Phone } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative bg-primary overflow-hidden">
      <HeroBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-28 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-4 sm:mb-6">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/90 text-xs sm:text-sm px-3 sm:px-4 py-2 rounded-full">
                <Shield className="w-4 h-4 text-accent" />
                Гарантия {COMPANY.warrantyMonths} месяцев на все работы
              </div>
              {/* Мастер онлайн — плавно мигающий статус */}
              <div
                className="inline-flex items-center gap-1.5 bg-emerald-500/20 backdrop-blur-sm text-emerald-200 text-xs px-3 py-2 rounded-full border border-emerald-400/30"
                style={{ animation: 'hero-master-pulse 2.5s ease-in-out infinite' }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-hero-dot-blink" />
                Мастер онлайн
              </div>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6">
              Ремонт холодильников
              <span className="text-accent"> в Москве</span>
            </h1>

            <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-3 max-w-xl">
              Профессиональная диагностика и ремонт холодильников всех марок на дому.
              Выезд мастера в день обращения. Бесплатная диагностика при заказе ремонта.
            </p>
            <p className="text-sm sm:text-base text-white/60 leading-relaxed mb-6 sm:mb-8 max-w-xl">
              Высокоточная электронная диагностика любых моделей. Мы не просто ремонтируем — восстанавливаем ваш холодильник до рабочего состояния.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12">
              <Button href="/kontakty" variant="primary" size="lg" className="min-h-[48px] sm:min-h-0">
                Вызвать мастера
              </Button>
              <a
                href={`tel:${COMPANY.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 text-white font-semibold text-base px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg border-2 border-white/30 hover:bg-white/10 transition-colors min-h-[48px] sm:min-h-0 touch-manipulation"
              >
                <Phone className="w-5 h-5" />
                {COMPANY.phone}
              </a>
            </div>

            <div className="grid grid-cols-3 gap-3 sm:gap-6 mb-8 lg:mb-0">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white">
                  <AnimatedCounter target={COMPANY.experience} suffix="+" />
                </div>
                <div className="text-xs sm:text-sm text-white/60 mt-1">лет опыта</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white">
                  <AnimatedCounter target={COMPANY.completedRepairs} suffix="+" />
                </div>
                <div className="text-xs sm:text-sm text-white/60 mt-1">ремонтов</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white">
                  <AnimatedCounter target={COMPANY.masterCount} />
                </div>
                <div className="text-xs sm:text-sm text-white/60 mt-1">мастеров</div>
              </div>
            </div>

            <div className="flex lg:hidden flex-wrap gap-3 mt-6">
              <div className="flex-1 min-w-[120px] bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/20 flex items-center gap-2">
                <Clock className="w-4 h-4 text-accent shrink-0" />
                <span className="text-white text-xs font-medium">Выезд за 30 мин</span>
              </div>
              <div className="flex-1 min-w-[120px] bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/20 flex items-center gap-2">
                <Award className="w-4 h-4 text-accent shrink-0" />
                <span className="text-white text-xs font-medium">Гарантия 12 мес</span>
              </div>
            </div>
          </div>

          {/* Десктоп: холодильник с подиумом и карточки */}
          <div className="hidden lg:flex flex-col items-center gap-8">
            <div className="relative flex flex-col items-center">
              {/* Подиум — динамическое свечение под холодильником */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-40 rounded-full pointer-events-none -z-10 origin-center"
                style={{
                  background: 'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(242,123,32,0.25) 0%, rgba(26,63,122,0.2) 40%, transparent 70%)',
                  animation: 'hero-podium-glow 5s ease-in-out infinite',
                }}
              />
              <FloatingPart />
            </div>
            <div className="flex flex-wrap justify-center gap-4 w-full max-w-sm">
              <div className="flex-1 min-w-[140px] bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 flex items-center gap-3">
                <Clock className="w-5 h-5 text-accent shrink-0" />
                <span className="text-white text-sm font-medium">Выезд за 30 мин</span>
              </div>
              <div className="flex-1 min-w-[140px] bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 flex items-center gap-3">
                <Award className="w-5 h-5 text-accent shrink-0" />
                <span className="text-white text-sm font-medium">Гарантия 12 мес</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
