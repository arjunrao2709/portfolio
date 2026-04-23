'use client'

import { brands } from '@/lib/content'

export default function Brands() {
  const doubled = [...brands, ...brands, ...brands]

  return (
    <section id="brands" className="bg-warm border-t border-border py-14 overflow-hidden">
      <p className="text-xs text-ink-3 tracking-widest uppercase text-center mb-8 px-6">
        Previously at
      </p>
      <div className="flex items-center">
        <div className="flex items-center gap-20 animate-marquee whitespace-nowrap">
          {doubled.map((brand, i) => (
            <span
              key={i}
              className="text-sm font-semibold text-ink-2 hover:text-ink transition-colors duration-300 shrink-0 select-none tracking-wide"
            >
              {brand.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
