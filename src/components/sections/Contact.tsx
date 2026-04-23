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
    <section id="contact" className="bg-bg-dark border-t border-white/8 py-24 md:py-36 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Availability badge */}
        <FadeUp>
          <div className="flex items-center gap-2 mb-12">
            <span className="w-2 h-2 rounded-full bg-accent-primary animate-pulse-dot" />
            <span className="font-body text-xs text-text-muted uppercase tracking-widest">
              Open to new conversations
            </span>
          </div>
        </FadeUp>

        {/* Headline */}
        <FadeUp delay={0.1}>
          <h2 className="font-display font-extrabold text-[clamp(2.5rem,8vw,7rem)] leading-[0.9] tracking-tight text-white mb-8 max-w-4xl">
            Let&apos;s build something<br />remarkable.
          </h2>
        </FadeUp>

        {/* Sub-line */}
        <FadeUp delay={0.2}>
          <p className="font-body text-text-muted text-lg max-w-md leading-relaxed mb-14">
            Available for advisory, fractional design leadership, and select consulting engagements.
          </p>
        </FadeUp>

        {/* Email */}
        <FadeUp delay={0.3}>
          <a
            href="mailto:hello@arjunrao.design"
            className="group inline-flex items-center gap-3 font-display font-bold text-2xl md:text-4xl text-white hover:text-accent-primary transition-colors duration-200 mb-16"
          >
            <span className="relative">
              hello@arjunrao.design
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-accent-primary group-hover:w-full transition-all duration-400" />
            </span>
            <ArrowUpRight className="w-7 h-7 text-accent-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </a>
        </FadeUp>

        {/* Socials */}
        <FadeUp delay={0.4}>
          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, label, href }) => (
              <motion.a
                key={label}
                href={href}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.15 }}
                aria-label={label}
                className="w-11 h-11 border border-white/15 flex items-center justify-center text-text-muted hover:text-white hover:border-white/40 transition-colors duration-200"
              >
                <Icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
