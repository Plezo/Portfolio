export default function Intro(props: {mode: string}) {
  const Resume = require('../../assets/Resume.pdf')
  return (
    <div 
      className='
      mt-32
      xl:mt-16 xl:ml-32 xl:w-5/12
      2xl:mb-80
      '
      >
        <div
        className='
        flex flex-col align-items justify-center items-center 
        xl:justify-start xl:items-start
        '
        >
          <h1
          className='
          text-royal-purple dark:text-lavender
          text-8xl font-bold  tracking-wider
          md:text-9xl
          xl:text-8xl
          '
          >
            Patryk
          </h1>
          <h2
          className='
          text-dark-purple dark:text-ivory
          w-56 mt-12 text-3xl
          xl:w-full
          2xl:text-4xl
          '
          >
            Software Engineer & Full Stack Developer
          </h2>
          <p
          className={`${props.mode} 
          w-7/12 mt-8
          text-dark-purple dark:text-ivory
          sm:text-lg
          lg:text-2xl
          xl:text-base xl:w-10/12 xl:mt-8
          2xl:w-8/12 2xl:text-lg
          `}
          >
            I'm a software engineer who creates full-stack applications. I'm always working on projects
            to expand my skillset as well as working with people who help me grow as a software engineer.
            The entire process fascinates me from the planning stages of a project to laying the finishing touches.
            And most importantly, I'm in love with the process of learning new things.
          </p>
          <a
          href={Resume} target='_blank' rel='noreferrer'
          className={`${props.mode} 
          flex justify-center align-center items-center
          bg-royal-purple text-ivory h-12 w-32 mt-12 rounded-3xl transition-all
          hover:bg-opacity-80 active:bg-dark-purple
          dark:bg-lavender dark:text-dark-purple
          dark:active:bg-royal-purple
          sm:mt-24
          md:h-16 md:w-36 md:text-xl
          lg:h-18 lg:w-40 lg:text-2xl
          xl:mt-20 xl:rounded-full
          2xl:h-24 2xl:w-64 2xl:text-4xl
          `}
          >
            Resume/CV
          </a>
        </div>
      </div>
  )
}
