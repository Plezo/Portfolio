// import { useEffect, useState } from 'react'

import Sidebar from '../../components/Main/Sidebar'
import Intro from '../../components/Main/Intro'
import Projects from '../../components/Main/Projects'
import About from '../../components/Main/About'
import Contact from '../../components/Main/Contact'

function MainPage() {

  return (
    <div 
    className={`
    bg-black
    `}>
      <Sidebar />
      <Intro />
      <Projects/>
      <About />
      <Contact />

      {/* <div className='flex flex-col xl:flex-row'> */}
        {/* <Intro mode={mode} /> */}
        {/* <Skills mode={mode} /> */}
      {/* </div> */}
      {/* <Footer mode={mode} /> */}
    </div>
  );
}

export default MainPage;