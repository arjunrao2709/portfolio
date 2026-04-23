import { ArrowUpRight } from 'lucide-react'
import FadeUp from '@/components/motion/FadeUp'
import { publications } from '@/lib/content'

export default function Publications() {
  return (
    <section id="publications" className="bg-bg-dark border-t border-white/8 py-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <FadeUp>
          <p className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-accent-primary mb-4">
            Research
          </p>
          <h2 className="font-display font-bold text-5xl md:text-6xl text-white mb-16">
            Published Work
          </h2>
        </FadeUp>

        {publications.map((pub, i) => (
          <FadeUp key={i} delay={i * 0.1}>
            <a
              href={pub.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block border border-white/8 p-8 md:p-10 hover:border-white/20 transition-colors duration-200"
            >
              <div className="flex items-start justify-between gap-8">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-5">
                    <span className="font-body text-xs font-semibold uppercase tracking-widest text-accent-primary">
                      {pub.conference}
                    </span>
                    <span className="font-body text-xs text-text-muted">{pub.publisher} · {pub.year}</span>
                  </div>

                  <h3 className="font-display font-bold text-xl md:text-2xl text-white leading-snug mb-5 group-hover:text-accent-primary transition-colors duration-200">
                    {pub.title}
                  </h3>

                  <p className="font-body text-text-muted leading-relaxed max-w-3xl">
                    {pub.abstract}
                  </p>
                </div>

                <ArrowUpRight className="w-5 h-5 text-text-muted group-hover:text-accent-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0 mt-1" />
              </div>
            </a>
          </FadeUp>
        ))}
      </div>
    </section>
  )
}
