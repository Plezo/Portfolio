import Project from './Project'

import ProjectInfos from './ProjectInfo';

export default function Projects() {
  return (
    <div id='projects'
    className='flex flex-col items-center h-screen'>
      <h1 className='pt-32 font-bold text-ivory text-9xl'>/PROJECTS</h1>
      <div className='flex flex-row pt-36'>
        {ProjectInfos.map((obj) => {
          return <div className='flex justify-center w-full'>
            <Project img={obj.img} name={obj.name} desc={obj.desc} stack={obj.stack} />
          </div>
        })}
        {/* <div className='flex justify-center w-full'>
          <Project />
        </div>
        <div className='flex justify-center w-full'>
          <Project />
        </div> */}
      </div>      
    </div>
  )
}
