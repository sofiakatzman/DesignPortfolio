import React from "react";
import { useParams } from "react-router-dom";
import CLIENT_PROJECTS_DATA from "../ClientProjectsData"; // Import your client projects data
import "./ClientProjectDetail.css";

function ClientProjectDetail() {
  const { name } = useParams();

  // Find the client project by name in the CLIENT_PROJECTS_DATA array
  const clientProject = CLIENT_PROJECTS_DATA.find((proj) => proj.name === name);

  if (!clientProject) {
    return <div>Client project not found.</div>;
  }

  return (
    <div className="client-project-details">
      <div className="client-project-header">
        <h1 className="client-project-name">{clientProject.name}</h1>
        <h2 className="client-project-case-study-header">CASE STUDY</h2>
        <p className="client-project-case-study">
          <b>Client Problem: </b> {clientProject.clientProblem}
        </p>
        <p className="client-project-case-study">
          <b>Overall Scope: </b> {clientProject.overallScope}
        </p>
      </div>
      <div className="client-project-details">
        <h2>Completed Tasks</h2>
        <ul>
          {clientProject.completedTasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
        <br />
        <h2>Related Skills</h2>
        <ul>
          {clientProject.relatedSkills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
        <br />
        <h2>Favorite Part</h2>
        <p>{clientProject.favoritePart}</p>
      </div>
      <div className="client-project-images">
        <h2>Images</h2>
        <div className="image-gallery">
          {clientProject.images.map((image, index) => (
            <img key={index} src={image} alt={`Image ${index}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ClientProjectDetail;