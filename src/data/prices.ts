import type { PriceCategory } from '@/types';

export const priceCategories: PriceCategory[] = [
  {
    category: 'Диагностика и выезд',
    items: [
      { name: 'Выезд мастера', price: 'Бесплатно', unit: '' },
      { name: 'Диагностика (при ремонте)', price: 'Бесплатно', unit: '' },
      { name: 'Диагностика (без ремонта)', price: '500', unit: '₽' },
    ],
  },
  {
    category: 'Холодильный контур',
    items: [
      { name: 'Замена компрессора', price: 'от 5 500', unit: '₽' },
      { name: 'Заправка фреоном (R134a / R600a)', price: 'от 2 500', unit: '₽' },
      { name: 'Устранение утечки фреона', price: 'от 2 000', unit: '₽' },
      { name: 'Замена фильтра-осушителя', price: 'от 1 500', unit: '₽' },
      { name: 'Замена капиллярной трубки', price: 'от 2 000', unit: '₽' },
      { name: 'Замена испарителя', price: 'от 4 000', unit: '₽' },
      { name: 'Замена конденсатора', price: 'от 3 500', unit: '₽' },
    ],
  },
  {
    category: 'Электрика и электроника',
    items: [
      { name: 'Ремонт платы управления', price: 'от 3 000', unit: '₽' },
      { name: 'Замена платы управления', price: 'от 4 500', unit: '₽' },
      { name: 'Замена термостата (терморегулятора)', price: 'от 2 000', unit: '₽' },
      { name: 'Замена пускозащитного реле', price: 'от 1 500', unit: '₽' },
      { name: 'Замена температурного датчика', price: 'от 1 500', unit: '₽' },
    ],
  },
  {
    category: 'Система No Frost',
    items: [
      { name: 'Замена ТЭНа оттайки', price: 'от 2 500', unit: '₽' },
      { name: 'Замена таймера оттайки', price: 'от 2 000', unit: '₽' },
      { name: 'Замена вентилятора', price: 'от 2 000', unit: '₽' },
      { name: 'Замена плавкого предохранителя', price: 'от 1 500', unit: '₽' },
    ],
  },
  {
    category: 'Прочие работы',
    items: [
      { name: 'Замена уплотнителя двери', price: 'от 1 500', unit: '₽' },
      { name: 'Прочистка дренажной системы', price: 'от 1 000', unit: '₽' },
      { name: 'Регулировка / навеска двери', price: 'от 1 000', unit: '₽' },
      { name: 'Замена лампочки / LED-модуля', price: 'от 800', unit: '₽' },
      { name: 'Замена ручки двери', price: 'от 1 000', unit: '₽' },
    ],
  },
];

export const calculatorData = {
  brandMultipliers: {
    lg: 1.0,
    samsung: 1.0,
    bosch: 1.15,
    indesit: 0.85,
    liebherr: 1.3,
    atlant: 0.8,
    beko: 0.9,
    whirlpool: 1.05,
    electrolux: 1.1,
    haier: 1.0,
  } as Record<string, number>,
  serviceBasePrices: {
    'zamena-kompressora': 5500,
    'zapravka-freonom': 2500,
    'remont-platy-upravleniya': 3000,
    'ustranenie-protechek': 1500,
    'zamena-termostata': 2000,
    'remont-no-frost': 2500,
  } as Record<string, number>,
};
