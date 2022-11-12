export default function Intro(props: {mode: string}) {
  return (
    <div 
      className='flex flex-col align-middle mb-32 mt-12
      sm:ml-36 sm:w-11/12'
      >
        <div
        className='flex flex-col align-items justify-center items-center sm:w-10/12'
        >
          <h1
          className={`${props.mode} 
          flex-auto text-8xl font-bold text-royal-purple 
          dark:text-lavender
          `}
          >
            Patryk
          </h1>
          <h2
          className={`${props.mode} 
          flex-auto w-56 text-3xl font-medium text-dark-purple mt-12
          text-center
          dark:text-ivory
          `}
          >
            Software Engineer & Full Stack Developer
          </h2>
          <p
          className={`${props.mode} 
          flex-auto w-9/12 text-dark-purple leading-6 mt-8
          dark:text-ivory
          `}
          >
            I'm a software engineer who creates full-stack applications. I'm always working on projects
            to expand my skillset as well as working with people who help me grow as a software engineer.
            The entire process fascinates me from the planning stages of a project to laying the finishing touches.
            And most importantly, I'm in love with the process of learning new things.
          </p>
          <button
          className={`${props.mode} 
          bg-royal-purple text-ivory h-12 w-32 mt-12 rounded-3xl transition-all
          hover:bg-opacity-80 active:bg-dark-purple
          dark:bg-lavender dark:text-dark-purple
          dark:active:bg-royal-purple
          `}
          >
            Resume/CV
          </button>
        </div>
      </div>
  )
}
