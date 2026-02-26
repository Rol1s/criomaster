import { Button } from '@/components/ui/Button';
import { COMPANY } from '@/lib/constants';
import { Phone } from 'lucide-react';

export function CallToAction() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-primary to-primary-light">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Холодильник сломался? Решим проблему сегодня
        </h2>
        <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
          Бесплатная диагностика, выезд мастера в течение часа, гарантия 12 месяцев.
          Позвоните или оставьте заявку — мы перезвоним за 5 минут.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/kontakty" variant="primary" size="lg">
            Оставить заявку
          </Button>
          <a
            href={`tel:${COMPANY.phoneRaw}`}
            className="inline-flex items-center justify-center gap-2 text-white font-semibold text-base px-8 py-4 rounded-lg border-2 border-white/30 hover:bg-white/10 transition-colors"
          >
            <Phone className="w-5 h-5" />
            {COMPANY.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
