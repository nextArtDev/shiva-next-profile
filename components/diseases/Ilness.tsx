import { FC } from 'react'
import Card from '../Card'

interface IlnessProps {
  className: string
  title: string
  text: string
}

const Ilness: FC<IlnessProps> = ({ className, title, text }) => {
  return (
    <section className={`${`  `} className`}>
      {/* <span className={`border`}></span>
      <span className={`border`}></span>
      <span className={`border`}></span>
      <span className={`border`}></span> */}
      <div className={`flex flex-col text-sm font-farsi justify-between `}>
        {/* <div className="pt-2">
          <p className={`font-semibold text-center p-4 text-lg `}>{title}</p>
        </div>
        <div className={`data flex-grow `}>
          <p className={`text flex-1 max-w-[70%] `}>{text}</p>
        </div>
        <div className="pb-2">
          <button
            className={`btn z-20 px-8 py-2 border rounded-full border-solid border-white neon-button ${`btn`}`}
          >
            ادامه
          </button>
        </div> */}
        <Card title={title} content={text} />
      </div>
    </section>
  )
}

export default Ilness
