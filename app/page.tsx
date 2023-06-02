import Image from 'next/image'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Booking from './components/booking'
import FeaturedIn from './components/FeaturedIn'
import Projects from './components/gallery/Projects'

export default function Home() {
  return (
    <>
      <main
        className="font-farsi 
      bg-page-gradient text-primary-text "
      >
        {/* <Navbar /> */}
        <Hero />
        <Booking />
        <FeaturedIn />
        <Projects />
      </main>
    </>
  )
}
