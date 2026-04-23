import { ArrowUpRight } from 'lucide-react'
import FadeUp from '@/components/motion/FadeUp'
import { publications } from '@/lib/content'

export default function Publications() {
  return (
    <section id="publications" className="bg-bg-light border-t border-stone-200 py-20 px-6 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <FadeUp>
          <p className="text-sm text-text-muted mb-8">Research</p>
        </FadeUp>
        {publications.map((pub, i) => (
          <FadeUp key={i} delay={i * 0.07}>
            <a
              href={pub.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start justify-between gap-8 border border-stone-200 px-7 py-6 hover:border-stone-400 hover:bg-white transition-all duration-200"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-2.5">
                  <span className="text-xs text-accent-primary font-medium">{pub.conference}</span>
                  <span className="text-xs text-text-muted">{pub.publisher} · {pub.year}</span>
                </div>
                <h3 className="text-sm font-semibold text-stone-900 leading-snug mb-2 group-hover:text-accent-primary transition-colors duration-200">
                  {pub.title}
                </h3>
                <p className="text-xs text-text-muted leading-relaxed">{pub.abstract}</p>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-text-muted group-hover:text-stone-900 shrink-0 mt-0.5 transition-colors duration-200" />
            </a>
          </FadeUp>
        ))}
      </div>
    </section>
  )
}
