import React from 'react';
import { Link } from 'react-router-dom';
import './ClientProjects.css'

function ClientProjects() {
  return (
    <div className="client-project">
      <h1>Client Projects</h1>
      <div className="client-project-buttons">
        <Link to="/design/clientprojects/CafeTucano">
          <button className="client-project-button">Cafe Tucano</button>
        </Link>
        <Link to="/design/clientprojects/BaeTails">
          <button className="client-project-button">Bae Tails</button>
        </Link>
        {/* Add more buttons as needed */}
      </div>
    </div>
  );
}

export default ClientProjects;