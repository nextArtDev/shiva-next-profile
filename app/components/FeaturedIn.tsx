import React from 'react'
import EsfahanLogo from '../../public/featuredLogo/esfahan.png'
import KshanLogo from '../../public/featuredLogo/kashan.png'
import AnjomanLogo from '../../public/featuredLogo/anjoman.png'
import SaadiLogo from '../../public/featuredLogo/saadi.png'
import LenjanLogo from '../../public/featuredLogo/lenjan.png'
import MotahariLogo from '../../public/featuredLogo/motahari.png'
import Image from 'next/image'
const images = [
  { id: 1, src: EsfahanLogo, alt: 'دانشگاه علوم پزشکی اصفهان' },
  { id: 2, src: KshanLogo, alt: 'دانشگاه علوم پزشکی کاشان' },
  { id: 3, src: AnjomanLogo, alt: 'انجمن علمی زنان و مامایی اصفهان' },
  { id: 4, src: SaadiLogo, alt: 'بیمارستان سعدی اصفهان' },
  { id: 5, src: LenjanLogo, alt: 'بیمارستان شهدای لنجان اصفهان-زرین شهر' },
  { id: 6, src: MotahariLogo, alt: 'بیمارستان مطهری اصفهان' },
]
function FeaturedIn() {
  return (
    <div className={`featured min-h-fit `}>
      <div className={`container flex flex-col justify-around `}>
        <h2 className={`heading title text-center`}>مشارکت و همکاری با</h2>
        <div
          className={`logo grid place-items-center gap-2 autoFitFeaturedIn `}
        >
          {images.map((image) => (
            <Image
              key={image.id}
              src={image.src}
              alt={image.alt}
              className="brightness-75 opacity-80 object-cover scale-75 "
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default FeaturedIn
