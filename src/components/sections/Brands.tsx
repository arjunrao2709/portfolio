import FadeUp from '@/components/motion/FadeUp'
import StaggerContainer from '@/components/motion/StaggerContainer'
import BrandLogo from '@/components/ui/BrandLogo'
import { brands } from '@/lib/content'

export default function Brands() {
  return (
    <section id="brands" className="bg-bg-light border-t border-black/10 py-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <FadeUp>
          <p className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-black/30 text-center mb-12">
            I&apos;ve designed for teams at
          </p>
        </FadeUp>

        <StaggerContainer
          stagger={0.07}
          className="flex flex-wrap justify-center items-center"
        >
          {brands.map((brand) => (
            <BrandLogo key={brand.name} name={brand.name} />
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
