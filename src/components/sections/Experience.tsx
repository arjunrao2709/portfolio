'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { experience } from '@/lib/content'

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" className="border-t border-border py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto">

        <div className="flex items-center gap-3 mb-20">
          <span className="w-6 h-px bg-accent" />
          <h2 className="text-xs text-ink-3 tracking-widest uppercase">Experience</h2>
        </div>

        {/* Desktop timeline */}
        <div ref={ref} className="hidden md:block relative">

          {/* Static base line */}
          <div className="absolute left-0 right-0 h-px bg-border" style={{ top: '50%' }} />

          {/* Animated accent line sweeping left to right */}
          <motion.div
            className="absolute left-0 right-0 h-px bg-accent"
            style={{ top: '50%', transformOrigin: 'left center' }}
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          />

          {/* Grid of items */}
          <div
            className="grid"
            style={{ gridTemplateColumns: `repeat(${experience.length}, 1fr)` }}
          >
            {experience.map((item, i) => {
              const above = i % 2 === 0
              const dim = !item.current
              return (
                <div key={item.company} className="flex flex-col items-center">

                  {/* Top slot */}
                  <div className="h-32 flex flex-col justify-end pb-5 px-2 text-center">
                    {above && (
                      <motion.div
                        initial={{ opacity: 0, y: -16 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: i * 0.1 + 0.5, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <p className={`font-serif text-sm font-bold leading-tight ${dim ? 'text-ink-3' : 'text-ink'}`}>{item.company}</p>
                        <p className="text-xs text-ink-3 mt-1.5 tabular-nums leading-snug opacity-60">
                          {item.startDate} – {item.endDate}
                        </p>
                        {item.current && (
                          <span className="inline-block text-xs font-semibold text-accent mt-1">Current</span>
                        )}
                      </motion.div>
                    )}
                  </div>

                  {/* Dot on the line */}
                  <motion.div
                    className={`relative z-10 w-2.5 h-2.5 rounded-full shrink-0 ${dim ? 'bg-border-strong' : 'bg-accent'}`}
                    style={{ boxShadow: '0 0 0 3px white' }}
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: i * 0.1 + 1.1, type: 'spring', stiffness: 300, damping: 18 }}
                  />

                  {/* Bottom slot */}
                  <div className="h-32 flex flex-col justify-start pt-5 px-2 text-center">
                    {!above && (
                      <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: i * 0.1 + 0.5, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <p className={`font-serif text-sm font-bold leading-tight ${dim ? 'text-ink-3' : 'text-ink'}`}>{item.company}</p>
                        <p className="text-xs text-ink-3 mt-1.5 tabular-nums leading-snug opacity-60">
                          {item.startDate} – {item.endDate}
                        </p>
                      </motion.div>
                    )}
                  </div>

                </div>
              )
            })}
          </div>
        </div>

        {/* Mobile fallback — simple list */}
        <div className="md:hidden">
          {experience.map((item) => (
            <div key={item.company} className={`flex items-baseline justify-between py-5 border-b border-border ${!item.current ? 'opacity-50' : ''}`}>
              <div className="flex items-center gap-3 flex-wrap">
                <span className="font-serif text-lg font-bold text-ink">{item.company}</span>
                {item.current && (
                  <span className="text-xs font-semibold text-accent bg-accent-light px-2 py-0.5">Current</span>
                )}
              </div>
              <span className="text-xs text-ink-3 tabular-nums shrink-0 ml-4">{item.startDate} – {item.endDate}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
