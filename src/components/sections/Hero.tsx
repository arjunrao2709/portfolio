'use client'

import { motion } from 'framer-motion'
import MagneticButton from '@/components/motion/MagneticButton'

export default function Hero() {
  function scrollTo(href: string) {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen bg-white flex flex-col justify-center px-6 md:px-16 lg:px-24 pt-20 pb-16">
      <div className="max-w-5xl w-full">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="text-xs text-text-muted tracking-widest uppercase mb-10"
        >
          Design Leader · Strategist · Builder
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl font-light text-stone-900 leading-[1.05] tracking-tight mb-8"
        >
          Arjun Rao is a design leader
          <br />
          with the{' '}
          <span className="font-serif italic text-accent-primary">vision</span>
          {' '}and{' '}
          <span className="font-serif italic text-accent-primary">conviction</span>
          <br />
          to build products that{' '}
          <span className="font-serif italic text-accent-primary">matter.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="text-sm text-text-muted max-w-md leading-relaxed mb-10"
        >
          10+ years leading design across enterprise and startup —
          building teams, products, and the systems that make both great.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="flex flex-wrap gap-3"
        >
          <MagneticButton>
            <button
              onClick={() => scrollTo('#projects')}
              className="px-6 py-2.5 bg-stone-900 text-white text-sm font-medium hover:bg-accent-primary transition-colors duration-200"
            >
              See my work
            </button>
          </MagneticButton>
          <MagneticButton>
            <button
              onClick={() => scrollTo('#contact')}
              className="px-6 py-2.5 border border-stone-200 text-stone-900 text-sm font-medium hover:border-stone-400 transition-colors duration-200"
            >
              Get in touch
            </button>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  )
}
