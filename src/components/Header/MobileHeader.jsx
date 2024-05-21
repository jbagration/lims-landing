import React, { useState, useRef } from 'react';
import FeedbackFormComponent from '../FeedbackFormComponent';
import ButtonComponent from '../ButtonComponent';
import youtubeIcon from '../../assets/mdi_youtube.svg';
import vkIcon from '../../assets/ri_vk-fill.svg';
import tgIcon from '../../assets/telgram.svg';
import mobileLogo from '../../assets/logo.svg';

const MobileMenuModal = ({ openModal, scrollToSection, mobileMenuRef, toggleMenu }) => (
  <div className="mobile-menu-modal" ref={mobileMenuRef}>
    <ul className="mobile-menu-list">
      <li onClick={() => scrollToSection('program')}>О программе</li>
      <li onClick={() => scrollToSection('features')}>Возможности</li>
      <li onClick={() => scrollToSection('pricing')}>Цены</li>
      <li onClick={() => scrollToSection('offer')}>Спец. предложение</li>
      <li onClick={() => scrollToSection('cases')}>Кейсы</li>
      <li onClick={() => scrollToSection('details')}>Детально о Lims</li>
      <li onClick={() => scrollToSection('news')}>Новости</li>
    </ul>
    <ButtonComponent className="mobile-menu-button button-style-1" onClick={() => { openModal(); toggleMenu(); }}>
      Связаться
    </ButtonComponent>
  </div>
  
);

const MobileHeader = ({ openModal, isModalOpen, closeModal }) => {
  const [isMenuOpen, setMenuOpen] = useState(false); 
  const [headerHeight, setHeaderHeight] = useState(0);
  const [windowWidth] = useState(window.innerWidth);

  const isDesktop = windowWidth >= 769;
  const isTablet = windowWidth >= 431 && windowWidth < 769;
  const isMobile = windowWidth < 431;

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    window.location.hash = sectionId;

    if (section) {
      let offset = 0;

      if (isDesktop) {
        offset = headerHeight;
      } else if (isTablet) {
        offset = 0;
      } else if (isMobile) {
        offset = 0;
      }

      const scrollTop = section.offsetTop - offset;
      window.scrollTo({
        top: scrollTop,
        behavior: 'smooth',
      });

      setMenuOpen(false);
      document.body.style.overflow = 'auto';
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className='header-overlay'>  <header>
      <div className={`header-container ${isMenuOpen ? 'menu-open' : ''}`}>
        <div className={`mobile-header`}>
          <div className='mobile-header-logo-block'>
            <img src={mobileLogo} alt="mobile-header-logo" className="mobile-header-logo" onClick={() => scrollToSection('about')} />
            <div className="mobile-header-blocks">
              <div className="mobile-header-block-1">
                <span className="mobile-header-text-2"> <a href="tel:+74954450058">+7 (495) 445-00-58</a> </span>
              </div>
              <div className="mobile-header-block-2">
                <a href="https://www.youtube.com/@user-pj8vl6hz8b" target="_blank" rel="noopener noreferrer">
                  <img className="mobile-header-container-svg" src={youtubeIcon} alt="SVG" />
                </a>
                <a href="https://vk.com/adinex2008" target="_blank" rel="noopener noreferrer">
                  <img className="mobile-header-container-svg" src={vkIcon} alt="SVG" />
                </a>
                <a href="https://t.me/LIMS_lT_lab" target="_blank" rel="noopener noreferrer">
                  <img className="mobile-header-container-svg" src={tgIcon} alt="SVG" />
                </a>
              </div>
            </div>
          </div>
          <button className="mobile-menu" onClick={toggleMenu}>
            <div className="menu-icon">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
          </button>
          {isMenuOpen && <MobileMenuModal openModal={openModal} scrollToSection={scrollToSection} toggleMenu={toggleMenu} />}
        </div>
      </div>
      </header>
  {isModalOpen && <FeedbackFormComponent onClose={closeModal} />}
</div>
  );
};

export default MobileHeader;
