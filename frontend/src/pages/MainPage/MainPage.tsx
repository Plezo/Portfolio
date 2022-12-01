import Sidebar from '../../components/Main/Sidebar'
import Intro from '../../components/Main/Intro'
import Projects from '../../components/Main/Projects'
import About from '../../components/Main/About'
import Contact from '../../components/Main/Contact'

function MainPage() {

  return (
    <div 
    className={`
    bg-slate-600 w-full h-full
    `}>
      <Sidebar />
      <Intro />
      <Projects/>
      <About />
      <Contact />
    </div>
  );
}

export default MainPage;