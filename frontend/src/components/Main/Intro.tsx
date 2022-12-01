import Welcome from './Welcome'

export default function Intro() {
  return (
    <div id='intro' className='h-screen'>
      <div className='
      absolute flex flex-col items-center justify-between w-full h-full overflow-hidden
      '>
        <div className='2xl:flex 2xl:justify-end
        absolute top-0 pt-12 -left-52 sm:left-0 lg:-right-96 animate-pulse
        '>
          <Welcome />
        </div>
        <div className='
        absolute bottom-0 pb-12 -right-52 sm:right-0 lg:-left-96 animate-pulse
        '>
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
