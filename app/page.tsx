<<<<<<< HEAD
import Hero from '@/components/Hero'
import Booking from '@/components/booking'
import FeaturedIn from '@/components/FeaturedIn'
import Gallery from '@/components/Gallery'

import Card from '@/components/Card'
import Diseases from '@/components/diseases/Diseases'
import NewBooking from '@/components/NewBooking'
=======
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
import { LogoTicker } from './components/logo-tricker/LogoTicker'
import Places from './components/Places'
>>>>>>> d5b4bd7c27538e4ec0175902755af3dc0fc8bff5

export default function Home() {
  return (
    <>
      <main
        className="font-farsi flex flex-col
      bg-page-gradient text-primary-text "
      >
        <Hero />
<<<<<<< HEAD
=======
        <LogoTicker />
        <Places />
        <Diseases />
>>>>>>> d5b4bd7c27538e4ec0175902755af3dc0fc8bff5
        <Booking />
        <Diseases />

        <Gallery />
<<<<<<< HEAD

        <FeaturedIn />
        <NewBooking />
=======
        {/* <Projects /> */}
        {/* <Card /> */}
        {/* <FeaturedIn /> */}
>>>>>>> d5b4bd7c27538e4ec0175902755af3dc0fc8bff5
      </main>
    </>
  )
}
