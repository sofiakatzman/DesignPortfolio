import React from "react"
import { useParams } from "react-router-dom"
import PROJECTSDATA from "../ProjectsData"
import "./ProjectDetail.css"

function ProjectDetail() {
  const { name } = useParams()

  // Find the project by name in the PROJECTSDATA array
  const project = PROJECTSDATA.find((proj) => proj.name === name)

  if (!project) {
    return <div>Project not found.</div>
  }

  return (
      <div className="project-details">
        <div className="project-header"> 
          <div className="case-study-card"> 
            <h1 className="project-name">{project.name}</h1>
            <h2 className="project-case-study-header">CASE STUDY</h2>
            <p className="project-case-study"><b>Problem: </b> {project.caseStudy.problem}</p>
            <p className="project-case-study"><b>Solution: </b> {project.caseStudy.solution}</p>
          </div>
        </div>
        <div className="project-features"> 
          <h2>Key Features</h2>
          <ul>
            {project.details.keyFeatures.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
            <br/>
          <h2>Technology Stack</h2>
          <ul>
            {project.details.technologyStack.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
    
      
   
        <div className="project-achievements">
          <h2>Achievements</h2>
          <ul>
            {project.details.achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>
      </div>
  )
}


export default ProjectDetail