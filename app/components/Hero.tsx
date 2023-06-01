import Image from 'next/image'
import profileImage from '../../public/images/shiva.png'
const Hero = () => {
  return (
    <header className="flex flex-col md:flex-row max-w-screen h-screen pt-16 gap-y-8  md:items-start md:mt-6 md:justify-evenly ">
      <article className=" self-center flex flex-col items-center gap-y-4">
        <h1 className="text-5xl mb-4 md:text-6xl  font-bold text-white  animate-fade-in [--animation-delay:200ms] opacity-0 translate-y-4   ">
          دکتر شیوا توتونیان
        </h1>

        <h3 className="text-xl font-semibold md:text-4xl animate-fade-in [--animation-delay:600ms] opacity-0 translate-y-4   ">
          متخصص زنان، زایمان، نازایی
        </h3>
        <h3 className="text-xl font-semibold md:text-4xl animate-fade-in [--animation-delay:1000ms] opacity-0 translate-y-4   ">
          و جراحی‌های زیبایی زنان
        </h3>
      </article>
      <article className="">
        <div className="relative flex justify-center items-center  animate-fade-in [--animation-delay:1400ms] opacity-0 translate-y-4 ">
          <Image
            src={profileImage}
            className="object-cover w-[60%] md:w-[70%]  "
            alt="پروفایل شیوا توتونیان"
          />
          <div className=" absolute glass top-[80%] max-w-[90%] h-[30%] grid grid-cols-3 grid-rows-2 place-items-center gap-y-2 gap-x-2 p-2 text-xs font-semibold text-center ">
            <div className="flex flex-col glass h-full w-full justify-center items-center">
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
