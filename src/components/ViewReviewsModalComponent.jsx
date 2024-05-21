import React, { useState } from 'react';
import review1 from '../assets/review-1.jpg';
import review2 from '../assets/review-2.jpg';
import '../styles/ModalComponentStyles.scss';

const ViewReviewsModalComponent = ({ children, onClose }) => {
  const specificImages = [
    review1,
    review2
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % specificImages.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + specificImages.length) % specificImages.length);
  };

  const isFirstImage = currentImageIndex === 0;
  const isLastImage = currentImageIndex === specificImages.length - 1;

  return (
    <div className="certificate-modal-overlay">
      <div className="certificate-modal">
        <button className="certificate-modal-close-button" onClick={onClose}>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
  <path d="M23 6L6 23M6 6L23 23" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg> </button>
<div className="certificate-modal-buttons">
{isFirstImage ? (
    <button className="certificate-modal-prev-button" style={{ visibility: 'hidden' }}>
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
  <g cliPath="url(#clip0_542_1845)">
    <path d="M19.0795 25.792C19.2978 25.792 19.5213 25.7057 19.6889 25.5381C20.024 25.2029 20.024 24.6545 19.6889 24.3193L8.21738 12.8479L19.5213 1.54395C19.8564 1.20879 19.8564 0.660351 19.5213 0.325195C19.1861 -0.00996017 18.6377 -0.00996017 18.3025 0.325195L6.38418 12.2385C6.04902 12.5736 6.04902 13.1221 6.38418 13.4572L18.465 25.5381C18.6377 25.7107 18.856 25.792 19.0795 25.792Z" fill="black"/>
  </g>
  <defs>
    <clipPath id="clip0_542_1845">
      <rect width="26" height="26" fill="white" transform="matrix(0 -1 1 0 0 26)"/>
    </clipPath>
  </defs>
</svg>      </svg>
    </button>
  ) : (
    <button className="certificate-modal-prev-button" onClick={handlePrevImage}>
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
  <g clipPath="url(#clip0_542_1845)">
    <path d="M19.0795 25.792C19.2978 25.792 19.5213 25.7057 19.6889 25.5381C20.024 25.2029 20.024 24.6545 19.6889 24.3193L8.21738 12.8479L19.5213 1.54395C19.8564 1.20879 19.8564 0.660351 19.5213 0.325195C19.1861 -0.00996017 18.6377 -0.00996017 18.3025 0.325195L6.38418 12.2385C6.04902 12.5736 6.04902 13.1221 6.38418 13.4572L18.465 25.5381C18.6377 25.7107 18.856 25.792 19.0795 25.792Z" fill="black"/>
  </g>
  <defs>
    <clipPath id="clip0_542_1845">
      <rect width="26" height="26" fill="white" transform="matrix(0 -1 1 0 0 26)"/>
    </clipPath>
  </defs>
</svg>      </svg>
    </button>
  )}
          {!isLastImage && (
            <button className="certificate-modal-next-button" onClick={handleNextImage}>
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
  <g clipPath="url(#clip0_542_1538)">
    <path d="M6.9928 0.0742188C6.77444 0.0742188 6.55098 0.160547 6.3834 0.328125C6.04824 0.663281 6.04824 1.21172 6.3834 1.54687L17.8549 13.0184L6.55098 24.3223C6.21582 24.6574 6.21582 25.2059 6.55098 25.541C6.88613 25.8762 7.43457 25.8762 7.76973 25.541L19.6881 13.6277C20.0232 13.2926 20.0232 12.7441 19.6881 12.409L7.60723 0.328125C7.43457 0.155469 7.21624 0.0742188 6.9928 0.0742188Z" fill="black"/>
  </g>
  <defs>
    <clipPath id="clip0_542_1538">
      <rect width="26" height="26" fill="white" transform="matrix(0 -1 1 0 0 26)"/>
    </clipPath>
  </defs>
</svg>          </button>
          )}
        </div>

        
        <div className="certificate-modal-image-container">
          
          <img
            className="certificate-modal-image"
            src={specificImages[currentImageIndex]}
            alt={`certificate-${currentImageIndex}`}
          />
          
        </div>
        
        {children}
      </div>
      
    </div>
    
  );
};

export default ViewReviewsModalComponent;
