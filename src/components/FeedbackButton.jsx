import React, { useState } from 'react';
import '../styles/ButtonComponent.scss';
import { ReactComponent as MessageButtonIcon } from '../assets/message-button.svg';
import { ReactComponent as MessageButtonVkIcon } from '../assets/message-button-vk.svg';
import { ReactComponent as MessageButtonTgIcon } from '../assets/message-button-tg.svg';
import { ReactComponent as MessageButtonWhatsappIcon } from '../assets/message-button-whats.svg';
import { ReactComponent as MessageButtonCloseIcon } from '../assets/message-button-close.svg';

const FeedbackButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeButton, setActiveButton] = useState(null);

  const toggleFeedback = () => {
    setIsOpen(!isOpen);
    setActiveButton(activeButton === null ? 'close' : null); 
  };

  const handleButtonClick = (button) => {
    setActiveButton(button);
    switch (button) {
      case 'vk':
        window.open('https://vk.com/adinex2008', '_blank');
        break;
      case 'telegram':
        window.open('https://t.me/LIMS_lT_lab', '_blank');
        break;
      case 'whatsapp':
        window.open('https://wa.me/74954450058', '_blank');
        break;
      default:
        break;
    }
  };

  return (
    <div className={`feedback-button-container ${isOpen ? 'open' : 'closed'}`}>
      <div className="feedback-buttons">
        {isOpen && (
          <>
            <button onClick={() => handleButtonClick('vk')}>
              <MessageButtonVkIcon className="button-icon" />
            </button>
            <button onClick={() => handleButtonClick('telegram')}>
              <MessageButtonTgIcon className="button-icon" />
            </button>
            <button onClick={() => handleButtonClick('whatsapp')}>
              <MessageButtonWhatsappIcon className="button-icon" />
            </button>
          </>
        )}
      </div>
      <button className="feedback-main-button" onClick={toggleFeedback}>
        {activeButton ? <MessageButtonCloseIcon className="button-icon" /> : <MessageButtonIcon className="button-icon" />}
      </button>
    </div>
  );
};

export default FeedbackButton;
