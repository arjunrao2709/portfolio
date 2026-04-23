import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import Brands from '@/components/sections/Brands'
import Projects from '@/components/sections/Projects'
import Philosophy from '@/components/sections/Philosophy'
import Leadership from '@/components/sections/Leadership'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Brands />
        <Projects />
        <Philosophy />
        <Leadership />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
