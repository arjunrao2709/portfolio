import Image from 'next/image'
import FadeUp from '@/components/motion/FadeUp'

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 pt-24 pb-20">
      <div className="max-w-5xl mx-auto w-full">

        <div className="grid grid-cols-1 md:grid-cols-[1fr_320px] lg:grid-cols-[1fr_360px] gap-12 md:gap-16 items-end">

          {/* Left — text */}
          <div>
            <FadeUp>
              <div className="flex items-center gap-3 mb-10">
                <span className="w-6 h-px bg-accent" />
                <span className="text-xs text-ink-3 tracking-widest uppercase font-medium">
                  Design Leader · Strategist · Builder
                </span>
              </div>
            </FadeUp>

            <FadeUp delay={0.06}>
              <h1 className="font-serif text-[64px] md:text-[80px] lg:text-[96px] font-bold text-ink leading-[0.9] tracking-tight mb-6">
                Arjun Rao
              </h1>
            </FadeUp>

            <div className="w-full h-px bg-border mb-8" />

            <FadeUp delay={0.12}>
              <p className="font-serif text-2xl md:text-[28px] text-ink-2 font-light italic leading-[1.25] mb-10 max-w-xl">
                Building products and teams<br />
                that shape how people live.
              </p>
            </FadeUp>

            <FadeUp delay={0.18}>
              <a
                href="#contact"
                className="text-sm font-medium text-ink-2 underline underline-offset-4 decoration-border-strong hover:text-ink hover:decoration-ink-2 transition-colors duration-200"
              >
                Get in Touch
              </a>
            </FadeUp>
          </div>

          {/* Right — headshot */}
          <FadeUp delay={0.1}>
            <div className="relative w-full aspect-[3/4] overflow-hidden">
              <Image
                src="/headshot.jpg"
                alt="Arjun Rao"
                fill
                priority
                className="object-cover object-top"
                sizes="(max-width: 768px) 80vw, 360px"
              />
            </div>
          </FadeUp>

        </div>
      </div>
    </section>
  )
}
