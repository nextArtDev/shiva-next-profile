'use client'

import { useState } from 'react'

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

function NewBooking() {
  const [activePlaceId, setActivePlaceId] = useState(0)
  const handleLocation = () => {
    return <a href="https://goo.gl/maps/xN9L5CeiHZUVZ9y98"></a>
  }

  const placeHandler = (id: number) => {
    setActivePlaceId(id)
  }
  const Days = activePlaceId === 0 ? DaysForShafagh : DaysForMatab
  const location =
    activePlaceId === 0
      ? 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3360.695308339348!2d51.58405507559082!3d32.61430249228383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzLCsDM2JzUxLjUiTiA1McKwMzUnMTEuOSJF!5e0!3m2!1sen!2s!4v1687124817397!5m2!1sen!2s'
      : 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3359.2407402349572!2d51.66354817552245!3d32.653037240311974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fbc3575649bfa29%3A0xd21a5cbab64fd330!2z2LPYp9iu2KrZhdin2YYg2b7Ysti02qnYp9mGINmC2YXYsSDYp9mE2K_ZiNmE2Yc!5e0!3m2!1sen!2s!4v1686296244882!5m2!1sen!2s'

  return <div>NewBooking</div>
}

export default NewBooking
