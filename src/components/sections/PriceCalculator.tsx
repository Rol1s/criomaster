'use client';

import { useState } from 'react';
import { brands } from '@/data/brands';
import { services } from '@/data/services';
import { calculatorData } from '@/data/prices';
import { Button } from '@/components/ui/Button';
import { Calculator } from 'lucide-react';

export function PriceCalculator() {
  const [brand, setBrand] = useState('');
  const [service, setService] = useState('');

  const calculated = brand && service
    ? Math.round(
        (calculatorData.serviceBasePrices[service] ?? 0) *
        (calculatorData.brandMultipliers[brand] ?? 1),
      )
    : null;

  return (
    <div className="bg-surface rounded-2xl border border-border p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
          <Calculator className="w-5 h-5 text-accent" />
        </div>
        <h3 className="text-xl font-semibold text-text">Калькулятор стоимости</h3>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-text mb-2">Бренд холодильника</label>
          <select
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            className="w-full px-4 py-3 bg-bg border border-border rounded-lg text-sm focus:outline-none focus:border-accent transition-colors"
          >
            <option value="">Выберите бренд</option>
            {brands.map((b) => (
              <option key={b.slug} value={b.slug}>{b.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-text mb-2">Тип неисправности</label>
          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="w-full px-4 py-3 bg-bg border border-border rounded-lg text-sm focus:outline-none focus:border-accent transition-colors"
          >
            <option value="">Выберите услугу</option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>{s.shortName}</option>
            ))}
          </select>
        </div>
      </div>

      {calculated !== null && (
        <div className="bg-bg rounded-xl p-6 text-center mb-6">
          <p className="text-sm text-muted mb-1">Предварительная стоимость ремонта</p>
          <p className="text-4xl font-bold text-accent">
            от {calculated.toLocaleString('ru-RU')} ₽
          </p>
          <p className="text-xs text-muted mt-2">
            Точная стоимость определяется после диагностики мастером
          </p>
        </div>
      )}

      <Button href="/kontakty" variant="primary" className="w-full">
        Получить точную смету
      </Button>
    </div>
  );
}
