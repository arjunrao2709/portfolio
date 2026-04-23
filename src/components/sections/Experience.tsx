import FadeUp from '@/components/motion/FadeUp'
import { experience } from '@/lib/content'

export default function Experience() {
  return (
    <section id="experience" className="border-t border-border py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto">

        <FadeUp>
          <div className="flex items-center gap-3 mb-16">
            <span className="w-6 h-px bg-accent" />
            <h2 className="text-xs text-ink-3 tracking-widest uppercase">Experience</h2>
          </div>
        </FadeUp>

        <div>
          {experience.map((item, i) => (
            <FadeUp key={item.company} delay={i * 0.05}>
              <div className="flex items-baseline justify-between py-6 border-b border-border group">
                <div className="flex items-center gap-4">
                  <span className="font-serif text-xl md:text-2xl font-bold text-ink group-hover:text-accent transition-colors duration-200">
                    {item.company}
                  </span>
                  {item.current && (
                    <span className="text-xs font-semibold text-accent bg-accent-light px-2 py-0.5 tracking-wide">
                      Current
                    </span>
                  )}
                </div>
                <span className="text-sm text-ink-3 tabular-nums shrink-0 ml-6">
                  {item.startDate} – {item.endDate}
                </span>
              </div>
            </FadeUp>
          ))}
        </div>

      </div>
    </section>
  )
}
