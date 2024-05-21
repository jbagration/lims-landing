import React, { useState, useEffect } from 'react';
import specialOfferImage from '../assets/gift-promotion.png';
import giftAtom1 from '../assets/gift-atom-1.svg';
import giftAtom2 from '../assets/gift-atom-2.svg';
import giftAtom3 from '../assets/gift-atom-3.svg';
import giftAtom4 from '../assets/gift-atom-4.svg';
import ButtonComponent from './ButtonComponent';
import RequestDemoComponent from './RequestDemoComponent';
import GiftModalComponent from './GiftModalComponent';
import '../styles/SpecialOffer.scss';

const SpecialOffer = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [demoModalVisible, setDemoModalVisible] = useState(false);
  
    const handleOpenModal = () => {
      setModalVisible(true);
    };
    const handleCloseModal = () => {
      setModalVisible(false);
    };
    const handleOpenDemoModal = () => {
      setDemoModalVisible(true);
    };
    const handleCloseDemoModal = () => {
      setDemoModalVisible(false);
    };
  
    useEffect(() => {
      const handleBodyOverflow = () => {
        document.body.style.overflow = modalVisible || demoModalVisible ? 'hidden' : 'auto';
      };
    
      handleBodyOverflow(); 
    
      window.addEventListener('resize', handleBodyOverflow); 
    
      return () => {
        document.body.style.overflow = 'auto';
        window.removeEventListener('resize', handleBodyOverflow);
      };
    }, [modalVisible, demoModalVisible]);
    
  return (
    <div id='offer' className="special-offer-container">
              <img src={giftAtom1} alt="gift-atom-1" className="gift-atom-1" />
              <img src={giftAtom2} alt="gift-atom-2" className="gift-atom-2" />
              <img src={giftAtom3} alt="gift-atom-3" className="gift-atom-3" />
              <img src={giftAtom4} alt="gift-atom-4" className="gift-atom-4" />
        <div className="special-offer-container-details">
      <div className="special-offer-image">
        <img src={specialOfferImage} alt="Специальное предложение" />
      </div>
      <div className="special-offer-details">
        <h2>Специальное предложение</h2>
        <p>Предлагаем попробовать <span>бесплатный тариф</span> «ЛИМС6»</p>
        <div className="special-offer-buttons">
        <ButtonComponent className="button-style-3 gift-demo-button" onClick={handleOpenDemoModal}>
          Запросить демонстрацию
        </ButtonComponent>
        <ButtonComponent className="button-style-4 gift-button" onClick={handleOpenModal}>
        Подробнее о тарифе   
      </ButtonComponent>
        </div>
      </div>
      </div>
      {modalVisible && (
        <GiftModalComponent onClose={handleCloseModal}>
        </GiftModalComponent>
      )}
      {demoModalVisible && (
        <RequestDemoComponent onClose={handleCloseDemoModal} />
      )}
    </div>
  );
};

export default SpecialOffer;
