import Project from './Project'

export default function Projects() {
  return (
    <div id='projects'
    className='flex flex-col items-center h-screen'>
      <h1 className='pt-32 font-bold text-ivory text-9xl'>/PROJECTS</h1>
      <div className='relative flex flex-row w-screen overflow-hidden h-2/5'>
        <div className='relative flex flex-row justify-center pt-20'>
          <Project />
        </div>
        <div className='relative flex flex-row justify-center pt-20'>
          <Project />
        </div>
      </div>      
    </div>
  )
}
