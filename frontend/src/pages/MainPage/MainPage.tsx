import { useEffect, useState } from 'react'

import Footer from '../../components/Main/Footer'
import Panel from '../../components/Panel/Panel'

import { BsMoonFill } from 'react-icons/bs'

function MainPage() {

  const [mode, setMode] = useState('d');
  const [showContactPanel, setShowContactPanel] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark' || theme === 'light')
      setMode(theme)
  }, [])

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(mode === 'dark' ? 'light' : 'dark')
    root.classList.add(mode)

    localStorage.setItem('theme', mode);
  }, [mode])

  return (
    <div className={`h-screen bg-ivory dark:bg-dark-purple`}
    >
      { 
        // showContactPanel ? <Panel setShowContactPanel={setShowContactPanel}/> : null
      }

      <header className='flex pt-6 px-20'>
        <button 
        className={`${mode} 
        bg-royal-purple w-10 h-10 rounded-2xl text-ivory text-xl
        flex items-center align-center justify-center
        mr-auto hover:bg-opacity-80 active:bg-dark-purple
        dark:bg-lavender dark:text-dark-purple dark:active:bg-royal-purple
        `}
        onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
        >
          <BsMoonFill />
        </button>
        <button 
        className={`${mode} 
        text-royal-purple font-semibold ml-auto text-2xl
        hover:text-opacity-80 focus:text-dark-purple
        dark:text-lavender dark:focus:text-royal-purple
        `}
        onClick={() => setShowContactPanel(true)}>
          Contact
        </button>
      </header>

      <div 
      className='flex flex-col align-middle mx-36 mt-28'
      >
        <div
        className='w-8/12'
        >
          <h1
          className={`${mode} 
          flex-auto text-8xl font-bold text-royal-purple 
          dark:text-lavender
          `}
          >
            Patryk
          </h1>
          <h2
          className={`${mode} 
          flex-auto text-3xl font-medium text-dark-purple mt-12
          dark:text-ivory
          `}
          >
            Software Engineer & Full Stack Developer
          </h2>
          <p
          className={`${mode} 
          flex-auto w-7/12 text-dark-purple leading-6 mt-6
          dark:text-ivory
          `}
          >
            I'm a software engineer who develops full-stack applications. I'm always working on projects
            to expand my skillset as well as working with people who help me grow as a software engineer.
            The entire process fascinates me from the planning stages of a project to laying the finishing touches.
            And most importantly, I'm in love with the process of learning new things.
          </p>
          <button
          className={`${mode} 
          bg-royal-purple text-ivory h-12 w-32 mt-8 rounded-3xl transition-all
          hover:bg-opacity-80 active:bg-dark-purple
          dark:bg-lavender dark:text-dark-purple
          dark:active:bg-royal-purple
          `}
          >
            Resume/CV
          </button>
        </div>
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default MainPage;