import Project from './project'
import img1 from '../../../public/images/1.jpg'
import img2 from '../../../public/images/3.jpg'
import img3 from '../../../public/images/4.jpg'
import img4 from '../../../public/images/5.jpg'

const Projects = () => {
  return (
    <section className="">
      <div>
        <h2 className="title">گالری تصاویر</h2>

        <p className="text w-[85vw] max-w-[30rem] my-auto">
          چاپگرها و متون بلکه روزنامه و مجله
        </p>
      </div>
      <div
        className={`section-center projectParent grid autoFitProjects gap-8 `}
      >
        <Project imgNumber={img1} className="project1" />
        <Project imgNumber={img2} className="project2" />
        <Project imgNumber={img3} className="project3" />
        <Project imgNumber={img4} className="project4" />
      </div>
    </section>
  )
}
export default Projects
