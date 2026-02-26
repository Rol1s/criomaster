import Link from 'next/link';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { COMPANY } from '@/lib/constants';
import { services } from '@/data/services';
import { brands } from '@/data/brands';

export function Footer() {
  return (
    <footer className="bg-dark text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">K</span>
              </div>
              <span className="font-bold text-white text-lg">{COMPANY.name}</span>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Профессиональный ремонт холодильников всех марок в Москве. Более {COMPANY.experience} лет на рынке, свыше {COMPANY.completedRepairs.toLocaleString('ru-RU')} выполненных ремонтов.
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <a href={`tel:${COMPANY.phoneRaw}`} className="flex items-center gap-2 hover:text-accent transition-colors">
                <Phone className="w-4 h-4 text-accent" /> {COMPANY.phone}
              </a>
              <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-2 hover:text-accent transition-colors">
                <Mail className="w-4 h-4 text-accent" /> {COMPANY.email}
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent" /> {COMPANY.address}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-accent" /> {COMPANY.workHours}
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-4">Услуги</h3>
            <ul className="flex flex-col gap-2 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/uslugi/${s.slug}`} className="hover:text-accent transition-colors">
                    {s.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Brands */}
          <div>
            <h3 className="font-semibold text-white mb-4">Бренды</h3>
            <ul className="flex flex-col gap-2 text-sm">
              {brands.map((b) => (
                <li key={b.slug}>
                  <Link href={`/brendy/${b.slug}`} className="hover:text-accent transition-colors">
                    Ремонт {b.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="font-semibold text-white mb-4">Информация</h3>
            <ul className="flex flex-col gap-2 text-sm">
              <li><Link href="/tseny" className="hover:text-accent transition-colors">Цены</Link></li>
              <li><Link href="/blog" className="hover:text-accent transition-colors">Блог</Link></li>
              <li><Link href="/faq" className="hover:text-accent transition-colors">Вопросы и ответы</Link></li>
              <li><Link href="/moskva" className="hover:text-accent transition-colors">Районы Москвы</Link></li>
              <li><Link href="/kontakty" className="hover:text-accent transition-colors">Контакты</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/50">
          <span>&copy; {new Date().getFullYear()} {COMPANY.legalName}. Все права защищены.</span>
          <span>Ремонт холодильников в Москве</span>
        </div>
      </div>
    </footer>
  );
}
