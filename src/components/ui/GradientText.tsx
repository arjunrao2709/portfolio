import { cn } from '@/lib/cn'

interface GradientTextProps {
  children: React.ReactNode
  className?: string
}

export default function GradientText({ children, className }: GradientTextProps) {
  return (
    <span
      className={cn(
        'bg-gradient-to-r from-accent-bright to-accent-primary bg-clip-text text-transparent',
        className
      )}
    >
      {children}
    </span>
  )
}
