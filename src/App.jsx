import { useState } from 'react'
import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Work from './components/Work'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'

function App() {

  return (
      <div>
        <Sidenav />
        <Main />
        <Skills />
        <Projects />
        <Work />
        <Education />
      </div>
  )
}

export default App
