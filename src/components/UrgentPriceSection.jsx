import React, { useEffect, useState } from 'react';
import SendRequestModal from './SendRequestModal';
import { ReactComponent as DownloadIcon } from '../assets/download-sharp.svg';
import listExcelFile from '../assets/list.xlsx';
import '../styles/UrgentPriceStyles.scss'; 

const UrgentPriceComponent = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleDownloadList = () => {
    window.location.href = listExcelFile; 
  };

  return (
    <div className="urgent-price-section">
      <div className="urgent-price-container">
          <p className="urgent-price-header-text">
          Хотите узнать точную цену своего проекта?
          </p>
          <p className="urgent-price-sub-header-text">
          Скачайте бриф и пришлите его нам всего в два клика!
          </p>
        <div className="urgent-price-download-block" onClick={handleDownloadList}>
          <p>Скачать</p>
          <DownloadIcon width="50" height="50" />
        </div>
        <button className="urgent-price-button button-style-3" onClick={openModal}>
          Отправить опрос
        </button>
      </div>
      {isModalOpen && (
  <SendRequestModal onClose={closeModal} />
)}
    </div>
  );
};

export default UrgentPriceComponent;
