import React, { useState, useEffect, useRef } from 'react';
import { ReactComponent as DownloadIcon } from '../assets/download-sharp.svg';
import limsPresentationPdf from '../assets/lims-presentation.pdf';
import listExcelFile from '../assets/list.xlsx';
import youtubeIcon from '../assets/mdi_youtube.svg';
import vkIcon from '../assets/ri_vk-fill.svg';
import tgIcon from '../assets/telgram.svg';
import mobileLogo from '../assets/logo.svg';
import mailIcon from '../assets/mail.svg';
import '../styles/FooterStyles.scss';

const Footer = () => {
  const isDesktop = window.innerWidth >= 769;
  const isTablet = window.innerWidth >= 431 && window.innerWidth < 769;
  const isMobile = window.innerWidth < 431;
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef(null);
  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.clientHeight);
    }
  }, [window.innerWidth]);
  
  const handleDownloadPresentation = () => {
    window.open(limsPresentationPdf, '_blank');
  };

  const handleDownloadList = () => {
    window.location.href = listExcelFile;
  };

  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset =192; 
      window.scrollTo({
        top: section.offsetTop - offset,
        behavior: 'smooth',
      });
    }
    window.location.hash = sectionId;
  };
  
  if (isDesktop) {
    return (
      <footer>
      <div className="footer-container" ref={headerRef}>
        <div className='footer-under-container'>
        <div className="left-block">
          <img src={mobileLogo} alt="SVG" />
        </div>
        <div className="right-block">
          <div className="upper-part">
            <ul className="upper-part-list">
            <li onClick={() => scrollToSection('about')}>О компании</li>
      <li onClick={() => scrollToSection('program')}>О программе</li>
      <li onClick={() => scrollToSection('features')}>Возможности</li>
      <li onClick={() => scrollToSection('pricing')}>Цены</li>
      <li onClick={() => scrollToSection('introduction')}>Внедрение</li>
      <li onClick={() => scrollToSection('cases')}>Кейсы</li>
      <li onClick={() => scrollToSection('details')}>Детально о Lims</li>
      <li onClick={() => scrollToSection('news')}>Новости</li>            </ul>
          </div>
          <div className="upper-part-line"></div>
          <div className="lower-part">
            <div className="lower-part-text">
              <div className="lower-part-years">© 2009–{currentYear}, </div>
              <div className="lower-part-details">
                Реквизиты:<br />
                ООО «Компьютерные программы». <br />Все материалы являются объектами авторского права.  <br />Запрещается копирование, распространение или иное<br /> использование информации.  <br />
                ИНН 5019020842,<br /> ОГРН 1085019001495,<br /> КПП 501901001.<br />
                Юридический адрес: 142900, Московская Область, <br />г. Кашира, ул. Стрелецкая, д. 70, литера а7, офис 20
              </div>
              <div className="lower-part-studio">
  Разработано студией{' '}
  <a
    href="https://webteamstorm.ru/services/landing/"
    target="_blank"
    rel="noreferrer" 
  >
    WebTeamStorm
  </a>
</div>
            </div>
            <div className="lower-part-contact-info">
              <div className="lower-part-block-1">
                <span className="lower-part-text-3">Мы в соц. сетях:</span>
                <a href="https://www.youtube.com/@user-pj8vl6hz8b" target="_blank" rel="noopener noreferrer">
                <img src={youtubeIcon} alt="YouTube" />
              </a>
              <a href="https://vk.com/adinex2008" target="_blank" rel="noopener noreferrer">
              <img src={vkIcon} alt="VKontakte" />
              </a>      
              <a href="https://t.me/LIMS_lT_lab" target="_blank" rel="noopener noreferrer">
              <img src={tgIcon} alt="Telegram" />
              </a>            
              </div>
              <div className="lower-part-block-2">
                <span className="lower-part-text-1">Наш номер: </span>
                <span className="lower-part-text-2">  <a href="tel:+74954450058">+7 (495) 445-00-58</a>
</span>
              </div>
              <div className="lower-part-block-2">
                <span className="lower-part-text-1"><img src={mailIcon} alt="mail icon" /></span>
                <a href="mailto:info@it-lims.ru" className="lower-part-text-2">info@it-lims.ru</a>
              </div>
              <div className='lower-part-feature-blocks'>
                <div className="lower-part-feature-block-1" onClick={handleDownloadPresentation}>
                  <p>Скачайте презентацию о LIMS IT-LAB</p>
                  <DownloadIcon width="50" height="50" />
                </div>
                <div className="lower-part-feature-block-2" onClick={handleDownloadList}>
                  <p>Скачайте опросник, чтобы узнать цену проекта</p>
                  <DownloadIcon width="50" height="50" />
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      </footer>
    );
  } else if (isTablet) {
    return (
      <div className="tablet-footer-container">
                  <div className="tablet-upper-part">
            <ul className="tablet-upper-part-list">
            <li onClick={() => scrollToSection('about')}>О компании</li>
      <li onClick={() => scrollToSection('program')}>О программе</li>
      <li onClick={() => scrollToSection('features')}>Возможности</li>
      <li onClick={() => scrollToSection('pricing')}>Цены</li>
      <li onClick={() => scrollToSection('introduction')}>Внедрение</li>
      <li onClick={() => scrollToSection('cases')}>Кейсы</li>
      <li onClick={() => scrollToSection('details')}>Детально о Lims</li>
      <li onClick={() => scrollToSection('news')}>Новости</li>
            </ul>
          </div>
          <div className="tablet-upper-part-line"></div>
          <div className='tablet-lower-part'>
        <div className="tablet-left-block">
          <img src={mobileLogo} alt="SVG" />
          <div className="tablet-lower-part">
            <div className="tablet-lower-part-text">
              <div className="tablet-lower-part-details">
                Реквизиты:<br />
                ООО «Компьютерные программы». <br />Все материалы являются объектами авторского права. Запрещается копирование, распространение или иное использование информации.<br />
                ИНН 5019020842,<br /> ОГРН 1085019001495,<br /> КПП 501901001.<br />
                Юридический адрес 142900, Московская Область, г. Кашира, ул. Стрелецкая, д. 70, литера а7, офис 20
              </div>
              <div className="tablet-lower-part-years">© 2009–{currentYear}, </div>
              <div className="tablet-lower-part-studio">Разработано студией   <a
    href="https://webteamstorm.ru/services/landing/"
    target="_blank"
    rel="noreferrer" 
  >
    WebTeamStorm
  </a></div>
            </div>
          </div>
        </div>
        <div className="tablet-right-block">
          <div className="tablet-lower-part-contact-info">
            <div className="tablet-lower-part-block-1">
              <span className="tablet-lower-part-text-3">Мы в соц. сетях:</span>
              <a href="https://www.youtube.com/@user-pj8vl6hz8b" target="_blank" rel="noopener noreferrer">
<img src={youtubeIcon} alt="SVG" />
              </a>
              <a href="https://vk.com/adinex2008" target="_blank" rel="noopener noreferrer">
              <img src={vkIcon} alt="SVG" />
              </a>          
              <a href="https://t.me/LIMS_lT_lab" target="_blank" rel="noopener noreferrer">
              <img src={tgIcon} alt="Telegram" />
              </a>        
              </div>
            <div className="tablet-lower-part-block-2">
              <span className="tablet-lower-part-text-1">Наш номер: </span>
              <span className="tablet-lower-part-text-2">  <a href="tel:+74954450058">+7 (495) 445-00-58</a>
</span>
            </div>
            <div className="tablet-lower-part-block-2">
            <span className="tablet-lower-part-text-1"><img src={mailIcon} alt="mail icon" /></span>
              <a href="mailto:info@it-lims.ru" className="tablet-lower-part-text-2">info@it-lims.ru</a>
            </div>
            <div className='tablet-lower-part-feature-blocks'>
              <div className="tablet-lower-part-feature-block-1" onClick={handleDownloadPresentation}>
                <p>Скачайте презентацию о LIMS IT-LAB</p>
                <DownloadIcon width="50" height="50" />
              </div>
              <div className="tablet-lower-part-feature-block-2" onClick={handleDownloadList}>
                <p>Скачайте опросник, чтобы узнать цену проекта</p>
                <DownloadIcon width="50" height="50" />
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    );
  } else if (isMobile) {
    return (
      <div className="mobile-footer-section">
      <div className="mobile-footer-container">
        <div className="mobile-upper-part">
        <img src={mobileLogo} alt="mobile-footer-logo" className="mobile-footer-logo" />
          </div>
          <div className="mobile-lower-part">
            <div className="mobile-left-block">
            <div className="mobile-lower-part-text">
              <div className="mobile-lower-part-details">
                Реквизиты:<br />
                ООО «Компьютерные программы». <br />Все материалы являются объектами авторского права. Запрещается копирование, распространение или иное использование информации. <br />
                ИНН 5019020842,<br /> ОГРН 1085019001495,<br /> КПП 501901001.<br />
                Юридический адрес 142900, Московская Область, г. Кашира, ул. Стрелецкая, д. 70, литера а7, офис 20
              </div>
              <div className="mobile-lower-part-years">© 2009–{currentYear}, </div>
              <div className="mobile-lower-part-studio">Разработано студией <a
    href="https://webteamstorm.ru/services/landing/"
    target="_blank"
    rel="noreferrer" 
  >
    WebTeamStorm
  </a></div>
            </div>
            </div>
          
        
        <div className="mobile-right-block">
          <div className="mobile-lower-part-contact-info">
          <div className="mobile-lower-part-block-1">
              <span className="mobile-lower-part-text-3">Мы в соц. сетях:</span>
              <a href="https://www.youtube.com/@user-pj8vl6hz8b" target="_blank" rel="noopener noreferrer">
<img src={youtubeIcon} alt="SVG" />
              </a>
              <a href="https://vk.com/adinex2008" target="_blank" rel="noopener noreferrer">
              <img src={vkIcon} alt="SVG" />
              </a>
              <a href="https://t.me/LIMS_lT_lab" target="_blank" rel="noopener noreferrer">
              <img src={tgIcon} alt="SVG" />
              </a>
            </div>
            <div className="mobile-lower-part-block-2">
            <span className="mobile-lower-part-text-1">Наш номер: </span>
              <span className="mobile-lower-part-text-2">  <a href="tel:+74954450058">+7 (495) 445-00-58</a>
</span>
            </div>
            <div className="mobile-lower-part-block-2">
            <span className="mobile-lower-part-text-1"><img src={mailIcon} alt="mail icon" /></span>
              <a href="mailto:info@it-lims.ru" className="mobile-lower-part-text-2">info@it-lims.ru</a>
            </div>

            <div className='mobile-lower-part-feature-blocks'>
              <div className="mobile-lower-part-feature-block-1" onClick={handleDownloadPresentation}>
                <p>Скачайте презентацию о LIMS IT-LAB</p>
                <DownloadIcon width="50" height="50" />
              </div>
              <div className="mobile-lower-part-feature-block-2" onClick={handleDownloadList}>
                <p>Скачайте опросник, чтобы узнать цену проекта</p>
                <DownloadIcon width="50" height="50" />
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>
        </div>
    );
  }
};

export default Footer;