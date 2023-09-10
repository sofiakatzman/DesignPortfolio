import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from "./components/Layout/Header/Header"
import Home from "./components/Pages/Home/Home"
import Projects from "./components/Pages/Projects/Projects"
import ContactMe from './components/Pages/ContactMe/ContactMe'
import ProjectDetail from './components/Pages/Projects/ProjectsDetail/ProjectDetail'
import Design from './components/Pages/Design/Design'
import UserInterface from './components/Pages/Design/UserInterface/UserInterface'
import ClientProjects from './components/Pages/Design/ClientProjects/ClientProjects'
import ClientProjectDetail from './components/Pages/Design/ClientProjects/ClientProjectDetail/ClientProjectDetail'
import Digital from './components/Pages/Design/UserInterface/Digital/Digital'
import AboutMe from './components/Pages/AboutMe/AboutMe'
import Gallery from './components/Pages/Gallery/Gallery'
function App() {
  return (
    <div>
      <Router>
        <Header />        
        <Routes>
          {/* <Route path="/projects" element={<Projects />} /> */}
          <Route path="/design" element={<Gallery />} /> 
          {/* paths for all project pages will go here */}
            <Route path="/design/ui" element={<UserInterface />} /> 
            <Route path="/design/clientprojects" element={<ClientProjects />} />
            <Route path="/design/clientprojects/:name" element={<ClientProjectDetail />} />
            <Route path="/design/digital" element={<Digital />} />
          <Route path="/project/:name" element={<ProjectDetail />} />
          <Route path="/aboutme" element={<AboutMe />} /> 
          <Route path="/contactme" element={<ContactMe />} />
          <Route path="/" element={<Home />} /> 
        </Routes>     
      </Router>
    </div>
  )
}

export default App
