'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import GradientText from '@/components/ui/GradientText'
import MagneticButton from '@/components/motion/MagneticButton'

export default function Hero() {
  function scrollTo(href: string) {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen bg-bg-dark flex flex-col justify-center overflow-hidden px-6 md:px-10 lg:px-20 pt-24 pb-16">
      {/* Decorative floating shape */}
      <div className="absolute top-20 right-10 md:right-24 w-48 h-48 md:w-72 md:h-72 rounded-3xl bg-accent-primary/8 animate-float pointer-events-none" />
      <div className="absolute top-32 right-16 md:right-32 w-32 h-32 md:w-48 md:h-48 rounded-2xl border border-accent-primary/20 animate-float pointer-events-none" style={{ animationDelay: '1s' }} />

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent-primary/5 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Overline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-accent-primary mb-8"
        >
          Design Leader · Strategist · Builder
        </motion.p>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-extrabold text-[clamp(3rem,10vw,8rem)] leading-[0.92] tracking-tight text-text-primary mb-6"
        >
          Designing
          <br />
          systems{' '}
          <GradientText>that</GradientText>
          <br />
          <GradientText>move people.</GradientText>
        </motion.h1>

        {/* Tagline — intentionally offset for asymmetry */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="font-body text-lg md:text-xl text-text-muted max-w-xl leading-relaxed mb-12 md:ml-24"
        >
          10+ years leading design across enterprise, startup, and everything in between —
          building teams, products, and the systems that make both great.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap gap-4 md:ml-24"
        >
          <MagneticButton>
            <button
              onClick={() => scrollTo('#projects')}
              className="px-8 py-4 rounded-full bg-accent-primary text-white font-body font-semibold text-sm uppercase tracking-widest hover:bg-accent-bright transition-colors duration-300"
            >
              See My Work
            </button>
          </MagneticButton>

          <MagneticButton>
            <button
              onClick={() => scrollTo('#contact')}
              className="px-8 py-4 rounded-full border border-accent-primary/50 text-text-primary font-body font-semibold text-sm uppercase tracking-widest hover:border-accent-primary hover:text-accent-bright transition-all duration-300"
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
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-body text-xs text-text-muted uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-5 h-5 text-text-muted" />
        </motion.div>
      </motion.div>
    </section>
  )
}
