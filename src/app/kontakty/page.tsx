import type { Metadata } from 'next';
import { generateMeta } from '@/lib/seo';
import { COMPANY } from '@/lib/constants';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { LocalBusinessJsonLd } from '@/components/seo/JsonLd';
import { ContactForm } from '@/components/sections/ContactForm';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export const metadata: Metadata = generateMeta({
  title: 'Контакты — вызвать мастера по ремонту холодильников | КриоМастер',
  description: 'Свяжитесь с нами для вызова мастера по ремонту холодильников. Телефон, email, форма заявки. Работаем ежедневно.',
  path: '/kontakty',
});

export default function KontaktyPage() {
  return (
    <>
      <LocalBusinessJsonLd />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Breadcrumbs items={[{ label: 'Контакты' }]} />

        <h1 className="text-3xl sm:text-4xl font-bold text-text mt-6 mb-4">Контакты</h1>
        <p className="text-muted max-w-3xl mb-10">
          Оставьте заявку или позвоните нам — мастер приедет в удобное для вас время
        </p>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info + map */}
          <div>
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-surface rounded-2xl border border-border p-6">
                <Phone className="w-6 h-6 text-accent mb-3" />
                <h3 className="font-semibold text-text mb-1">Телефон</h3>
                <a href={`tel:${COMPANY.phoneRaw}`} className="text-sm text-muted hover:text-accent transition-colors">
                  {COMPANY.phone}
                </a>
              </div>
              <div className="bg-surface rounded-2xl border border-border p-6">
                <Mail className="w-6 h-6 text-accent mb-3" />
                <h3 className="font-semibold text-text mb-1">Email</h3>
                <a href={`mailto:${COMPANY.email}`} className="text-sm text-muted hover:text-accent transition-colors">
                  {COMPANY.email}
                </a>
              </div>
              <div className="bg-surface rounded-2xl border border-border p-6">
                <MapPin className="w-6 h-6 text-accent mb-3" />
                <h3 className="font-semibold text-text mb-1">Адрес</h3>
                <span className="text-sm text-muted">{COMPANY.address}</span>
              </div>
              <div className="bg-surface rounded-2xl border border-border p-6">
                <Clock className="w-6 h-6 text-accent mb-3" />
                <h3 className="font-semibold text-text mb-1">Режим работы</h3>
                <span className="text-sm text-muted">{COMPANY.workHours}</span>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="bg-bg rounded-2xl border border-border overflow-hidden h-80 flex items-center justify-center">
              <div className="text-center text-muted">
                <MapPin className="w-10 h-10 mx-auto mb-2 opacity-30" />
                <p className="text-sm">Карта загрузится после подключения API Яндекс.Карт</p>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div>
            <div className="bg-surface rounded-2xl border border-border p-8">
              <ContactForm title="Вызвать мастера" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
