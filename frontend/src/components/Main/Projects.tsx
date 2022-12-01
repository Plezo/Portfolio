import { Element } from 'react-scroll';

import Project from './Project'
import ProjectInfos from './ProjectInfo';

export default function Projects() {
  return (
    <Element name='projects'>
      <div className='flex flex-col items-center h-screen w-full'>
        <h1 className='pt-24 font-bold text-ivory text-8xl md:text-9xl'>/PROJECTS</h1>
        <div className='flex pt-32'>
          {ProjectInfos.map((obj) => {
            return <div className='mx-12 md:mx-40 2xl:mx-52'>
              <Project img={obj.img} name={obj.name} desc={obj.desc} stack={obj.stack} />
            </div>
          })}
        </div>      
      </div>
    </Element>
  )
}
