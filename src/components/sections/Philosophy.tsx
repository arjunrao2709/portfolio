import FadeUp from '@/components/motion/FadeUp'
import StaggerContainer from '@/components/motion/StaggerContainer'
import PhilosophyCard from '@/components/ui/PhilosophyCard'
import { philosophyItems } from '@/lib/content'

export default function Philosophy() {
  return (
    <section id="philosophy" className="bg-bg-dark border-t border-white/[0.06] py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-16">
          <FadeUp>
            <div className="lg:sticky lg:top-24">
              <h2 className="text-2xl font-semibold text-white mb-3">Design Philosophy</h2>
              <p className="text-sm text-text-muted leading-relaxed">
                Hard-won convictions from a decade of shipping products and leading teams.
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
