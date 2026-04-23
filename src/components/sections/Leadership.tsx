import { CheckCircle } from 'lucide-react'
import FadeUp from '@/components/motion/FadeUp'
import StaggerContainer from '@/components/motion/StaggerContainer'
import { leadershipStats, leadershipHighlights, leadershipQuote } from '@/lib/content'

export default function Leadership() {
  return (
    <section id="leadership" className="bg-bg-dark border-t border-white/[0.06] py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-16">
          <FadeUp>
            <div className="lg:sticky lg:top-24">
              <h2 className="text-2xl font-semibold text-white mb-3">Leadership</h2>
              <p className="text-sm text-text-muted leading-relaxed">
                Building designers, not just products.
              </p>
              <div className="mt-8 flex flex-col gap-6">
                {leadershipStats.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-3xl font-semibold text-accent-primary">{stat.value}</div>
                    <div className="text-xs text-text-muted mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>

          <div>
            <StaggerContainer className="space-y-4 mb-12">
              {leadershipHighlights.map((highlight) => (
                <div key={highlight} className="flex items-start gap-3">
                  <CheckCircle className="w-3.5 h-3.5 text-accent-primary shrink-0 mt-0.5" />
                  <p className="text-sm text-text-muted leading-relaxed">{highlight}</p>
                </div>
              ))}
            </StaggerContainer>

            <FadeUp delay={0.1}>
              <blockquote className="border-l border-accent-primary pl-5">
                <p className="text-sm text-white/80 leading-relaxed italic mb-3">
                  &ldquo;{leadershipQuote.text}&rdquo;
                </p>
                <cite className="text-xs text-text-muted not-italic">
                  — {leadershipQuote.attribution}
                </cite>
              </blockquote>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  )
}
