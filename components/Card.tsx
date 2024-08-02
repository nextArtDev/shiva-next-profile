'use client'
import { FC } from 'react'
import Tilt from 'react-parallax-tilt'

interface CardProps {
  title: string
  content: string
}

const Card: FC<CardProps> = ({ title, content }) => {
  return (
    <Tilt
      glareEnable
      glareBorderRadius="0.5rem"
      glareReverse={true}
      glarePosition="left"
      tiltMaxAngleX={5}
      tiltMaxAngleY={5}
      tiltReverse
      className=" glass-card m-4 ml-0  "
    >
      <div className="elements bg"></div>
      <div className="elements imgBx flex justify-center items-center ">
        <p className="!text-[var(--clr-neon)] font-semibold  text-sm">
          {title}
        </p>
      </div>
      <div className=" elements content text-white  flex justify-center items-center ">
        <p className="p-4 "> {content}</p>
      </div>
      {/* <div className="card !bg-transparent blur-3xl centerIlness"> */}
      <div className="card centerIlness">
        <span className={`border1`}></span>
        <span className={`border2`}></span>
        <span className={`border3`}></span>
        <span className={`border4`}></span>
        {/* <div className="absolute inset-0 blur-3xl" /> */}
      </div>
    </Tilt>
  )
}

export default Card
