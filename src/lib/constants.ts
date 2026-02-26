export const COMPANY = {
  name: 'КриоМастер',
  legalName: 'ООО «КриоМастер»',
  phone: '+7 (495) 123-45-67',
  phoneRaw: '+74951234567',
  email: 'info@criomaster.ru',
  address: 'г. Москва, ул. Примерная, д. 10, офис 5',
  workHours: 'Ежедневно с 8:00 до 22:00',
  experience: 12,
  completedRepairs: 15000,
  masterCount: 28,
  warrantyMonths: 12,
  diagnosticPrice: 0,
  departurePrice: 0,
  url: 'https://criomaster.ru',
} as const;

export const NAV_ITEMS = [
  { label: 'Услуги', href: '/uslugi' },
  { label: 'Бренды', href: '/brendy' },
  { label: 'Москва', href: '/moskva' },
  { label: 'Цены', href: '/tseny' },
  { label: 'Блог', href: '/blog' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Контакты', href: '/kontakty' },
] as const;

export const COLORS = {
  primary: '#0F2B5B',
  secondary: '#1A3F7A',
  accent: '#F27B20',
  background: '#F8FAFB',
  surface: '#FFFFFF',
  text: '#1A1A2E',
  muted: '#6B7280',
} as const;
