import React from 'react';
import errorIcon from '../assets/error-line.svg';
import '../styles/ModalComponentStyles.scss';

const ErrorOverlay = ({ message, onClose }) => {
  const handleOverlayClick = () => {
    onClose && onClose(); 
  };

  return (
    <div className="error-overlay" onClick={handleOverlayClick}>
      <div className="error-message">
        <img src={errorIcon} alt="Error Icon" className="error-icon" />
        <span>{message}</span>
      </div>
    </div>
  );
};

export default ErrorOverlay;
