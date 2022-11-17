import { 
  AiOutlineHome, AiOutlineApartment, AiOutlineSmile, AiOutlinePhone, 
  AiOutlineSolution, AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";

export default function Header() {
  const Resume = require('../../assets/Resume.pdf')
  return (
    <div className='
    flex flex-col justify-between
    fixed px-12 z-10
    text-ivory h-full
    '>
      <div className='
      flex flex-col gap-4 text-xl items-center
      '>
        <div className='h-24 border-solid border-l border-ivory'></div>
        <a href='#intro' 
        className='sidebarBtn'>
          <AiOutlineHome />
        </a>
        <a href="#projects" 
        className='sidebarBtn'>
          <AiOutlineApartment />
        </a>
        <a href="#about" 
        className='sidebarBtn'>
          <AiOutlineSmile />
        </a>
        <a href="#contact" 
        className='sidebarBtn'>
          <AiOutlinePhone />
        </a>
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
