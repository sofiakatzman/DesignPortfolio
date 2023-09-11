import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from "./components/Layout/Footer/Footer"
import Home from "./components/Pages/Home/Home"
import ContactMe from './components/Pages/ContactMe/ContactMe'
import ProjectDetail from './components/Pages/Projects/ProjectsDetail/ProjectDetail'
import ClientProjectDetail from './components/Pages/Design/ClientProjects/ClientProjectDetail/ClientProjectDetail'
import AboutMe from './components/Pages/AboutMe/AboutMe'
import Gallery from './components/Pages/Gallery/Gallery'

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/design" element={<Gallery />} /> 
            <Route path="/design/clientprojects/:name" element={<ClientProjectDetail />} />
          <Route path="/project/:name" element={<ProjectDetail />} />
          <Route path="/aboutme" element={<AboutMe />} /> 
          <Route path="/contactme" element={<ContactMe />} />
          <Route path="/" element={<Home />} />  
        </Routes>     
        <Footer />
      </Router>

    </div>
  )
}

export default App
