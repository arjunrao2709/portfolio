import FadeUp from '@/components/motion/FadeUp'
import StaggerContainer from '@/components/motion/StaggerContainer'
import PhilosophyCard from '@/components/ui/PhilosophyCard'
import { philosophyItems } from '@/lib/content'

export default function Philosophy() {
  return (
    <section id="philosophy" className="bg-bg-dark border-t border-white/8 py-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <FadeUp>
            <div className="lg:sticky lg:top-24">
              <p className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-accent-primary mb-6">
                How I Think
              </p>
              <h2 className="font-display font-bold text-5xl md:text-6xl text-white leading-tight mb-8">
                Design<br />Philosophy
              </h2>
              <p className="font-body text-text-muted text-lg leading-relaxed max-w-sm">
                These aren&apos;t mantras — they&apos;re hard-won convictions from a decade of shipping products and leading teams.
              </p>
            </div>
          </FadeUp>

          <StaggerContainer>
            {philosophyItems.map((item) => (
              <PhilosophyCard key={item.number} item={item} />
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
}
