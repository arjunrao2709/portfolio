import { cn } from '@/lib/cn'

interface BadgeProps {
  label: string
  variant?: 'default' | 'accent' | 'amber'
  className?: string
}

export default function Badge({ label, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-block px-3 py-1 rounded-full text-xs font-body font-semibold uppercase tracking-widest',
        variant === 'default' && 'bg-white/10 text-text-muted border border-white/10',
        variant === 'accent' && 'bg-accent-primary/20 text-accent-bright border border-accent-primary/30',
        variant === 'amber' && 'bg-accent-secondary/20 text-accent-secondary border border-accent-secondary/30',
        className
      )}
    >
      {label}
    </span>
  )
}
