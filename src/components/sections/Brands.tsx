import FadeUp from '@/components/motion/FadeUp'
import StaggerContainer from '@/components/motion/StaggerContainer'
import BrandLogo from '@/components/ui/BrandLogo'
import { brands } from '@/lib/content'

export default function Brands() {
  return (
    <section id="brands" className="bg-bg-light border-t border-stone-200 py-14 px-6 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <FadeUp>
          <p className="text-xs text-text-muted tracking-widest uppercase mb-8">Previously at</p>
        </FadeUp>
        <StaggerContainer stagger={0.06} className="flex flex-wrap items-center gap-x-10 gap-y-3">
          {brands.map((brand) => (
            <BrandLogo key={brand.name} name={brand.name} />
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
