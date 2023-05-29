'use client'
import React, { useEffect, useState } from 'react'
// import Tilt from 'react-parallax-tilt'
import {
  MdOutlineDateRange,
  MdAccessTime,
  MdOutlinePlace,
} from 'react-icons/md'

const Places = [
  { id: 0, name: 'کلینیک آیین شفق اصفهان' },
  { id: 1, name: 'مرکز جراحی محدود صحت زرین شهر' },
  { id: 2, name: 'مطب اصفهان' },
]
const Days = [
  {
    id: 0,
    name: 'شنبه',
    dayPlaceActive: [
      { placeId: 0, activeHours: [2, 5] },
      { placeId: 1, activeHours: [5, 6] },
      { placeId: 2, activeHours: [4, 6] },
    ],
  },
  {
    id: 1,
    name: '1 شنبه',
    dayPlaceActive: [
      { placeId: 0, activeHours: [] },
      { placeId: 1, activeHours: [3, 5] },
      { placeId: 2, activeHours: [3, 7] },
    ],
  },
  {
    id: 2,
    name: '2 شنبه',
    dayPlaceActive: [
      { placeId: 0, activeHours: [6, 5] },
      { placeId: 1, activeHours: [4, 6] },
      { placeId: 2, activeHours: [3, 5] },
    ],
  },
  {
    id: 3,
    name: '3 شنبه',
    dayPlaceActive: [
      { placeId: 0, activeHours: [1, 5] },
      { placeId: 1, activeHours: [2, 5] },
      { placeId: 2, activeHours: [5, 7] },
    ],
  },
  {
    id: 4,
    name: '4 شنبه',
    dayPlaceActive: [
      { placeId: 0, activeHours: [5, 6] },
      { placeId: 1, activeHours: [1, 5] },
      { placeId: 2, activeHours: [1, 4] },
    ],
  },
]
const Hours = [
  { id: 0, name: '9:00' },
  { id: 1, name: '10:00' },
  { id: 2, name: '11:00' },
  { id: 3, name: '16:00' },
  { id: 4, name: '17:00' },
  { id: 5, name: '18:00' },
  { id: 6, name: '19:00' },
  { id: 7, name: '13:00' },
]
function Booking() {
  const [activePlaceId, setActivePlaceId] = useState(0)
  const [activeDaysId, setActiveDaysId] = useState(0)
  const [activeHoursId, setActiveHoursId] = useState([2, 3])
  // useEffect(()=>{
  // },[activeDaysId ,activePlaceId ])
  const { activeHours } = Days[activeDaysId].dayPlaceActive[activePlaceId]

  const placeHandler = (id: number) => {
    setActivePlaceId(id)
  }
  const dayHandler = (id: number) => {
    setActiveDaysId(id)
    setActiveHoursId(activeHours)
    console.log(activeHoursId)
  }
  useEffect(() => {
    setActiveHoursId(activeHours)
  }, [activePlaceId, activeDaysId])
  return (
    <section
      className={`w-screen max-w-[1280px] h-screen text-white flex flex-col justify-evenly `}
    >
      <div className={`section-center flex flex-col justify-around `}>
        <h2 className="title">ساعت‌های کاری</h2>
        <div className={`container grid gap-10 p-2 `}>
          <article className={`places  `}>
            <h4 className="subtitle text-right">انتخاب مطب و بیمارستان</h4>
            <div className={`placeBtns grid grid-cols-3 gap-3`}>
              {Places.map((place) => (
                // <Tilt
                //   tiltReverse={true}
                //   glareEnable={true}
                //   glareMaxOpacity={0.9}
                //   glareColor="lightblue"
                //   glarePosition="all"
                //   tiltMaxAngleX="5"
                //   tiltMaxAngleY="5"
                // >
                <div
                  key={place.id}
                  className={`placebtn self-stretch flex flex-col justify-center items-center glass cursor-pointer ${
                    activePlaceId === place.id ? 'active' : ''
                  }`}
                  onClick={() => placeHandler(place.id)}
                >
                  <MdOutlinePlace className={`icon text-[1.5rem]`} />
                  <h4 className={`place `}>{place.name}</h4>
                </div>
                // </Tilt>
              ))}
            </div>
          </article>
          <article className={`weeks`}>
            <h4 className=" subtitle text-right">انتخاب روز</h4>
            <div className={`week grid autoFitWeek gap-2 `}>
              {Days.map((day) => (
                <div
                  key={day.id}
                  className={`days flex flex-col justify-evenly items-center p-1 cursor-pointer glass ${
                    activeDaysId === day.id ? 'active' : ''
                  }`}
                  onClick={() => dayHandler(day.id)}
                >
                  <MdOutlineDateRange className={`icon text-[1.5rem]`} />
                  <h4>{day.name}</h4>
                </div>
              ))}
            </div>
          </article>
          <article className={`times`}>
            <h4 className="subtitle">ساعت‌های فعالیت</h4>
            <div className={`time grid grid-cols-4 gap-2 mx-2 text-center `}>
              {Hours.map((hour, i) => {
                const [firstHour, secondHour] = activeHoursId

                return (
                  <div
                    key={hour.id}
                    className={`hours flex justify-items-end items-center glass ${
                      hour.id === firstHour && 'active'
                    }  ${hour.id === secondHour && 'active'}`}
                  >
                    <h4 className={`hour `}>{hour.name}</h4>
                    <MdAccessTime className={`icon text-[1.75rem]`} />
                  </div>
                )
              })}
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Booking
