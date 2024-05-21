import React from 'react';
import FeedbackFormComponent from '../FeedbackFormComponent';
import ButtonComponent from '../ButtonComponent';
import logo from '../../assets/logo.svg';
import youtubeIcon from '../../assets/mdi_youtube.svg';
import vkIcon from '../../assets/ri_vk-fill.svg';
import tgIcon from '../../assets/telgram.svg';
import illustration from '../../assets/illustration.svg';

const DesktopHeader = ({ openModal, scrollToSection, isModalOpen, closeModal, headerRef }) => {
  const scrollTo = (section) => scrollToSection(section);

  return (
    <div className='header-overlay'>
      <header ref={headerRef}>
        <div className="header-container">
          <img
            className="header-logo"
            src={logo}
            alt="Logo"
            onClick={() => scrollTo('about')}
          />
          <div className='header-center'>
            <div className="header-top">
              <div className="header-block-1">
                <a className="header-text-2" href="tel:+74954450058">+7 (495) 445-00-58</a>
              </div>
              <div className="header-block-2">
                <div className="header-container-svg">
                  <a href="https://www.youtube.com/@user-pj8vl6hz8b" target="_blank" rel="noopener noreferrer">
                    <img src={youtubeIcon} alt="YouTube" />
                  </a>
                </div>
                <div className="header-container-svg">
                  <a href="https://vk.com/adinex2008" target="_blank" rel="noopener noreferrer">
                    <img src={vkIcon} alt="VKontakte" />
                  </a>
                </div>
                <div className="header-container-svg">
                  <a href="https://t.me/LIMS_lT_lab" target="_blank" rel="noopener noreferrer">
                    <img src={tgIcon} alt="Telegram" />
                  </a>
                </div>
              </div>
            </div>
            <div className="header-bottom">
              <ul className="header-list">
                <li onClick={() => scrollTo('program')}>О программе</li>
                <li onClick={() => scrollTo('features')}>Возможности</li>
                <li onClick={() => scrollTo('pricing')}>Цены</li>
                <li onClick={() => scrollTo('offer')}>Спец. предложение</li>
                <li onClick={() => scrollTo('cases')}>Кейсы</li>
                <li onClick={() => scrollTo('details')}>Детально о Lims</li>
                <li onClick={() => scrollTo('news')}>Новости</li>
              </ul>
            </div>
          </div>
          <div className='header-right'>
            <ButtonComponent className="button-style-1 color-button header-button" onClick={openModal}>
              Заказать консультацию
            </ButtonComponent>
            <img src={illustration} className="header-svg-3" alt="Illustration" />
          </div>
        </div>
      </header>
      {isModalOpen && <FeedbackFormComponent onClose={closeModal} />}
    </div>
  );
}

export default DesktopHeader;
