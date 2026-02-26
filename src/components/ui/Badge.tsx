import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'accent';
  className?: string;
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-full',
        variant === 'default' && 'bg-primary/10 text-primary',
        variant === 'accent' && 'bg-accent/10 text-accent',
        className,
      )}
    >
      {children}
    </span>
  );
}
