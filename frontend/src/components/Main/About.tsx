import { Element } from 'react-scroll'

export default function About() {
  return (
    <Element name='about'>
      <div className='flex flex-col items-center h-screen'>
          <h1 className='
          pt-24 font-bold text-lavender text-9xl 
          lg:pt-52
          xl:pt-24
          '>
            /ABOUT
          </h1>

          <div className='
          w-2/3 pt-24 
          text-ivory text-xl
          sm:pt-36 sm:text-3xl
          md:w-3/5 md:pt-16
          lg:pt-36
          xl:pt-16
          2xl:w-1/5 2xl:text-2xl 2xl:pt-32
          '>
              <p>
                  /*<br></br>
                  I started my programming journey at the age of 12 with C++,
                  I always loved building new things and seeing these inventions
                  come to life which is why I decided to pursue software engineering.
                  <br></br><br></br>
                  Today, I'm a software engineer who creates full-stack applications. I'm always working
                  on projects to expand my skillset as well as working with people who help me grow as a software
                  engineer. The entire process fascinates me from the planning stages of a project to laying the finishing
                  touches. And most importantly, I'm in love with the process of learning new things.
                  <br></br>*/
              </p>
          </div>
      </div>
    </Element>
  )
}
