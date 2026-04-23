import FadeUp from '@/components/motion/FadeUp'
import { leadershipStats, leadershipHighlights, leadershipQuote } from '@/lib/content'

export default function Leadership() {
  return (
    <section id="leadership" className="border-t border-border py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto">

        <FadeUp>
          <div className="flex items-center gap-3 mb-16">
            <span className="w-6 h-px bg-accent" />
            <h2 className="text-xs text-ink-3 tracking-widest uppercase">Leadership</h2>
          </div>
        </FadeUp>

        {/* Stats row */}
        <FadeUp delay={0.06}>
          <div className="grid grid-cols-3 gap-6 md:gap-12 mb-20 pb-20 border-b border-border">
            {leadershipStats.map((stat) => (
              <div key={stat.label}>
                <div className="font-serif text-5xl md:text-7xl font-bold text-ink leading-none mb-3">
                  {stat.value}
                </div>
                <div className="text-xs text-ink-3 leading-relaxed">{stat.label}</div>
              </div>
            ))}
          </div>
        </FadeUp>

        {/* Narrative + quote */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          <FadeUp delay={0.1}>
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-ink leading-snug mb-8">
              Building designers,<br />not just products.
            </h3>
            <div className="space-y-5">
              {leadershipHighlights.map((h) => (
                <div key={h} className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
                  <p className="text-sm text-ink-2 leading-relaxed">{h}</p>
                </div>
              ))}
            </div>
          </FadeUp>

          <FadeUp delay={0.15}>
            <blockquote className="border-l-2 border-accent pl-6 h-full flex flex-col justify-center">
              <p className="font-serif text-lg md:text-xl text-ink italic leading-relaxed mb-5">
                &ldquo;{leadershipQuote.text}&rdquo;
              </p>
            </blockquote>
          </FadeUp>
        </div>

      </div>
    </section>
  )
}
