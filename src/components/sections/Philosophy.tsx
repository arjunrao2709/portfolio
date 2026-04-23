import FadeUp from '@/components/motion/FadeUp'
import StaggerContainer from '@/components/motion/StaggerContainer'
import PhilosophyCard from '@/components/ui/PhilosophyCard'
import { philosophyItems } from '@/lib/content'

export default function Philosophy() {
  return (
    <section id="philosophy" className="bg-bg-dark border-t border-white/5 py-24 px-6 md:px-10 relative overflow-hidden">
      {/* Large decorative bg text */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 font-display font-extrabold text-[20rem] text-white/[0.02] leading-none pointer-events-none select-none -ml-8">
        DESIGN
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left sticky column */}
          <FadeUp>
            <div className="lg:sticky lg:top-24">
              <p className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-accent-primary mb-6">
                How I Think
              </p>
              <h2 className="font-display font-bold text-5xl md:text-6xl text-text-primary leading-tight mb-8">
                Design
                <br />
                Philosophy
              </h2>
              <p className="font-body text-text-muted text-lg leading-relaxed max-w-sm">
                These aren&apos;t mantras — they&apos;re hard-won convictions from a decade of shipping products and leading teams.
              </p>

              {/* Decorative accent line */}
              <div className="mt-12 flex items-center gap-4">
                <div className="w-12 h-[3px] bg-accent-primary rounded-full" />
                <div className="w-4 h-[3px] bg-accent-bright/50 rounded-full" />
                <div className="w-2 h-[3px] bg-accent-primary/30 rounded-full" />
              </div>
            </div>
          </FadeUp>

          {/* Right scrolling cards */}
          <StaggerContainer className="divide-y-0">
            {philosophyItems.map((item) => (
              <PhilosophyCard key={item.number} item={item} />
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
}
