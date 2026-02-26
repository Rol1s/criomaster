import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { COMPANY } from '@/lib/constants';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0F2B5B',
};

export const metadata: Metadata = {
  title: {
    default: `${COMPANY.name} — профессиональный ремонт холодильников в Москве`,
    template: `%s | ${COMPANY.name}`,
  },
  description:
    'Профессиональный ремонт холодильников всех марок в Москве. Бесплатная диагностика, выезд мастера в день обращения, гарантия 12 месяцев. Звоните!',
  metadataBase: new URL(COMPANY.url),
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    siteName: COMPANY.name,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={inter.variable}>
      <body className="min-h-screen flex flex-col antialiased overflow-x-hidden">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
