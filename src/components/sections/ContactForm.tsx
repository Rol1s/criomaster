'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/Button';
import { CheckCircle } from 'lucide-react';

const schema = z.object({
  name: z.string().min(2, 'Введите имя'),
  phone: z.string().min(10, 'Введите корректный номер телефона'),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

interface ContactFormProps {
  title?: string;
  compact?: boolean;
}

export function ContactForm({ title = 'Оставить заявку', compact = false }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  function onSubmit(data: FormData) {
    console.log('Form submitted:', data);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="text-center py-8">
        <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-text mb-2">Заявка отправлена</h3>
        <p className="text-muted">Мы перезвоним вам в течение 5 минут</p>
      </div>
    );
  }

  return (
    <div>
      {title && <h3 className="text-xl font-semibold text-text mb-6">{title}</h3>}
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div>
          <input
            {...register('name')}
            placeholder="Ваше имя"
            className="w-full px-4 py-3 min-h-[48px] text-base sm:text-sm bg-bg border border-border rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors touch-manipulation"
          />
          {errors.name && <span className="text-red-500 text-xs mt-1">{errors.name.message}</span>}
        </div>
        <div>
          <input
            {...register('phone')}
            placeholder="Телефон"
            type="tel"
            inputMode="tel"
            className="w-full px-4 py-3 min-h-[48px] text-base sm:text-sm bg-bg border border-border rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors touch-manipulation"
          />
          {errors.phone && <span className="text-red-500 text-xs mt-1">{errors.phone.message}</span>}
        </div>
        {!compact && (
          <div>
            <textarea
              {...register('message')}
              placeholder="Опишите проблему (необязательно)"
              rows={3}
              className="w-full px-4 py-3 min-h-[100px] text-base sm:text-sm bg-bg border border-border rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none touch-manipulation"
            />
          </div>
        )}
        <Button type="submit" variant="primary" size="md">
          Отправить заявку
        </Button>
        <p className="text-xs text-muted text-center">
          Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
        </p>
      </form>
    </div>
  );
}
