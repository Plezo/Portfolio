import { 
  AiOutlineHome, AiOutlineApartment, AiOutlineSmile, AiOutlinePhone, 
  AiOutlineSolution, AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";

import { scroller } from 'react-scroll'

export default function Header() {
  const Resume = require('../../assets/Resume.pdf')

  const scrollToSection = (section: string) => {
    scroller.scrollTo(section, { smooth: true, duration:0 })
  }

  return (
    <div className='
    flex flex-col justify-between
    fixed px-12 z-10
    text-ivory h-screen
    invisible md:visible
    '>
      <div className='
      flex flex-col gap-4 text-xl items-center
      '>
        <div className='h-24 border-solid border-l border-ivory'></div>
        <div
        className='sidebarBtn'
        onClick={() => scrollToSection('intro')}>
          <AiOutlineHome />
        </div>
        <div 
        className='sidebarBtn'
        onClick={() => scrollToSection('projects')}>
          <AiOutlineApartment />
        </div>
        <div
        className='sidebarBtn'
        onClick={() => scrollToSection('about')}>
          <AiOutlineSmile />
        </div>
        <div
        className='sidebarBtn'
        onClick={() => scrollToSection('contact')}>
          <AiOutlinePhone />
        </div>
      </div>

      <div className='
      flex flex-col gap-4 text-xl items-center
      '>
        <a href={Resume} target='_blank' rel='noreferrer' 
        className='sidebarBtn'>
          <AiOutlineSolution />
        </a>
        <a href='https://github.com/plezo' 
        className='sidebarBtn'>
          <AiOutlineGithub />
        </a>
        <a href='https://www.linkedin.com/in/Plezo' 
        className='sidebarBtn'>
          <AiOutlineLinkedin />
        </a>
        <div className='h-24 border-solid border-l border-ivory'></div>
      </div>
    </div>
  )
}
