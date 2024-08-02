import Hero from '@/components/Hero'
import Booking from '@/components/booking'
import FeaturedIn from '@/components/FeaturedIn'
import Gallery from '@/components/Gallery'

import Card from '@/components/Card'
import Diseases from '@/components/diseases/Diseases'
import NewBooking from '@/components/NewBooking'

export default function Home() {
  return (
    <>
      <main
        className="font-farsi flex flex-col
      bg-page-gradient text-primary-text "
      >
        <Hero />
        <Booking />
        <Diseases />

        <Gallery />

        <FeaturedIn />
        <NewBooking />
      </main>
    </>
  )
}
