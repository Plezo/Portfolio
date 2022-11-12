import { useEffect, useState } from 'react'

import Intro from '../../components/Main/Intro'
import Header from '../../components/Main/Header'
import Skills from '../../components/Main/Skills'
import Footer from '../../components/Main/Footer'

function MainPage() {

  // Needs to start with a character (spaces mess with classnames)
  const [mode, setMode] = useState('d');

  // Loads dark mode that was stored
  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark' || theme === 'light')
      setMode(theme)
  }, [])

  // Stores dark mode info locally
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(mode === 'dark' ? 'light' : 'dark')
    root.classList.add(mode)

    localStorage.setItem('theme', mode);
  }, [mode])

  return (
    <div className={`h-[100vh] w-[101vw] bg-ivory dark:bg-dark-purple overflow-hidden`}>
      <Header mode={mode} setMode={setMode} />
      <div className='flex flex-col'>
        <Intro mode={mode} />
        <div className='bg-dark-purple dark:bg-ivory'>
          <Skills mode={mode} />
          <Footer mode={mode} />
        </div>
      </div>
    </div>
  );
}

export default MainPage;