import React from 'react'
import EsfahanLogo from '../public/featuredLogo/esfahan.png'
import KshanLogo from '../public/featuredLogo/kashan.png'
import AnjomanLogo from '../public/featuredLogo/anjoman.png'
import SaadiLogo from '../public/featuredLogo/saadi.png'
import LenjanLogo from '../public/featuredLogo/lenjan.png'
import MotahariLogo from '../public/featuredLogo/motahari.png'
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
    <div className={` h-52 `}>
      <div className={`container flex flex-col justify-around `}>
        <h2 className={`heading title text-xl`}>سابقه همکاری با</h2>
        <div
          className={` -mt-36 logo grid place-items-center gap-2 autoFitFeaturedIn `}
        >
          {images.map((image) => (
            <div
              key={image.id}
              className="flex flex-col justify-between gap-2 "
            >
              <Image
                src={image.src}
                alt={image.alt}
                className=" flex-1 brightness-75 opacity-80 object-cover scale-75 "
              />
              <p className="text-xs text-center brightness-75 ">{image.alt}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FeaturedIn
