import { CheckCircle } from 'lucide-react'
import FadeUp from '@/components/motion/FadeUp'
import StaggerContainer from '@/components/motion/StaggerContainer'
import { leadershipStats, leadershipHighlights, leadershipQuote } from '@/lib/content'

export default function Leadership() {
  return (
    <section id="leadership" className="bg-white border-t border-stone-200 py-20 px-6 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-16">
          <FadeUp>
            <div className="lg:sticky lg:top-20">
              <h2 className="text-sm font-semibold text-stone-900 mb-2">Leadership</h2>
              <p className="text-xs text-text-muted leading-relaxed mb-8">Building designers, not just products.</p>
              <div className="flex flex-col gap-5">
                {leadershipStats.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-2xl font-semibold text-accent-primary">{stat.value}</div>
                    <div className="text-xs text-text-muted mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>

          <div>
            <StaggerContainer className="space-y-3 mb-10">
              {leadershipHighlights.map((h) => (
                <div key={h} className="flex items-start gap-3">
                  <CheckCircle className="w-3.5 h-3.5 text-accent-primary shrink-0 mt-0.5" />
                  <p className="text-xs text-text-muted leading-relaxed">{h}</p>
                </div>
              ))}
            </StaggerContainer>

            <FadeUp delay={0.1}>
              <blockquote className="border-l border-accent-primary pl-4">
                <p className="text-sm text-stone-600 leading-relaxed italic mb-2">
                  &ldquo;{leadershipQuote.text}&rdquo;
                </p>
                <cite className="text-xs text-text-muted not-italic">— {leadershipQuote.attribution}</cite>
              </blockquote>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  )
}
