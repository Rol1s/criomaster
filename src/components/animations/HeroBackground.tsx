'use client';

import { motion } from 'framer-motion';

/** Технологичный фон: дрейфующие трассы, градиент, сетка */
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

      {/* Орбы для глубины */}
      <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-accent/20 blur-[60px]" style={{ animation: 'hero-orb-1 7s ease-in-out infinite' }} />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-white/10 blur-[80px]" style={{ animation: 'hero-orb-2 9s ease-in-out infinite' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-primary-light/20 blur-[50px]" style={{ animation: 'hero-orb-3 8s ease-in-out infinite' }} />
    </div>
  );
}
