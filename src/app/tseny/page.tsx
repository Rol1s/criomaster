import type { Metadata } from 'next';
import { generateMeta } from '@/lib/seo';
import { priceCategories } from '@/data/prices';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { PriceCalculator } from '@/components/sections/PriceCalculator';
import { CallToAction } from '@/components/sections/CallToAction';
import { CheckCircle } from 'lucide-react';

export const metadata: Metadata = generateMeta({
  title: 'Цены на ремонт холодильников в Москве | КриоМастер',
  description: 'Прозрачные цены на ремонт холодильников. Калькулятор стоимости. Бесплатная диагностика при заказе ремонта. Без скрытых платежей.',
  path: '/tseny',
});

export default function TsenyPage() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Breadcrumbs items={[{ label: 'Цены' }]} />

        <h1 className="text-3xl sm:text-4xl font-bold text-text mt-6 mb-4">Цены на ремонт холодильников</h1>
        <p className="text-muted max-w-3xl mb-4">
          Мы придерживаемся политики прозрачного ценообразования. Стоимость включает работу мастера и не содержит скрытых платежей. Запчасти оплачиваются отдельно по прайсу.
        </p>

        <div className="flex flex-wrap gap-4 mb-10">
          <div className="flex items-center gap-2 text-sm text-muted">
            <CheckCircle className="w-4 h-4 text-green-500" /> Выезд бесплатно
          </div>
          <div className="flex items-center gap-2 text-sm text-muted">
            <CheckCircle className="w-4 h-4 text-green-500" /> Диагностика при ремонте — 0 ₽
          </div>
          <div className="flex items-center gap-2 text-sm text-muted">
            <CheckCircle className="w-4 h-4 text-green-500" /> Без скрытых платежей
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Price table */}
          <div className="lg:col-span-2 space-y-8">
            {priceCategories.map((cat, i) => (
              <div key={i}>
                <h2 className="text-xl font-semibold text-text mb-4">{cat.category}</h2>
                <div className="bg-surface rounded-2xl border border-border overflow-hidden">
                  <table className="w-full">
                    <tbody>
                      {cat.items.map((item, j) => (
                        <tr key={j} className={j < cat.items.length - 1 ? 'border-b border-border' : ''}>
                          <td className="px-6 py-4 text-sm text-text">{item.name}</td>
                          <td className="px-6 py-4 text-sm font-semibold text-right whitespace-nowrap">
                            <span className={item.price === 'Бесплатно' ? 'text-green-600' : 'text-accent'}>
                              {item.price} {item.unit}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>

          {/* Calculator sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-28">
              <PriceCalculator />
            </div>
          </div>
        </div>
      </div>

      <CallToAction />
    </>
  );
}
