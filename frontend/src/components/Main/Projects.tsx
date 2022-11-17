import Project from './Project'

export default function Projects() {
  return (
    <div id='projects'
    className='
    h-screen flex flex-col items-center
    
    '>
      <h1 className='text-ivory text-9xl font-bold pt-32'>/PROJECTS</h1>
      <div className='flex flex-row pt-20 w-1/2'>
        <Project />
      </div>
    </div>
  )
}