import React, { useState } from 'react';
import './UserInterface.css';
import USERINTERFACEDATA from './UserInterfaceData.js';
import UserInterfaceCard from './UserInterfaceCard/UserInterfaceCard';
import ImageModal from '../../../Layout/ImageModal/ImageModal'; // Import the ImageModal component

function UserInterface() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const openModal = (imageUrl) => {
    setModalImage(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setModalImage(null);
    setIsModalOpen(false);
  };

  return (
    <div className="ui-projects">
      <h1>USER INTERFACE PROJECTS</h1><br/>
      {USERINTERFACEDATA.map((project) => {
        return <UserInterfaceCard key={project.name} project={project} openModal={openModal} />;
      })}

      {isModalOpen && <ImageModal imageUrl={modalImage} onClose={closeModal} />}
      <p><i>Click on photo to enlarge.</i></p>
    </div>
  );
}

export default UserInterface;
