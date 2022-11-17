import Welcome from './Welcome'

export default function Intro() {
  return (
    <div id='intro' className='h-screen'>
      <div className='absolute h-full w-full flex flex-col justify-between items-center text-10xl font-welcome overflow-hidden'>
        <div className='absolute top-0 -right-96 pt-12 animate-pulse'>
          <Welcome />
        </div>
        <div className=' absolute bottom-0 -left-96 pb-12 animate-pulse'>
          <Welcome />
        </div>
      </div>

      <div className=' h-full flex flex-col justify-center items-center'>
        <h1 className='text-lavender text-8xl font-extrabold tracking-wider'>
          PATRYK
        </h1>
        <h2 className='text-ivory text-2xl pt-4 tracking-wider'>
          Software Engineer & Full Stack Developer
        </h2>
      </div>
    </div>
  )
}
