import React from 'react';
import SectionTitle from './SectionTitle';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PartnerSlide from './PartnerSlide';
import partnersSlide1 from '../assets/partners-slide-1.png';
import partnersSlide2 from '../assets/partners-slide-2.png';
import partnersSlide3 from '../assets/partners-slide-3.png';
import '../styles/OurPartnersSectionStyles.scss';

const MobileOurPartnersSection = () => {
  const CustomPrevArrow = (props) => (
    <div
    className="mobile-slick-prev"
    onClick={props.onClick}
    style={{ left: "20px", top: '50%', zIndex: 1, position: 'absolute' }}
  >
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
        <path d="M19.0795 25.792C19.2978 25.792 19.5213 25.7057 19.6889 25.5381C20.024 25.2029 20.024 24.6545 19.6889 24.3193L8.21738 12.8479L19.5213 1.54395C19.8564 1.20879 19.8564 0.660351 19.5213 0.325195C19.1861 -0.00996017 18.6377 -0.00996017 18.3025 0.325195L6.38418 12.2385C6.04902 12.5736 6.04902 13.1221 6.38418 13.4572L18.465 25.5381C18.6377 25.7107 18.856 25.792 19.0795 25.792Z" fill="black"/>
      </svg>
    </div>
  );
  const CustomNextArrow = (props) => (
    <div
    className="mobile-slick-next"
    onClick={props.onClick}
    style={{ right: "20px", top: '50%', zIndex: 1, position: 'absolute' }}
  >
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
    <path d="M6.9928 0.0742188C6.77444 0.0742188 6.55098 0.160547 6.3834 0.328125C6.04824 0.663281 6.04824 1.21172 6.3834 1.54687L17.8549 13.0184L6.55098 24.3223C6.21582 24.6574 6.21582 25.2059 6.55098 25.541C6.88613 25.8762 7.43457 25.8762 7.76973 25.541L19.6881 13.6277C20.0232 13.2926 20.0232 12.7441 19.6881 12.409L7.60723 0.328125C7.43457 0.155469 7.21624 0.0742188 6.9928 0.0742188Z" fill="black"/>
  </svg>
    </div>
  );
  const partnersContent = [
    {
      logoSrc: partnersSlide1,
      title: 'АО "Калуга Астрал"',
      text: '+7 (800) 700-86-68',
      website: 'astral.ru',
    },
    {
      logoSrc: partnersSlide2,
      title: 'ООО «Клеверенс»',
      text: '+7 (495) 662 98-03',
      website: 'cleverence.ru',
    },
    {
      logoSrc: partnersSlide3,
      title: 'ООО "1С"',
      text: '+7 (495) 737-92-57',
      website: '1c.ru',
    },
    {
      logoSrc: partnersSlide1,
      title: 'АО "Калуга Астрал"',
      text: '+7 (800) 700-86-68',
      website: 'astral.ru',
    },
    {
      logoSrc: partnersSlide2,
      title: 'ООО «Клеверенс»',
      text: '+7 (495) 662 98-03',
      website: 'cleverence.ru',
    },
    {
      logoSrc: partnersSlide3,
      title: 'ООО "1С"',
      text: '+7 (495) 737-92-57',
      website: '1c.ru',
    },
  ];
  const sliderSettings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className="mobile-parnters-section">
      <div className='mobile-partners-container'>
        <SectionTitle title="Наши партнеры:" />
        <p className='mobile-partners-container-text'>Мы сотрудничаем только с передовыми компаниями, которые упрощают работу множеству предприятий и специалистов. Наше партнёрство предполагает предоставление программ и услуг высокого качества.</p>
      </div>
      <Slider {...sliderSettings} className='mobile-partners-container-slider'>
          {partnersContent.map((partner, index) => (
            <PartnerSlide key={index} {...partner} />
          ))}
        </Slider>
    </div>
  );
};

const TabletOurPartnersSection = () => {
  const CustomPrevArrow = (props) => (
    <div
    className="tablet-slick-prev"
    onClick={props.onClick}
    style={{ left: "-5%", top: '45%', zIndex: 1, position: 'absolute' }}
  >
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
        <path d="M19.0795 25.792C19.2978 25.792 19.5213 25.7057 19.6889 25.5381C20.024 25.2029 20.024 24.6545 19.6889 24.3193L8.21738 12.8479L19.5213 1.54395C19.8564 1.20879 19.8564 0.660351 19.5213 0.325195C19.1861 -0.00996017 18.6377 -0.00996017 18.3025 0.325195L6.38418 12.2385C6.04902 12.5736 6.04902 13.1221 6.38418 13.4572L18.465 25.5381C18.6377 25.7107 18.856 25.792 19.0795 25.792Z" fill="black"/>
      </svg>
    </div>
  );
  
  const CustomNextArrow = (props) => (
    <div
    className="tablet-slick-next"
    onClick={props.onClick}
    style={{ right: "-5%", top: '45%', zIndex: 1, position: 'absolute' }}
  >
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
    <path d="M6.9928 0.0742188C6.77444 0.0742188 6.55098 0.160547 6.3834 0.328125C6.04824 0.663281 6.04824 1.21172 6.3834 1.54687L17.8549 13.0184L6.55098 24.3223C6.21582 24.6574 6.21582 25.2059 6.55098 25.541C6.88613 25.8762 7.43457 25.8762 7.76973 25.541L19.6881 13.6277C20.0232 13.2926 20.0232 12.7441 19.6881 12.409L7.60723 0.328125C7.43457 0.155469 7.21624 0.0742188 6.9928 0.0742188Z" fill="black"/>
  </svg>
    </div>
  );
  
  const partnersContent = [
    {
      logoSrc: partnersSlide1,
      title: 'АО "Калуга Астрал"',
      text: '+7 (800) 700-86-68',
      website: 'astral.ru',
    },
    {
      logoSrc: partnersSlide2,
      title: 'ООО «Клеверенс»',
      text: '+7 (495) 662 98-03',
      website: 'cleverence.ru',
    },
    {
      logoSrc: partnersSlide3,
      title: 'ООО "1С"',
      text: '+7 (495) 737-92-57',
      website: '1c.ru',
    },
    {
      logoSrc: partnersSlide1,
      title: 'АО "Калуга Астрал"',
      text: '+7 (800) 700-86-68',
      website: 'astral.ru',
    },
    {
      logoSrc: partnersSlide2,
      title: 'ООО «Клеверенс»',
      text: '+7 (495) 662 98-03',
      website: 'cleverence.ru',
    },
    {
      logoSrc: partnersSlide3,
      title: 'ООО "1С"',
      text: '+7 (495) 737-92-57',
      website: '1c.ru',
    },
  ];
  
  const sliderSettings = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className="tablet-parnters-section">
      <div className='tablet-partners-container'>
        <SectionTitle title="Наши партнеры:" />
        <p className='tablet-partners-container-text'>Мы сотрудничаем только с передовыми компаниями, которые упрощают работу множеству предприятий и специалистов. Наше партнёрство предполагает предоставление программ и услуг высокого качества.</p>
        </div>
        <Slider {...sliderSettings} className='tablet-partners-container-slider'>
          {partnersContent.map((partner, index) => (
            <PartnerSlide key={index} {...partner} />
          ))}
        </Slider>
      
    </div>
  );
};

const OurPartnersSection = () => {
  
  const CustomPrevArrow = (props) => (
    <div
      className="slick-prev"
      onClick={props.onClick}
      style={{ left: "10px", top: '45%', zIndex: 1 }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
        <path d="M19.0795 25.792C19.2978 25.792 19.5213 25.7057 19.6889 25.5381C20.024 25.2029 20.024 24.6545 19.6889 24.3193L8.21738 12.8479L19.5213 1.54395C19.8564 1.20879 19.8564 0.660351 19.5213 0.325195C19.1861 -0.00996017 18.6377 -0.00996017 18.3025 0.325195L6.38418 12.2385C6.04902 12.5736 6.04902 13.1221 6.38418 13.4572L18.465 25.5381C18.6377 25.7107 18.856 25.792 19.0795 25.792Z" fill="black"/>
      </svg>
    </div>
  );
  const CustomNextArrow = (props) => (
    <div
      className="slick-next"
      onClick={props.onClick}
      style={{ right: "25px", top: '45%', zIndex: 1 }}
    >
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
    <path d="M6.9928 0.0742188C6.77444 0.0742188 6.55098 0.160547 6.3834 0.328125C6.04824 0.663281 6.04824 1.21172 6.3834 1.54687L17.8549 13.0184L6.55098 24.3223C6.21582 24.6574 6.21582 25.2059 6.55098 25.541C6.88613 25.8762 7.43457 25.8762 7.76973 25.541L19.6881 13.6277C20.0232 13.2926 20.0232 12.7441 19.6881 12.409L7.60723 0.328125C7.43457 0.155469 7.21624 0.0742188 6.9928 0.0742188Z" fill="black"/>
  </svg>
    </div>
  );
  const partnersContent = [
    {
      logoSrc: partnersSlide1,
      title: 'АО "Калуга Астрал"',
      text: '+7 (800) 700-86-68',
      website: 'astral.ru',
    },
    {
      logoSrc: partnersSlide2,
      title: 'ООО «Клеверенс»',
      text: '+7 (495) 662 98-03',
      website: 'cleverence.ru',
    },
    {
      logoSrc: partnersSlide3,
      title: 'ООО "1С"',
      text: '+7 (495) 737-92-57',
      website: '1c.ru',
    },
    {
      logoSrc: partnersSlide1,
      title: 'АО "Калуга Астрал"',
      text: '+7 (800) 700-86-68',
      website: 'astral.ru',
    },
    {
      logoSrc: partnersSlide2,
      title: 'ООО «Клеверенс»',
      text: '+7 (495) 662 98-03',
      website: 'cleverence.ru',
    },
    {
      logoSrc: partnersSlide3,
      title: 'ООО "1С"',
      text: '+7 (495) 737-92-57',
      website: '1c.ru',
    },
  ];
  
  const sliderSettings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className="our-partners-section">
      {window.innerWidth >= 769 && (
        <div className="parnters-section">
      <div className='partners-container'>
        <SectionTitle title="Наши партнеры:" />
        <p className='partners-container-text'>Мы сотрудничаем только с передовыми компаниями, которые упрощают работу множеству предприятий и специалистов. Наше партнёрство предполагает предоставление программ и услуг высокого качества.</p>
        <Slider {...sliderSettings} className='partners-container-slider'>
          {partnersContent.map((partner, index) => (
            <PartnerSlide key={index} {...partner} />
          ))}
        </Slider>
      </div>
    </div>
      )}

      {window.innerWidth < 431 && <MobileOurPartnersSection />}

      {window.innerWidth >= 431 && window.innerWidth < 769 && <TabletOurPartnersSection />}
    </div>
  );
};

export default OurPartnersSection;
