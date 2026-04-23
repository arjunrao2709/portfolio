import FadeUp from '@/components/motion/FadeUp'
import { philosophyItems } from '@/lib/content'

export default function Philosophy() {
  return (
    <section id="philosophy" className="bg-warm border-t border-border py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto">

        <FadeUp>
          <div className="flex items-center gap-3 mb-16">
            <span className="w-6 h-px bg-accent" />
            <h2 className="text-xs text-ink-3 tracking-widest uppercase">Design Philosophy</h2>
          </div>
        </FadeUp>

        <div className="divide-y divide-border">
          {philosophyItems.map((item, i) => (
            <FadeUp key={item.number} delay={i * 0.07}>
              <div className="grid grid-cols-[56px_1fr] md:grid-cols-[80px_280px_1fr] gap-6 md:gap-12 py-10">
                <div className="font-serif text-4xl md:text-5xl font-bold text-accent leading-none select-none">
                  {item.number}
                </div>
                <h3 className="font-serif text-xl md:text-2xl font-bold text-ink leading-snug">
                  {item.headline}
                </h3>
                <p className="text-sm text-ink-2 leading-relaxed col-span-2 md:col-span-1">
                  {item.body}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>

      </div>
    </section>
  )
}
