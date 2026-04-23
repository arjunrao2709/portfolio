import { cn } from '@/lib/cn'

interface GradientTextProps {
  children: React.ReactNode
  className?: string
}

export default function GradientText({ children, className }: GradientTextProps) {
  return (
    <span className={cn('text-accent-primary', className)}>
      {children}
    </span>
  )
}
