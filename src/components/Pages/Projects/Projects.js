import React from "react"
import PROJECTSDATA from "./ProjectsData"
import { Link } from "react-router-dom"
import "./Projects.css" 

function Projects() {
    const projectsArray = Object.values(PROJECTSDATA)

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
      }

    return (
        
        <div className="projects">
            
        <h2 className="title">PROJECTS</h2><br/>
        <div className="project-container">

            {projectsArray.map((project) => (
                
                <div className="project-card" key={project.name}>
                  
                    <img src={project.image} alt={`${project.name}`} /> 
                    <h2 className="project-name">{project.name.toUpperCase()}</h2><br/>
                    <h3>{project.summary}</h3>
                    <p>{project.stack}</p>

                    <div className="project-technologies-container">
                            {project.technologies.map((tech) => (
                                <span key={tech} className="project-technologies">{tech}</span>
                            ))}     
                    </div>
                    
                    <div className="buttons-container">
                        
                    <a href={project.github}>GitHub</a>
                    <a href={project.walkthrough}>Demo</a>
                    </div>
                    
                    {project.livedemo && <a href={project.livedemo} className="live" >Live</a>}
                    <Link
                        to={`/project/${project.name}`}
                        onClick={scrollToTop} // Scroll to top when clicking the link
                        className="view-case-study"
                        >
                        Case Study
                    </Link> 

                </div>
            ))}
        </div></div>
    )
}

export default Projects