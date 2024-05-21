import React from 'react';
import successIcon from '../assets/checkmark.svg';
import '../styles/ModalComponentStyles.scss';

const SuccessOverlay = ({ onClose }) => {
  const handleClose = () => {
    onClose && onClose(); 
  };

  return (
    <div className="success-overlay feedback-form-container">
        <div className='success-container '>
      <div className="success-content">
        <img src={successIcon} alt="Success Icon" className="error-icon" />
        <p className="success-message">Заявка успешно отправлена</p>
      </div>
      <button className="button-style-1 success-button" onClick={handleClose}>Закрыть</button>
      </div>
      </div>
  );
};

export default SuccessOverlay;
