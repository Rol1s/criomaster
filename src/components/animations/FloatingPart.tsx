'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface FloatingPartProps {
  className?: string;
}

/** Холодильник: сканирование, панель с индикаторами, лёгкое открытие двери по hover */
export function FloatingPart({ className }: FloatingPartProps) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={className}
      style={{ perspective: '1000px' }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <motion.div
        animate={{
          rotateY: [0, 4, 0, -4, 0],
          rotateX: [0, 2, 0, -2, 0],
          y: [0, -6, 0],
          scale: [1, 1.01, 1],
        }}
        transition={{
          rotateY: { duration: 10, repeat: Infinity, ease: 'easeInOut' },
          rotateX: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
          y: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
          scale: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
        }}
        style={{ transformStyle: 'preserve-3d' }}
        className="flex flex-col items-center justify-center relative"
      >
        {/* Луч сканирования — пробегает сверху вниз как диагностика */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none z-10">
          <motion.div
            className="absolute left-0 right-0 h-[3px] rounded-full"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(242,123,32,0.9), transparent)',
              boxShadow: '0 0 12px rgba(242,123,32,0.6), 0 0 24px rgba(242,123,32,0.3)',
            }}
            initial={{ top: '0%' }}
            animate={{ top: ['0%', '100%'] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatDelay: 4,
              ease: 'easeInOut',
            }}
          />
        </div>

        {/* Индикаторы на углах — «работающая электроника» */}
        <div className="absolute top-1 right-2 w-1 h-1 rounded-full bg-emerald-400/90 z-10 shadow-[0_0_6px_rgba(52,211,153,0.8)] animate-hero-dot-blink" style={{ animationDelay: '0s' }} />
        <div className="absolute top-1 left-2 w-1 h-1 rounded-full bg-amber-400/80 z-10 shadow-[0_0_6px_rgba(251,191,36,0.6)] animate-hero-dot-blink" style={{ animationDelay: '0.8s' }} />
        <div className="absolute bottom-2 right-2 w-1 h-1 rounded-full bg-emerald-400/70 z-10 animate-hero-dot-blink" style={{ animationDelay: '1.6s' }} />
        <div className="absolute bottom-2 left-2 w-1 h-1 rounded-full bg-amber-400/60 z-10 animate-hero-dot-blink" style={{ animationDelay: '2.4s' }} />

        {/* Корпус холодильника */}
        <div
          className="relative w-32 h-48 sm:w-36 sm:h-56 rounded-2xl overflow-hidden"
          style={{
            background: 'linear-gradient(160deg, #f8fafc 0%, #e2e8f0 35%, #cbd5e1 70%, #94a3b8 100%)',
            boxShadow: '0 30px 60px -15px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.6) inset, 4px 0 0 rgba(0,0,0,0.06)',
          }}
        >
          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-slate-200 to-slate-300 opacity-80" />

          {/* Морозильная камера — лёгкое «открытие» по hover */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-[24%] border-b-2 border-slate-300/90 origin-top"
            animate={{ rotateX: hover ? -3 : 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            style={{ transformStyle: 'preserve-3d', backfaceVisibility: 'hidden' }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent" />
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-8 h-1 rounded-full bg-slate-400/70" />
            <div className="absolute top-2 left-3 right-3 h-1.5 rounded bg-slate-300/50" />
            <div className="absolute top-5 left-3 right-3 h-1 rounded bg-slate-300/40" />
          </motion.div>

          {/* Холодильная камера */}
          <div className="absolute top-[24%] left-0 right-0 bottom-0">
            <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent" />
            <div className="absolute right-2 top-4 bottom-4 w-1.5 rounded-full bg-slate-400/80 shadow-sm" />
            <div className="absolute left-2 right-6 top-[18%] h-0.5 bg-slate-300/60 rounded" />
            <div className="absolute left-2 right-6 top-[42%] h-0.5 bg-slate-300/60 rounded" />
            <div className="absolute left-2 right-6 top-[66%] h-0.5 bg-slate-300/60 rounded" />
            <div className="absolute left-2 right-6 bottom-[18%] h-0.5 bg-slate-300/50 rounded" />
          </div>

          {/* Панель: мигающие датчики и сенсоры */}
          <motion.div
            className="absolute top-[28%] right-1 w-3 h-14 rounded-lg flex flex-col items-center justify-center gap-1 overflow-hidden"
            style={{
              background: 'linear-gradient(180deg, #1e293b 0%, #0f172a 100%)',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1), 0 2px 8px rgba(0,0,0,0.3)',
            }}
            animate={{ boxShadow: ['0 2px 8px rgba(0,0,0,0.3)', '0 2px 14px rgba(242,123,32,0.2)', '0 2px 8px rgba(0,0,0,0.3)'] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <motion.div className="w-1.5 h-1 rounded-full bg-emerald-400/90" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 1.2, repeat: Infinity }} />
            <div className="text-[6px] font-mono text-emerald-400/95 leading-tight tabular-nums">
              <motion.span animate={{ opacity: [1, 0.7, 1] }} transition={{ duration: 2, repeat: Infinity }}>-18</motion.span>
            </div>
            <motion.div className="w-1.5 h-0.5 rounded bg-accent/90" animate={{ opacity: [0.6, 1, 0.6], boxShadow: ['0 0 4px rgba(242,123,32,0.3)', '0 0 8px rgba(242,123,32,0.5)', '0 0 4px rgba(242,123,32,0.3)'] }} transition={{ duration: 1.5, repeat: Infinity }} />
            <motion.div className="w-1 h-1 rounded-full bg-slate-500" animate={{ opacity: [0.3, 0.9, 0.3] }} transition={{ duration: 2.2, repeat: Infinity, delay: 0.5 }} />
          </motion.div>

          <div
            className="absolute top-[58%] right-0.5 w-2 h-8 rounded-md"
            style={{ background: 'linear-gradient(180deg, #F27B20 0%, #E06A10 100%)', boxShadow: '0 1px 4px rgba(242,123,32,0.5)' }}
          />
        </div>

        {/* Лёгкое облачко «пара» — свежесть */}
        <motion.div
          className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-6 rounded-full bg-white/20 blur-md pointer-events-none"
          animate={{ y: [0, -4, 0], opacity: [0.2, 0.35, 0.2] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />

        <span className="text-white/60 text-[10px] mt-3 font-semibold tracking-widest uppercase">Ремонт</span>
      </motion.div>
    </div>
  );
}
