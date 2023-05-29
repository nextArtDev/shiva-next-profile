import Image from 'next/image'

type Props = {
  imgNumber: any
  className: string
}

const Project = (props: Props) => {
  return (
    <div
      className={`projects relative rounded-md mb-8 cursor-pointer ${props.className}`}
    >
      <a href="#" className={`projectLink`}>
        <article className={'project'}>
          <Image
            src={props.imgNumber}
            alt=""
            className={'img rounded-md h-[15rem] object-cover '}
          />
          <div
            className={
              'info text-center absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] '
            }
          >
            <h4>عنوان </h4>
            <p>نام بیمارستان</p>
          </div>
        </article>
      </a>
    </div>
  )
}
export default Project
