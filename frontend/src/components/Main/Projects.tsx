import Project from './Project'

import ProjectInfos from './ProjectInfo';

export default function Projects() {
  return (
    <div id='projects'
    className='flex flex-col items-center h-screen'>
      <h1 className='pt-24 font-bold text-ivory text-8xl md:text-9xl'>/PROJECTS</h1>
      <div className='flex flex-row pt-32'>
        {ProjectInfos.map((obj) => {
          return <div className='flex justify-center w-full h-full mx-12 md:mx-40'>
            <Project img={obj.img} name={obj.name} desc={obj.desc} stack={obj.stack} />
          </div>
        })}
      </div>      
    </div>
  )
}
