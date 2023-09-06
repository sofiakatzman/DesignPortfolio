import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from "./components/Layout/Footer/Footer"
import Header from "./components/Layout/Header/Header"
import Home from "./components/Pages/Home/Home"
import Projects from "./components/Pages/Projects/Projects"
import ContactMe from './components/Pages/ContactMe/ContactMe'
import ProjectDetail from './components/Pages/Projects/ProjectsDetail/ProjectDetail'


function App() {
  
  //scrolling navigation hide/view event listener
  let prevScrollPos = window.pageYOffset

  window.addEventListener("scroll", () => { 
    const currentScrollPos = window.pageYOffset

    if (prevScrollPos > currentScrollPos) {
      document.querySelector(".footer").classList.remove("hide")
    } else {
      document.querySelector(".footer").classList.add("hide")
    }

    prevScrollPos = currentScrollPos

})
  return (
    <div>
      <Router>
        <Header />        
        <Routes>
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:name" element={<ProjectDetail />} />
          <Route path="/contactme" element={<ContactMe />} />
          <Route path="/" element={<Home />} /> 
        </Routes>     
        <Footer />
      </Router>
    </div>
  )
}

export default App
