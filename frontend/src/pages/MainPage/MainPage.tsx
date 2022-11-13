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
    <div 
    className={`
    xl:h-screen w-[101vw] bg-ivory dark:bg-dark-purple overflow-hidden
    `}>
      <Header mode={mode} setMode={setMode} />
      <div className='flex flex-col xl:flex-row'>
        <Intro mode={mode} />
        <Skills mode={mode} />
      </div>
      <Footer mode={mode} />
    </div>
  );
}

export default MainPage;