import Image from 'next/image'
import profileImage from '../../public/images/shiva.png'
const Hero = () => {
  return (
    <header className=" flex flex-col max-w-screen h-screen pt-16 gap-y-8 ">
      <article className="flex flex-col items-center gap-y-4">
        <h1 className="text-4xl font-bold text-white ">دکتر شیوا توتونیان</h1>

        <h3 className="text-2xl font-semibold ">متخصص زنان، زایمان، نازایی</h3>
        <h3 className="text-2xl font-semibold ">و جراحی‌های زیبایی زنان</h3>
      </article>
      <article>
        <div className="relative flex justify-center items-center ">
          <Image
            src={profileImage}
            width={250}
            height={250}
            className=" object-cover "
            alt="پروفایل شیوا توتونیان"
          />
          <div className=" absolute glass top-[22rem] h-[45%] grid grid-cols-3 grid-rows-2 place-items-center gap-y-4 gap-x-1 p-4 text-sm font-semibold text-center ">
            <div className="flex flex-col glass h-full w-full">
              <span>18</span>
              <span> سال سابقه</span>
            </div>
            <div className="flex flex-col justify-center items-center  glass h-full w-full">
              <span>2000+</span>
              <span> زایمان طبیعی</span>
            </div>
            <div className="flex flex-col justify-center items-center  glass h-full w-full">
              <span>2000+</span>
              <span> جراحیهای زیبایی زنان</span>
            </div>
            <div className="flex flex-col justify-center items-center  glass h-full w-full">
              <span>2000+</span>
              <span> سزارین</span>
            </div>
            <div className="flex flex-col  justify-center items-center glass h-full w-full">
              <span>2000+</span>
              <span> عمل خارج کردن رحم</span>
            </div>
            <div className="flex flex-col justify-center items-center  glass h-full w-full">
              <span>20000+</span>
              <span> ویزیت</span>
            </div>
          </div>
        </div>
      </article>
    </header>
  )
}

export default Hero
