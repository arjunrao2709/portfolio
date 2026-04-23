import FadeUp from '@/components/motion/FadeUp'
import StaggerContainer from '@/components/motion/StaggerContainer'
import BrandLogo from '@/components/ui/BrandLogo'
import { brands } from '@/lib/content'

export default function Brands() {
  return (
    <section id="brands" className="bg-bg-light border-t border-black/8 py-16 px-6 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <FadeUp>
          <p className="text-xs text-black/35 tracking-widest uppercase mb-10">
            Previously at
          </p>
        </FadeUp>
        <StaggerContainer stagger={0.06} className="flex flex-wrap items-center gap-x-10 gap-y-4">
          {brands.map((brand) => (
            <BrandLogo key={brand.name} name={brand.name} />
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
