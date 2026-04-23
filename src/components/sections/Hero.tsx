'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import MagneticButton from '@/components/motion/MagneticButton'

export default function Hero() {
  function scrollTo(href: string) {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen bg-bg-dark flex flex-col justify-center px-6 md:px-10 lg:px-20 pt-24 pb-16">
      <div className="max-w-7xl mx-auto w-full">
        {/* Overline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-accent-primary mb-10"
        >
          Design Leader · Strategist · Builder
        </motion.p>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-extrabold text-[clamp(3rem,10vw,8rem)] leading-[0.92] tracking-tight text-white mb-8"
        >
          Designing
          <br />
          systems that
          <br />
          <span className="text-accent-primary">move people.</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-body text-lg md:text-xl text-text-muted max-w-lg leading-relaxed mb-12"
        >
          10+ years leading design across enterprise, startup, and everything in between —
          building teams, products, and the systems that make both great.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="flex flex-wrap gap-4"
        >
          <MagneticButton>
            <button
              onClick={() => scrollTo('#projects')}
              className="px-8 py-4 bg-accent-primary text-black font-body font-semibold text-sm uppercase tracking-widest hover:bg-accent-bright transition-colors duration-200"
            >
              See My Work
            </button>
          </MagneticButton>

          <MagneticButton>
            <button
              onClick={() => scrollTo('#contact')}
              className="px-8 py-4 border border-white/20 text-white font-body font-semibold text-sm uppercase tracking-widest hover:border-white/60 transition-colors duration-200"
            >
              Get In Touch
            </button>
          </MagneticButton>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-5 h-5 text-text-muted" />
        </motion.div>
      </motion.div>
    </section>
  )
}
