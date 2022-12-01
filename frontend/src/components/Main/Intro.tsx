import Welcome from './Welcome'

export default function Intro() {
  return (
    <div id='intro' className='h-screen'>
      <div className='absolute flex flex-col items-center justify-between w-full h-full overflow-hidden text-10xl font-welcome'>
        <div className='absolute top-0 pt-12 -right-96 animate-pulse'>
          <Welcome />
        </div>
        <div className='absolute bottom-0 pb-12 -left-96 animate-pulse'>
          <Welcome />
        </div>
      </div>

      <div className='flex flex-col items-center justify-center h-full '>
        <h1 className='font-extrabold tracking-wider text-lavender text-8xl'>
          PATRYK
        </h1>
        <h2 className='pt-4 text-2xl tracking-wider text-ivory'>
          Software Engineer & Full Stack Developer
        </h2>
      </div>
    </div>
  )
}
