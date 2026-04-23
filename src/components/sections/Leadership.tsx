import { CheckCircle } from 'lucide-react'
import FadeUp from '@/components/motion/FadeUp'
import StaggerContainer from '@/components/motion/StaggerContainer'
import { leadershipStats, leadershipHighlights, leadershipQuote } from '@/lib/content'

export default function Leadership() {
  return (
    <section id="leadership" className="bg-bg-dark border-t border-white/8 py-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <FadeUp>
          <p className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-accent-primary mb-16">
            Leadership & Mentoring
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Stats */}
          <StaggerContainer className="flex flex-col gap-12">
            {leadershipStats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <span className="font-display font-extrabold text-7xl md:text-8xl leading-none text-accent-primary">
                  {stat.value}
                </span>
                <span className="font-body text-sm font-semibold uppercase tracking-[0.25em] text-text-muted">
                  {stat.label}
                </span>
              </div>
            ))}
          </StaggerContainer>

          <div>
            <FadeUp>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-white leading-tight mb-10">
                Building designers,<br />not just products.
              </h2>
            </FadeUp>

            <StaggerContainer className="space-y-5 mb-12">
              {leadershipHighlights.map((highlight) => (
                <div key={highlight} className="flex items-start gap-4">
                  <CheckCircle className="w-4 h-4 text-accent-primary shrink-0 mt-1" />
                  <p className="font-body text-text-muted leading-relaxed">{highlight}</p>
                </div>
              ))}
            </StaggerContainer>

            <FadeUp delay={0.2}>
              <blockquote className="border-l-2 border-accent-primary pl-6 py-2">
                <p className="font-body text-white text-lg leading-relaxed italic mb-4">
                  &ldquo;{leadershipQuote.text}&rdquo;
                </p>
                <cite className="font-body text-xs text-text-muted uppercase tracking-widest not-italic">
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
