import React from 'react';
import './UserInterfaceCard.css';

const UserInterfaceCard = ({ project, openModal }) => {
  return (
    <div className="ui-card">
      <div className="ui-card-image" onClick={() => openModal(project.image)}>
        <img src={project.image} alt={project.projectName} />
      </div>
      <div className="ui-card-details"> <br/>
        <h2>{project.projectName}</h2><br/>
        <div className="project-details">
          <h3>Problem</h3><br/>
          <p>{project.problemAddressed}</p><br/>
          <h3>Solution</h3><br/>
          <p>{project.problemsSolved}</p><br/>
          <h3>Technologies Used</h3><br/>
          <ul>
            {project.technologiesUsed.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserInterfaceCard;
