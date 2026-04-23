'use client'

import { motion } from 'framer-motion'
import { Link, X, Globe, ArrowUpRight } from 'lucide-react'
import FadeUp from '@/components/motion/FadeUp'

const socials = [
  { icon: Link, label: 'LinkedIn', href: '#' },
  { icon: X, label: 'Twitter / X', href: '#' },
  { icon: Globe, label: 'Dribbble', href: '#' },
]

export default function Contact() {
  return (
    <section id="contact" className="bg-bg-dark border-t border-white/[0.06] py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <FadeUp>
          <div className="flex items-center gap-2 mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-primary animate-pulse-dot" />
            <span className="text-xs text-text-muted">Available for new work</span>
          </div>
        </FadeUp>

        <FadeUp delay={0.05}>
          <h2 className="text-3xl md:text-5xl font-semibold text-white leading-tight mb-4">
            Let&apos;s build something<br />together.
          </h2>
        </FadeUp>

        <FadeUp delay={0.1}>
          <p className="text-sm text-text-muted max-w-sm leading-relaxed mb-10">
            Open to advisory, fractional design leadership, and select consulting engagements.
          </p>
        </FadeUp>

        <FadeUp delay={0.15}>
          <a
            href="mailto:hello@arjunrao.design"
            className="group inline-flex items-center gap-2 text-lg font-medium text-white hover:text-accent-primary transition-colors duration-200 mb-10"
          >
            hello@arjunrao.design
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </a>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="flex items-center gap-2">
            {socials.map(({ icon: Icon, label, href }) => (
              <motion.a
                key={label}
                href={href}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.1 }}
                aria-label={label}
                className="w-9 h-9 border border-white/10 flex items-center justify-center text-text-muted hover:text-white hover:border-white/30 transition-colors duration-200"
              >
                <Icon className="w-3.5 h-3.5" />
              </motion.a>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
