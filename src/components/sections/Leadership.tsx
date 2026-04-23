import { CheckCircle } from 'lucide-react'
import FadeUp from '@/components/motion/FadeUp'
import StaggerContainer from '@/components/motion/StaggerContainer'
import { leadershipStats, leadershipHighlights, leadershipQuote } from '@/lib/content'

export default function Leadership() {
  return (
    <section id="leadership" className="bg-bg-rich py-24 px-6 md:px-10 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <FadeUp>
          <p className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-accent-primary mb-16 text-center md:text-left">
            Leadership & Mentoring
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Stats — intentionally offset upward */}
          <StaggerContainer className="flex flex-col gap-10 lg:-mt-8">
            {leadershipStats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1" >
                <span
                  className="font-display font-extrabold text-7xl md:text-8xl leading-none text-transparent bg-clip-text"
                  style={{ backgroundImage: 'linear-gradient(135deg, #FCD34D, #F59E0B)' }}
                >
                  {stat.value}
                </span>
                <span className="font-body text-sm font-semibold uppercase tracking-[0.25em] text-text-muted">
                  {stat.label}
                </span>
              </div>
            ))}
          </StaggerContainer>

          {/* Right: Content */}
          <div>
            <FadeUp>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-text-primary leading-tight mb-10">
                Building designers,<br />not just products.
              </h2>
            </FadeUp>

            {/* Highlights */}
            <StaggerContainer className="space-y-5 mb-12">
              {leadershipHighlights.map((highlight) => (
                <div key={highlight} className="flex items-start gap-4">
                  <CheckCircle className="w-5 h-5 text-accent-primary shrink-0 mt-0.5" />
                  <p className="font-body text-text-muted leading-relaxed">{highlight}</p>
                </div>
              ))}
            </StaggerContainer>

            {/* Pull quote */}
            <FadeUp delay={0.2}>
              <blockquote className="border-l-4 border-accent-primary pl-8 py-4">
                <div className="font-display font-bold text-6xl text-accent-primary leading-none mb-4 -ml-2">&ldquo;</div>
                <p className="font-body text-text-primary text-lg leading-relaxed italic mb-4">
                  {leadershipQuote.text}
                </p>
                <cite className="font-body text-sm text-text-muted uppercase tracking-widest not-italic">
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
