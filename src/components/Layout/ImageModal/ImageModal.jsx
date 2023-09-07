import React from 'react';
import './ImageModal.css';

const ImageModal = ({ imageUrl, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <img src={imageUrl} alt="Modal" />
        <button className="close-button" onClick={onClose}>
          X
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
