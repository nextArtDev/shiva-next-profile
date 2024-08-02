'use client'
import { redirect } from 'next/dist/server/api-utils'
import React, { useEffect, useState } from 'react'
// import Tilt from 'react-parallax-tilt'
import {
  MdOutlineDateRange,
  MdAccessTime,
  MdShareLocation,
  MdOutlinePlace,
} from 'react-icons/md'

const Places = [
  { id: 0, name: 'کلینیک آیین شفق اصفهان' },
  { id: 1, name: 'مطب اصفهان' },
]
const DaysForShafagh = [
  {
    id: 0,
    name: 'شنبه',
    activeHours: [15, 17],
  },
  {
    id: 1,
    name: '1 شنبه',
    activeHours: [11, 13],
  },
  {
    id: 2,
    name: '3 شنبه',
    activeHours: [16, 18],
  },
]
const DaysForMatab = [
  {
    id: 0,
    name: '1 شنبه',

    activeHours: [17, 20],
  },
  {
    id: 1,
    name: '3 شنبه',
    activeHours: [9, 12],
  },
  {
    id: 2,
    name: '4 شنبه',
    activeHours: [17, 20],
  },
]
type Props = {}

const Services = (props: Props) => {
  const [activePlaceId, setActivePlaceId] = useState(0)
  const handleLocation = () => {
    return <a href="https://goo.gl/maps/xN9L5CeiHZUVZ9y98"></a>
  }

  const placeHandler = (id: number) => {
    setActivePlaceId(id)
  }
  const Days = activePlaceId === 0 ? DaysForShafagh : DaysForMatab
  return (
    <section className=" max-w-[95%] md:max-w-[75%] w-screen h-screen md:h-[70vh] mx-auto mb-32 rounded-lg ">
      <h2 className="title">ساعت‌های کاری</h2>
      <div className="relative w-full h-full overflow-hidden ">
        <div className="lines inner-gradient mt-20  before:w-[2000px] before:h-[150%] after:bg-gray-900 after:blur-3xl after:rounded-lg rounded-br-lg rounded-bl-lg" />
        {/*Right upper part  */}

        <div
          onClick={() => setActivePlaceId(0)}
          className={`absolute right-0 w-[49%] h-20 bg-transparent overflow-hidden rounded-tr-lg cursor-pointer  ${
            activePlaceId === 0
              ? 'text-[--clr-neon3]'
              : 'booking-glass-right text-white/40'
          } `}
        >
          <span className="absolute w-full flex flex-col justify-evenly items-center text-center  z-20 ">
            <MdOutlinePlace
              className={`icon text-center text-[1.5rem] my-2 `}
            />
            <h4 className="font-semibold">کلینیک آیین شفق </h4>
          </span>
          {activePlaceId === 0 && (
            <div className="lines inner-gradient before:w-[1000px] before:h-96 after:bg-gray-900 after:blur-2xl  after:rounded-tr-lg rounded-tr-lg" />
          )}
        </div>

        {/* Left upper part  */}
        <div
          onClick={() => setActivePlaceId(1)}
          className={`absolute left-0 w-[49%] h-20 bg-transparent z-10 overflow-hidden rounded-tl-lg cursor-pointer  ${
            activePlaceId === 1
              ? 'text-[--clr-neon3]'
              : 'booking-glass-left  text-white/40 '
          }  `}
        >
          <span className="absolute w-full flex flex-col justify-center items-center text-center  z-20  ">
            <MdOutlinePlace
              className={`icon  text-center text-[1.5rem] my-2 `}
            />
            <h4 className="font-semibold">مطب شمس‌آبادی</h4>
          </span>
          {activePlaceId === 1 && (
            <div className="lines inner-gradient  before:w-[1000px] before:h-96 after:bg-gray-900 after:blur-2xl after:rounded-tl-lg  rounded-tl-lg" />
          )}
        </div>
        <div className="absolute inset-0 bg-transparent top-20 flex flex-col lg:flex-row ">
          <article className={`weeks flex flex-col`}>
            <div className={`week pt-4`}>
              {Days.map((day) => (
                <div
                  key={day.id}
                  className={`days  flex justify-around items-center p-1 m-2 glass mix-blend-plus-lighter `}
                >
                  <div className="flex flex-col lg:flex-row py-2 lg:px-2 items-center ">
                    <MdOutlineDateRange
                      className={`icon text-[1rem] my-2 md:mx-2 `}
                    />
                    <h4 className="text-[var(--clr-neon1)]">{day.name}</h4>
                  </div>
                  <div className="place">
                    <div className="flex flex-col lg:flex-row lg:justify-evenly lg:mr-6 items-center lg:text-sm ">
                      <MdAccessTime className={`icon text-[1rem] m-1 `} />
                      <p className="lg:flex-col">
                        از ساعت{' '}
                        <span className="text-[var(--clr-neon1)] py-1 lg:px-2 ">
                          {day.activeHours[0]}
                        </span>{' '}
                        تا ساعت{' '}
                        <span className="text-[var(--clr-neon1)] py-1 lg:px-2 ">
                          {day.activeHours[1]}
                        </span>{' '}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </article>
          {/* map  */}
          <article className="z-20 mix-blend-screen mx-auto  ">
            <div className=" bg-violet-800/30 mx-2 p-4 mt-6 text-sm font-semibold z-10 rounded-3xl  mix-blend-multiply text-center ">
              {activePlaceId === 1 ? (
                <p>
                  خیابان شمس آبادی، ساختمان پزشکان قمرالدوله، طبقه دوم، واحد 210
                </p>
              ) : (
                <p>اصفهان، خیابان شفق، کلینیک آیین شفق</p>
              )}
            </div>
            <div
              className="relative w-56 h-56 z-20 mx-auto mt-2 "
              onClick={() =>
                window.open(
                  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3359.2407402349572!2d51.66354817552245!3d32.653037240311974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fbc3575649bfa29%3A0xd21a5cbab64fd330!2z2LPYp9iu2KrZhdin2YYg2b7Ysti02qnYp9mGINmC2YXYsSDYp9mE2K_ZiNmE2Yc!5e0!3m2!1sen!2s!4v1686296244882!5m2!1sen!2s'
                )
              }
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3359.2407402349572!2d51.66354817552245!3d32.653037240311974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fbc3575649bfa29%3A0xd21a5cbab64fd330!2z2LPYp9iu2KrZhdin2YYg2b7Ysti02qnYp9mGINmC2YXYsSDYp9mE2K_ZiNmE2Yc!5e0!3m2!1sen!2s!4v1686296244882!5m2!1sen!2s"
                loading="lazy"
                className="w-56 h-56"
                style={{ borderRadius: '50%', opacity: '60%' }}
              ></iframe>
              <div
                className="rounded-full absolute inset-0 w-full h-full text-[--clr-neon3] drop-shadow-2xl cursor-pointer flex justify-center items-center text-9xl outline-8 outline-double -outline-offset-8 outline-[--clr-neon] "
                onClick={() =>
                  window.open(
                    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3359.2407402349572!2d51.66354817552245!3d32.653037240311974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fbc3575649bfa29%3A0xd21a5cbab64fd330!2z2LPYp9iu2KrZhdin2YYg2b7Ysti02qnYp9mGINmC2YXYsSDYp9mE2K_ZiNmE2Yc!5e0!3m2!1sen!2s!4v1686296244882!5m2!1sen!2s'
                  )
                }
              >
                <MdShareLocation className="text-[--clr-neon] opacity-60 drop-shadow-2xl " />
              </div>
            </div>
          </article>
        </div>
        {/* 
                            <Tilt
                              tiltReverse={true}
                              glareEnable={true}
                              glareMaxOpacity={0.9}
                              glareColor="lightblue"
                              glarePosition="all"
                              tiltMaxAngleX="5"
                              tiltMaxAngleY="5"
                            >
                             </Tilt> */}
        {/* <section
          className={` absolute top-20 w-screen max-w-[1280px] h-screen lg:mt-0 text-white flex flex-col justify-evenly mx-auto `}
        >

            </div>
          </div>
        </section> */}
      </div>
    </section>
  )
}

export default Services
