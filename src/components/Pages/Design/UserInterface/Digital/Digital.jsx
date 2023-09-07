import React from "react";
import DigitalCard from "./DigitalCard/DigitalCard";
import DIGITALDATA from './DigitalData';
import './Digital.css'

const Digital = () => {
  const handleDownload = (material) => {
    window.open(material.link, "_blank", "noopener noreferrer");
  };

  return (
    <div className="digital">
      <h1>DIGITAL</h1>
      <div className="digital-cards">
        {DIGITALDATA.map((project, index) => (
          <DigitalCard
            key={index}
            clientName={project.clientName}
            objective={project.objective}
            materials={project.materials}
            onDownload={handleDownload}
          />
        ))}
      </div>
    </div>
  );
};

export default Digital;
