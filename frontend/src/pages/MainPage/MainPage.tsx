// import { useEffect, useState } from 'react'

import Sidebar from '../../components/Main/Sidebar'
import Intro from '../../components/Main/Intro'
import Projects from '../../components/Main/Projects'
import Footer from '../../components/Main/Footer'

function MainPage() {

  return (
    <div 
    className={`
    bg-black
    `}>
      <Sidebar />
      <Intro />
      <Projects/>

      {/* <div className='flex flex-col xl:flex-row'> */}
        {/* <Intro mode={mode} /> */}
        {/* <Skills mode={mode} /> */}
      {/* </div> */}
      {/* <Footer mode={mode} /> */}
    </div>
  );
}

export default MainPage;