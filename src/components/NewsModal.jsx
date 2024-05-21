import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import '../styles/ModalComponentStyles.scss';

const NewsModalComponent = ({ onClose, modalContent }) => {
    const contentRef = useRef();
  
    useEffect(() => {
      document.body.style.overflow = 'hidden';
  
      return () => {
        document.body.style.overflow = 'auto';
      };
    }, []);
  
  return (
    <div  className="news-document-modal-overlay">
      <div className="news-document-modal">
        <button className="news-document-modal-close-button" onClick={onClose}>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
  <path d="M23 6L6 23M6 6L23 23" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
        </button>
        <div className="news-document-modal-content" ref={contentRef}>
          <div className="scrollable-content" dangerouslySetInnerHTML={{ __html: modalContent }} />
          <button className="document-button button-style-4" onClick={onClose}>
            Закрыть
          </button>
          </div>
      </div>
    </div>
  );
};

NewsModalComponent.propTypes = {
  onClose: PropTypes.func.isRequired,
  modalContent: PropTypes.string.isRequired,
};

export default NewsModalComponent;