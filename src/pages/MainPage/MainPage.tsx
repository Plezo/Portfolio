import { useState } from 'react'

import Project from '../../components/Main/Project'
import Footer from '../../components/Main/Footer'
import Panel from '../../components/Panel/Panel'

import { BsMoonFill } from 'react-icons/bs'

import projects from './ProjectData.js'
import './MainPage.css'

function MainPage() {

  const [darkMode, setDarkMode] = useState(true);
  const [showContactPanel, setShowContactPanel] = useState(false);

  return (
    <>
      { showContactPanel && 
        <Panel setShowContactPanel={setShowContactPanel}/>
      }

      <header>
        <button id='modeButton'>
          <BsMoonFill />
        </button>
        <button id='meetingButton' onClick={() => setShowContactPanel(true)}>
          Contact
        </button>
      </header>

      <div id='main'>
        <div id='intro'>
          <h1>
            Patryk
          </h1>
          <h2>
            Software Engineer & Full Stack Developer
          </h2>
          <p>
            I'm a software engineer who develops full-stack applications. I'm always working on projects
            to expand my skillset as well as working with people who help me grow as a software engineer.
            The entire process fascinates me from the planning stages of a project to laying the finishing touches.
            And most importantly, I'm in love with the process of learning new things.
          </p>
        </div>

        <div id='projectList'>
          {projects.map((obj: any): JSX.Element => {
            return <Project info={obj}/>
          })}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default MainPage;