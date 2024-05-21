import React from 'react';
import FeedbackFormComponent from '../FeedbackFormComponent';
import ButtonComponent from '../ButtonComponent';
import youtubeIcon from '../../assets/mdi_youtube.svg';
import vkIcon from '../../assets/ri_vk-fill.svg';
import tgIcon from '../../assets/telgram.svg';
import logo from '../../assets/logo.svg';

const TabletHeader = ({ openModal, scrollToSection, isModalOpen, closeModal }) => (
  <div className='header-overlay'>  <header>
      <div className="header-container">
      <div className="tablet-header">
      <div className="tablet-header-top">
        <div className="tablet-header-logo-block">
        <img className="header-logo" src={logo} alt="SVG" onClick={() => scrollToSection('about')}/>
        <div className='tablet-header-blocks'>
        <div className="tablet-header-block-1">
            <span className="tablet-header-text-2">  <a href="tel:+74954450058">+7 (495) 445-00-58</a>
</span>
          </div>
          <div className="tablet-header-block-2">
            <a href="https://www.youtube.com/@user-pj8vl6hz8b" target="_blank" rel="noopener noreferrer">
         <img className="tablet-header-container-svg" src={youtubeIcon} alt="SVG" />
         </a>
         <a href="https://vk.com/adinex2008" target="_blank" rel="noopener noreferrer">
          <img className="tablet-header-container-svg" src={vkIcon} alt="SVG" />
          </a>
          <a href="https://t.me/LIMS_lT_lab" target="_blank" rel="noopener noreferrer">
          <img className="tablet-header-container-svg" src={tgIcon} alt="SVG" />
          </a>
          </div>
          </div>
          </div>
        <ButtonComponent className="button-style-1 color-button" onClick={openModal}>
          Заказать консультацию
        </ButtonComponent>
      </div>
      <div className="tablet-header-line"></div>
      <div className="tablet-header-bottom">
        <ul className="tablet-header-list">
      <li onClick={() => scrollToSection('program')}>О программе</li>
      <li onClick={() => scrollToSection('features')}>Возможности</li>
      <li onClick={() => scrollToSection('pricing')}>Цены</li>
      <li onClick={() => scrollToSection('offer')}>Спец. предложение</li>
      <li onClick={() => scrollToSection('cases')}>Кейсы</li>
      <li onClick={() => scrollToSection('details')}>Детально о Lims</li>
      <li onClick={() => scrollToSection('news')}>Новости</li>
        </ul>
      </div>
    </div>
          </div>
          </header>
  {isModalOpen && <FeedbackFormComponent onClose={closeModal} />}
</div>
);

export default TabletHeader;
