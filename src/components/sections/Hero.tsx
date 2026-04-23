import FadeUp from '@/components/motion/FadeUp'

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 pt-24 pb-20">
      <div className="max-w-5xl mx-auto w-full">

        <FadeUp>
          <div className="flex items-center gap-3 mb-10">
            <span className="w-6 h-px bg-accent" />
            <span className="text-xs text-ink-3 tracking-widest uppercase font-medium">
              Design Leader · Strategist · Builder
            </span>
          </div>
        </FadeUp>

        <FadeUp delay={0.06}>
          <h1 className="font-serif text-[64px] md:text-[96px] lg:text-[112px] font-bold text-ink leading-[0.9] tracking-tight mb-6">
            Arjun Rao
          </h1>
        </FadeUp>

        <div className="w-full h-px bg-border mb-8" />

        <FadeUp delay={0.12}>
          <p className="font-serif text-2xl md:text-[32px] text-ink-2 font-light italic leading-[1.25] mb-10 max-w-2xl">
            Building products and teams<br />
            that shape how people live.
          </p>
        </FadeUp>

        <FadeUp delay={0.18}>
          <p className="text-sm text-ink-3 leading-relaxed max-w-sm mb-10">
            Open to advisory roles, fractional design leadership,
            and select consulting engagements.
          </p>
        </FadeUp>

        <FadeUp delay={0.22}>
          <div className="flex items-center gap-6">
            <a
              href="#projects"
              className="inline-flex items-center bg-accent text-white text-sm font-semibold px-6 py-3.5 hover:bg-accent-dark transition-colors duration-200"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-ink-2 underline underline-offset-4 decoration-border-strong hover:text-ink hover:decoration-ink-2 transition-colors duration-200"
            >
              Get in Touch
            </a>
          </div>
        </FadeUp>

      </div>
    </section>
  )
}
