import { cn } from '@/lib/cn'

interface BadgeProps {
  label: string
  className?: string
}

export default function Badge({ label, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-block px-2 py-0.5 text-xs font-body font-semibold uppercase tracking-widest border border-white/10 text-text-muted',
        className
      )}
    >
      {label}
    </span>
  )
}
