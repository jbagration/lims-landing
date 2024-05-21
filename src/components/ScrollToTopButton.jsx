import React, { useState, useEffect } from 'react';
import '../styles/ButtonComponent.scss';
import { ReactComponent as ButtonIcon } from '../assets/button.svg'; 

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300 && !isVisible) {
      setIsVisible(true);
    } else if (window.scrollY <= 300 && isVisible) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVisible]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className={`scroll-to-top-button ${isVisible ? 'show' : 'hide'}`}>
      <button onClick={scrollToTop}>
        <ButtonIcon className="button-icon" />
      </button>
    </div>
  );
};

export default ScrollToTopButton;
