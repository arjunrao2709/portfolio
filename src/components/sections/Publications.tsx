import { ArrowUpRight } from 'lucide-react'
import FadeUp from '@/components/motion/FadeUp'
import { publications } from '@/lib/content'

export default function Publications() {
  return (
    <section id="publications" className="bg-warm border-t border-border py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto">

        <FadeUp>
          <div className="flex items-center gap-3 mb-16">
            <span className="w-6 h-px bg-accent" />
            <h2 className="text-xs text-ink-3 tracking-widest uppercase">Research</h2>
          </div>
        </FadeUp>

        {publications.map((pub, i) => (
          <FadeUp key={i} delay={i * 0.08}>
            <a
              href={pub.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start justify-between gap-8 py-10 border-b border-border last:border-b-0"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-semibold text-accent tracking-wide">{pub.conference}</span>
                  <span className="text-xs text-ink-3">{pub.publisher} · {pub.year}</span>
                </div>
                <h3 className="font-serif text-xl md:text-2xl font-bold text-ink leading-snug mb-4 group-hover:text-accent transition-colors duration-200">
                  {pub.title}
                </h3>
                <p className="text-sm text-ink-2 leading-relaxed max-w-prose">{pub.abstract}</p>
              </div>
              <ArrowUpRight className="w-4 h-4 text-ink-3 group-hover:text-accent shrink-0 mt-1 transition-colors duration-200" />
            </a>
          </FadeUp>
        ))}

      </div>
    </section>
  )
}
