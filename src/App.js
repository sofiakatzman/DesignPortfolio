import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from "./components/Layout/Header/Header"
import Home from "./components/Pages/Home/Home"
import Projects from "./components/Pages/Projects/Projects"
import ContactMe from './components/Pages/ContactMe/ContactMe'
import ProjectDetail from './components/Pages/Projects/ProjectsDetail/ProjectDetail'
import Design from './components/Pages/Design/Design'
import UserInterface from './components/Pages/Design/UserInterface/UserInterface'


function App() {
  return (
    <div>
      <Router>
        <Header />        
        <Routes>
          {/* <Route path="/projects" element={<Projects />} /> */}
          <Route path="/design" element={<Design />} /> 
          {/* paths for all project pages will go here */}
            <Route path="/design/ui" element={<UserInterface />} /> 
            
          <Route path="/project/:name" element={<ProjectDetail />} />
          <Route path="/contactme" element={<ContactMe />} />
          <Route path="/" element={<Home />} /> 
        </Routes>     
      </Router>
    </div>
  )
}

export default App
