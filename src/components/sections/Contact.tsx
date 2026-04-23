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
    <section id="contact" className="bg-bg-dark py-24 md:py-36 px-6 md:px-10 relative overflow-hidden border-t border-white/5">
      {/* Background decorative circle */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-accent-primary/8 blur-[120px] pointer-events-none -translate-y-1/3 translate-x-1/3" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Availability badge */}
        <FadeUp>
          <div className="flex items-center gap-2 mb-12">
            <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse-dot" />
            <span className="font-body text-sm text-text-muted uppercase tracking-widest">
              Open to new conversations
            </span>
          </div>
        </FadeUp>

        {/* Giant headline */}
        <FadeUp delay={0.1}>
          <h2 className="font-display font-extrabold text-[clamp(2.5rem,8vw,7rem)] leading-[0.9] tracking-tight text-text-primary mb-8 max-w-4xl">
            Let&apos;s build something<br />remarkable.
          </h2>
        </FadeUp>

        {/* Sub-line */}
        <FadeUp delay={0.2}>
          <p className="font-body text-text-muted text-lg md:text-xl max-w-lg leading-relaxed mb-14">
            Available for advisory, fractional design leadership, and select consulting engagements.
          </p>
        </FadeUp>

        {/* Email link */}
        <FadeUp delay={0.3}>
          <a
            href="mailto:hello@arjunrao.design"
            className="group inline-flex items-center gap-4 font-display font-bold text-2xl md:text-4xl text-text-primary hover:text-accent-bright transition-colors duration-300 mb-16"
          >
            <span className="relative">
              hello@arjunrao.design
              <span className="absolute -bottom-1 left-0 h-[3px] w-0 bg-accent-primary group-hover:w-full transition-all duration-500 rounded-full" />
            </span>
            <ArrowUpRight className="w-8 h-8 text-accent-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </a>
        </FadeUp>

        {/* Social links */}
        <FadeUp delay={0.4}>
          <div className="flex items-center gap-4">
            {socials.map(({ icon: Icon, label, href }) => (
              <motion.a
                key={label}
                href={href}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
                aria-label={label}
                className="w-12 h-12 rounded-full border border-white/15 flex items-center justify-center text-text-muted hover:text-accent-bright hover:border-accent-primary/50 transition-colors duration-300"
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
