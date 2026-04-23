'use client'

import { motion } from 'framer-motion'
import MagneticButton from '@/components/motion/MagneticButton'

export default function Hero() {
  function scrollTo(href: string) {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen bg-bg-dark flex flex-col justify-center px-6 md:px-16 lg:px-24 pt-20 pb-16">
      <div className="max-w-5xl w-full">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-xs text-text-muted tracking-widest uppercase mb-8"
        >
          Design Leader · Strategist · Builder
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-6xl font-semibold text-white leading-[1.1] tracking-tight mb-6"
        >
          Design that moves
          <br />
          people and{' '}
          <span className="text-accent-primary">products forward.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-base text-text-muted max-w-md leading-relaxed mb-10"
        >
          10+ years leading design across enterprise and startup —
          building teams, products, and the systems that make both great.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.45 }}
          className="flex flex-wrap gap-3"
        >
          <MagneticButton>
            <button
              onClick={() => scrollTo('#projects')}
              className="px-6 py-2.5 bg-white text-black text-sm font-medium hover:bg-accent-primary transition-colors duration-200"
            >
              See my work
            </button>
          </MagneticButton>

          <MagneticButton>
            <button
              onClick={() => scrollTo('#contact')}
              className="px-6 py-2.5 border border-white/15 text-white text-sm font-medium hover:border-white/40 transition-colors duration-200"
            >
              Get in touch
            </button>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  )
}
