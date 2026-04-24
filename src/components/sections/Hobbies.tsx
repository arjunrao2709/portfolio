'use client'

import FadeUp from '@/components/motion/FadeUp'

const hobbies = [
  {
    emoji: '🍳',
    title: 'Cooking',
    body: 'Everything from south Indian cuisine to Italian desserts and fermentation. The kitchen is my lab.',
  },
  {
    emoji: '🎧',
    title: 'DJ',
    body: 'Hobbyist DJ under the moniker Sideroom, playing an eclectic mix of world music. It\'s about creating a feeling.',
  },
  {
    emoji: '🤿',
    title: 'Certified scuba diver',
    body: 'I love being in and around nature — water especially. I\'m the one who will jump into freezing cold water. Why not?',
  },
]

export default function Hobbies() {
  return (
    <section id="hobbies" className="bg-warm border-t border-border py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto">

        <FadeUp>
          <div className="flex items-center gap-3 mb-16">
            <span className="w-6 h-px bg-accent" />
            <h2 className="text-xs text-ink-3 tracking-widest uppercase">Outside Work</h2>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {hobbies.map((hobby, i) => (
            <FadeUp key={hobby.title} delay={i * 0.08}>
              <div className="bg-canvas rounded-2xl p-8 md:p-10 h-full border border-border">
                <span className="text-3xl mb-6 block" role="img" aria-label={hobby.title}>
                  {hobby.emoji}
                </span>
                <h3 className="font-serif text-xl font-bold text-ink mb-3 leading-snug">
                  {hobby.title}
                </h3>
                <p className="text-sm text-ink-2 leading-relaxed">
                  {hobby.body}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>

      </div>
    </section>
  )
}
