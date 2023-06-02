import Image from 'next/image'
import profileImage from '../../public/images/shiva.png'
import AnimatedContent from './AnimatedContent'
const Hero = () => {
  return (
    <header className="flex flex-col md:flex-row max-w-screen min-h-screen pt-16 gap-y-8  md:items-start md:mt-6 md:justify-evenly ">
      <article className=" self-center flex flex-col items-center gap-y-4">
        <h1 className="text-5xl mb-4 md:text-6xl  font-bold text-white  animate-fade-in [--animation-delay:200ms] opacity-0 translate-y-4 text-gradient/10  ">
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
        <div className=" flex justify-center items-center  animate-fade-in [--animation-delay:1400ms] opacity-0 translate-y-4 ">
          <Image
            src={profileImage}
            className="object-cover w-[60%] md:w-[70%]   "
            alt="پروفایل شیوا توتونیان"
          />
        </div>
        {/* //animate-fade-in [--animation-delay:600ms] opacity-0 */}
        <div className="max-w-[90%] mx-auto backdrop-blur-lg animate-fade-in [--animation-delay:600ms] opacity-0  ">
          <AnimatedContent />
        </div>
      </article>
    </header>
  )
}

export default Hero
