'use client'

import { ArrowUpRight } from 'lucide-react'
import FadeUp from '@/components/motion/FadeUp'

export default function Contact() {
  return (
    <section id="contact" className="border-t border-border py-24 md:py-32 px-6 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto">

        <FadeUp>
          <div className="flex items-center gap-3 mb-16">
            <span className="w-6 h-px bg-accent" />
            <h2 className="text-xs text-ink-3 tracking-widest uppercase">Contact</h2>
          </div>
        </FadeUp>

        <FadeUp delay={0.06}>
          <p className="font-serif text-[48px] md:text-[72px] lg:text-[88px] font-bold text-ink leading-[0.92] tracking-tight mb-16">
            Let&apos;s make<br />
            something<br />
            <em className="text-accent">remarkable.</em>
          </p>
        </FadeUp>

        <FadeUp delay={0.12}>
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-dot" />
            <span className="text-xs text-ink-3">Available for new work</span>
          </div>
        </FadeUp>

        <FadeUp delay={0.16}>
          <p className="text-sm text-ink-3 max-w-xs leading-relaxed mb-10">
            Open to advisory, fractional design leadership,
            and select consulting engagements.
          </p>
        </FadeUp>

        <FadeUp delay={0.2}>
          <a
            href="mailto:hello@arjunrao.design"
            className="inline-block text-base md:text-lg font-semibold text-ink hover:text-accent transition-colors duration-200 mb-10 underline underline-offset-4 decoration-border-strong hover:decoration-accent"
          >
            hello@arjunrao.design
          </a>
        </FadeUp>

        <FadeUp delay={0.24}>
          <a
            href="https://www.linkedin.com/in/arjunrao2709/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-sm font-medium text-ink-2 hover:text-accent transition-colors duration-200"
          >
            LinkedIn
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </FadeUp>

      </div>
    </section>
  )
}
