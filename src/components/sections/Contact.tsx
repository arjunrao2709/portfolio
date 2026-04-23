'use client'

import { motion } from 'framer-motion'
import { Link, X, Globe } from 'lucide-react'
import FadeUp from '@/components/motion/FadeUp'

const socials = [
  { icon: Link, label: 'LinkedIn', href: '#' },
  { icon: X, label: 'Twitter / X', href: '#' },
  { icon: Globe, label: 'Dribbble', href: '#' },
]

export default function Contact() {
  return (
    <section id="contact" className="bg-white border-t border-stone-200 py-24 md:py-36 px-6 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto">
        {/* Editorial headline */}
        <FadeUp>
          <h2 className="text-5xl md:text-7xl font-light text-stone-900 leading-[1.05] tracking-tight mb-12">
            Let&apos;s make something{' '}
            <span className="font-serif italic text-accent-primary">remarkable.</span>
          </h2>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="flex items-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-primary animate-pulse-dot" />
            <span className="text-xs text-text-muted">Available for new work</span>
          </div>
        </FadeUp>

        <FadeUp delay={0.15}>
          <p className="text-xs text-text-muted max-w-xs leading-relaxed mb-8">
            Open to advisory, fractional design leadership, and select consulting engagements.
          </p>
        </FadeUp>

        <FadeUp delay={0.2}>
          <a
            href="mailto:hello@arjunrao.design"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-stone-900 hover:text-accent-primary transition-colors duration-200 mb-10 underline underline-offset-4 decoration-stone-300 hover:decoration-accent-primary"
          >
            hello@arjunrao.design
          </a>
        </FadeUp>

        <FadeUp delay={0.25}>
          <div className="flex items-center gap-2">
            {socials.map(({ icon: Icon, label, href }) => (
              <motion.a
                key={label}
                href={href}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.1 }}
                aria-label={label}
                className="w-8 h-8 border border-stone-200 flex items-center justify-center text-text-muted hover:text-stone-900 hover:border-stone-400 transition-colors duration-200"
              >
                <Icon className="w-3 h-3" />
              </motion.a>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
