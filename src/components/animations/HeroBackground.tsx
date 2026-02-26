'use client';

import { motion } from 'framer-motion';

/** Технологичный фон: дрейфующие трассы, градиент с фиолетовым оттенком, лёгкий X-ray контур */
export function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Глубокий градиент: синий → лёгкий фиолетовый */}
      <div
        className="absolute inset-0 opacity-95"
        style={{
          background: 'linear-gradient(135deg, #0F2B5B 0%, #1A3F7A 40%, #1e3a5f 70%, #252550 100%)',
        }}
      />

      {/* Дрейфующие трассы — горизонтальные линии «сигнала» */}
      <div className="absolute inset-0">
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="absolute left-0 right-0 h-px"
            style={{
              top: `${18 + i * 18}%`,
              background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.12) 20%, rgba(242,123,32,0.08) 50%, rgba(255,255,255,0.12) 80%, transparent 100%)',
              animation: 'hero-track-drift 12s linear infinite',
              animationDelay: `${i * 2.5}s`,
            }}
          />
        ))}
      </div>

      {/* Точки «сигнала» на трассах */}
      <div className="absolute inset-0">
        {[10, 30, 50, 70, 90].map((left, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white/20"
            style={{ left: `${left}%`, top: '35%' }}
            animate={{ opacity: [0.2, 0.7, 0.2], scale: [1, 1.3, 1] }}
            transition={{ duration: 2 + i * 0.3, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </div>

      {/* Сетка с 3D перспективой */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.2) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          opacity: 0.12,
          transform: 'perspective(400px) rotateX(60deg) scale(1.8)',
          transformOrigin: 'center 20%',
          animation: 'hero-grid-move 22s linear infinite',
        }}
      />

      {/* Лёгкий X-ray контур — схема платы/компрессора (очень мягко) */}
      <div
        className="absolute bottom-0 right-0 w-64 h-48 opacity-[0.06]"
        style={{
          background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 80'%3E%3Cpath fill='none' stroke='white' stroke-width='0.5' d='M10 20 L30 20 L30 40 L10 40 Z M35 25 L55 25 L55 45 L35 45 Z M60 15 L85 15 L85 50 L60 50 Z M15 55 L40 55 L40 65 L15 65 Z M50 55 L90 55' stroke-dasharray='2 2'/%3E%3C/svg%3E") center/contain no-repeat`,
          animation: 'hero-track-pulse 8s ease-in-out infinite',
        }}
      />

      {/* Орбы для глубины */}
      <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-accent/20 blur-[60px]" style={{ animation: 'hero-orb-1 7s ease-in-out infinite' }} />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-white/10 blur-[80px]" style={{ animation: 'hero-orb-2 9s ease-in-out infinite' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-primary-light/20 blur-[50px]" style={{ animation: 'hero-orb-3 8s ease-in-out infinite' }} />
    </div>
  );
}
