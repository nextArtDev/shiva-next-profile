import Image from 'next/image'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Booking from './components/booking'
import FeaturedIn from './components/FeaturedIn'
import Projects from './components/gallery/Projects'
import Gallery from './gallery/Gallery'
// import Services from './components/services/Services'
import Card from './components/Card'
import Diseases from './components/diseases/Diseases'

export default function Home() {
  return (
    <>
      <main
        className="font-farsi flex flex-col
      bg-page-gradient text-primary-text "
      >
        {/* <Navbar /> */}
        <Hero />
        <Diseases />
        <Booking />
        {/* <Services /> */}
        <Gallery />
        {/* <Projects /> */}
        {/* <Card /> */}
        <FeaturedIn />
      </main>
    </>
  )
}
