import { ArrowUpRight } from 'lucide-react'
import FadeUp from '@/components/motion/FadeUp'
import { publications } from '@/lib/content'

export default function Publications() {
  return (
    <section id="publications" className="bg-bg-dark border-t border-white/[0.06] py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <FadeUp>
          <div className="flex items-baseline justify-between mb-12">
            <h2 className="text-2xl font-semibold text-white">Research</h2>
          </div>
        </FadeUp>

        {publications.map((pub, i) => (
          <FadeUp key={i} delay={i * 0.08}>
            <a
              href={pub.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start justify-between gap-8 border border-white/[0.06] px-8 py-7 hover:border-white/15 hover:bg-bg-card transition-all duration-200"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs text-accent-primary font-medium">{pub.conference}</span>
                  <span className="text-xs text-text-muted">{pub.publisher} · {pub.year}</span>
                </div>
                <h3 className="text-base font-medium text-white leading-snug mb-3 group-hover:text-accent-primary transition-colors duration-200">
                  {pub.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">{pub.abstract}</p>
              </div>
              <ArrowUpRight className="w-4 h-4 text-text-muted group-hover:text-white shrink-0 mt-0.5 transition-colors duration-200" />
            </a>
          </FadeUp>
        ))}
      </div>
    </section>
  )
}
