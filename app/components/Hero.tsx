import Image from 'next/image'
import profileImage from '../../public/images/shiva.png'
import AnimatedContent from './AnimatedContent'
import IconSquareInstagram from './icons/Instagram'
import IconSquareWhatsapp from './icons/WhatsApp'
import IconTelegram from './icons/Telegram'

const Hero = () => {
  return (
    <header className="flex flex-col lg:flex-row max-w-screen min-h-screen pt-20 gap-y-8  lg:items-start lg:mt-6 lg:justify-evenly ">
      <article className=" self-center flex flex-col items-center gap-y-4">
        <h1 className="text-4xl mb-4 md:text-5xl lg:text-6xl  font-bold text-white  animate-fade-in [--animation-delay:200ms] opacity-0 translate-y-4 neon-text-gradient ">
          دکتر شیوا توتونیان
        </h1>

        <h3 className="text-xl font-semibold md:text-3xl lg:text-4xl animate-fade-in [--animation-delay:600ms] opacity-0 translate-y-4   ">
          متخصص زنان، زایمان، نازایی
        </h3>
        <h3 className="text-xl font-semibold md:text-3xl lg:text-4xl animate-fade-in [--animation-delay:1000ms] opacity-0 translate-y-4 ">
          و جراحی‌های زیبایی زنان
        </h3>
        <div className="hidden md:flex md:gap-4 md:text-5xl md:mt-6 transition hover:cursor-pointer animate-fade-in [--animation-delay:1100ms] opacity-0 translate-y-4 ">
          <IconSquareInstagram className="text-red-500 hover:scale-110  " />
          <IconSquareWhatsapp className="text-green-400 hover:scale-110 " />
          <IconTelegram className="text-blue-400 hover:scale-110 " />
        </div>
      </article>
      <article className="">
        <div className=" flex justify-center items-center  animate-fade-in [--animation-delay:1400ms] opacity-0 translate-y-4 ">
          <Image
            src={profileImage}
            className="object-cover w-[60%] md:w-[50%] lg:[70%]  "
            alt="پروفایل شیوا توتونیان"
          />
        </div>
        {/* //animate-fade-in [--animation-delay:600ms] opacity-0 */}
        <div className="max-w-[90%] mx-auto mt-8 backdrop-blur-lg animate-fade-in [--animation-delay:600ms] opacity-0  ">
          <AnimatedContent />
        </div>
      </article>
    </header>
  )
}

export default Hero
