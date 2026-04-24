import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import Brands from '@/components/sections/Brands'
import Projects from '@/components/sections/Projects'
import Philosophy from '@/components/sections/Philosophy'
import Leadership from '@/components/sections/Leadership'
import Experience from '@/components/sections/Experience'
import Publications from '@/components/sections/Publications'
import Hobbies from '@/components/sections/Hobbies'
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
        <Experience />
        <Publications />
        <Hobbies />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
