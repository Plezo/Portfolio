import { useState } from 'react'

import Project from '../../components/Main/Project'
import Footer from '../../components/Main/Footer'
import Panel from '../../components/Panel/Panel'

import { BsMoonFill } from 'react-icons/bs'

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
            Software Engineer
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <div id='projectList'>
          <Project />
          <Project />
          <Project />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default MainPage;