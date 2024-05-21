import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ButtonComponent from './ButtonComponent';
import NewsModalComponent from './NewsModal';
import Portal from './Portal';
import '../styles/NewsCardStyles.scss';

const NewsCard = ({ image, title, subtitle, modalContent }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
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
    <NewsModalComponent onClose={handleCloseModal} modalContent={modalContent} />
  </Portal>
)}

      <div
        className="news-card-container"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="news-content-container">
        <div className="news-image-container">
          <img src={image} alt="News" />
        </div>
        <div className="news-text-container">
          <div className="news-title">{title}</div>
          <div className="news-subtitle">
            {subtitle}
            {isHovered && (
            <div className="news-button-container">
              <ButtonComponent
                className="button-style-4"
                onClick={handleButtonClick}
              >
                Подробнее...
              </ButtonComponent>
            </div>
          )}
        </div>
      </div>
      </div> </div></>
  );
};

NewsCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  modalContent: PropTypes.node.isRequired,
};

export default NewsCard;