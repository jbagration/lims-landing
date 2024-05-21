import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import ButtonComponent from './ButtonComponent';
import PriceFormComponent from './PriceFormComponent';
import '../styles/PriceCardStyles.scss';

const Portal = ({ children }) => {
  const portalContainerRef = useRef(null);
  const [container] = useState(() => {
    const div = document.createElement('div');
    portalContainerRef.current = div;
    return div;
  });

  useEffect(() => {
    if (!portalContainerRef.current) {
      return;
    }

    document.body.appendChild(portalContainerRef.current);
    return () => {
      document.body.removeChild(portalContainerRef.current);
    };
  }, []);

  return container ? ReactDOM.createPortal(children, container) : null;
};

const styles = ['style-1', 'style-2', 'style-3'];

const PriceCard = ({ title, text1, text2, buttonText }) => {
  const [hoveredStyle, setHoveredStyle] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getRandomStyle = () => {
    const randomIndex = Math.floor(Math.random() * styles.length);
    return styles[randomIndex];
  };

  const handleMouseEnter = () => {
    setHoveredStyle(getRandomStyle());
  };

  const handleMouseLeave = () => {
    setHoveredStyle(null);
  };

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {isModalOpen && (
        <Portal>
          <PriceFormComponent text1={text1} text2={text2} onClose={handleCloseModal} />
        </Portal>
      )}

      <div
        className={`price-card-container ${hoveredStyle}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className={`price-card ${hoveredStyle}`}>
          <h3 className="price-card-title">{title}</h3>
          <p className="price-card-text">{text1}</p>
          <p className="price-card-text">{text2}</p>
          <ButtonComponent
            className={`price-card-button button-style-1`}
            onClick={handleButtonClick}
          >
            {buttonText}
          </ButtonComponent>
        </div>
      </div>
    </>
  );
};

export default PriceCard;
