import FadeUp from '@/components/motion/FadeUp'
import StaggerContainer from '@/components/motion/StaggerContainer'
import BrandLogo from '@/components/ui/BrandLogo'
import { brands } from '@/lib/content'

export default function Brands() {
  return (
    <section id="brands" className="bg-bg-light py-20 px-6 md:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <FadeUp>
          <p className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-text-dark/40 text-center mb-12">
            I&apos;ve designed for teams at
          </p>
        </FadeUp>

        <StaggerContainer
          stagger={0.08}
          className="flex flex-wrap justify-center items-center gap-2 md:gap-0 -mx-6 md:-mx-0 overflow-visible"
        >
          {brands.map((brand) => (
            <BrandLogo key={brand.name} name={brand.name} />
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
