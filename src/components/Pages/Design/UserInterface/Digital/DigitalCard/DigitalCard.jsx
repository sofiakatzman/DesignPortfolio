import React from 'react';
import './DigitalCard.css'; // Import the stylesheet

const DigitalCard = ({ clientName, objective, materials, onDownload }) => {
  return (
    <div className="digital-card">
      <div className="digital-card-details">
        <h2>{clientName}</h2> <br/>
        <p>{objective}</p> <br/>
        {materials.map((material, index) => (
          <button
            className="digital-project-button"
            key={index}
            onClick={() => onDownload(material)} // Call onDownload when the button is clicked
          >
            {material.text}
          </button>
        ))}        
      </div>
    </div>
  );
};

export default DigitalCard;
