'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Phone, Menu, X } from 'lucide-react';
import { COMPANY, NAV_ITEMS } from '@/lib/constants';
import { cn } from '@/lib/utils';

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-surface/95 backdrop-blur-md border-b border-border">
      {/* Top bar */}
      <div className="bg-primary text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-9">
          <span className="hidden sm:block">{COMPANY.workHours}</span>
          <a href={`tel:${COMPANY.phoneRaw}`} className="flex items-center gap-1.5 font-medium hover:text-accent transition-colors">
            <Phone className="w-3.5 h-3.5" />
            {COMPANY.phone}
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">K</span>
            </div>
            <div className="leading-tight">
              <span className="font-bold text-primary text-lg tracking-tight">{COMPANY.name}</span>
              <span className="block text-[11px] text-muted -mt-0.5">ремонт холодильников</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-text hover:text-accent transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${COMPANY.phoneRaw}`}
              className="text-sm font-semibold text-primary hover:text-accent transition-colors"
            >
              {COMPANY.phone}
            </a>
            <Link
              href="/kontakty"
              className="bg-accent hover:bg-accent-hover text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
            >
              Вызвать мастера
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden min-w-[44px] min-h-[44px] flex items-center justify-center p-2 text-text touch-manipulation"
            aria-label="Меню"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'lg:hidden overflow-hidden transition-all duration-300 bg-surface border-t border-border',
          mobileOpen ? 'max-h-[500px]' : 'max-h-0',
        )}
      >
        <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="py-2.5 px-3 text-sm font-medium text-text hover:bg-bg rounded-lg transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/kontakty"
            onClick={() => setMobileOpen(false)}
            className="mt-3 bg-accent text-white text-sm font-semibold px-5 py-3 rounded-lg text-center"
          >
            Вызвать мастера
          </Link>
        </nav>
      </div>
    </header>
  );
}
