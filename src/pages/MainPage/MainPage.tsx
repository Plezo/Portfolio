import Panel from '../../components/Panel/Panel'
import Project from '../../components/Main/Project'
import Footer from '../../components/Main/Footer'
import './MainPage.css'

function MainPage() {
  return (
    <>
      <header>
        <button id='modeButton'>
          M
        </button>
        <button id='meetingButton'>
          Book a meeting
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

      {/* <Panel /> */}
    </>
  );
}

export default MainPage;