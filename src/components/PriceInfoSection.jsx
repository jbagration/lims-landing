import React from 'react';
import PriceCard from './PriceCard';
import SectionTitle from './SectionTitle';
import priceAtom1 from '../assets/price-atom-1.svg';
import priceAtom2 from '../assets/price-atom-2.svg';
import mobilePriceAtom1 from '../assets/mobile-price-atom-1.svg';
import '../styles/PriceInfoSectionStyles.scss';
import Slider from 'react-slick';

const MobilePriceInfoSection = () => {
  const priceData = [
    [
      { title: "LIMS IT-LAB", text1: "Протоколы испытаний", text2: '115 000 руб.', buttonText: 'Заказать' },
      { title: "LIMS IT-LAB", text1: "СМК", text2: '40 250 руб.', buttonText: 'Заказать' },
      { title: "LIMS IT-LAB", text1: "ВЛК", text2: '172 500 руб.', buttonText: 'Заказать' },
    ],
    [
      { title: "LIMS IT-LAB", text1: "Реактивы и расходные материалы", text2: '17 250 руб.', buttonText: 'Заказать' },
      { title: "LIMS IT-LAB", text1: "Градуировочные характеристики", text2: '11 500 руб.', buttonText: 'Заказать' },
      { title: "LIMS IT-LAB", text1: "Акт верификации", text2: '11 500 руб.', buttonText: 'Заказать' },
    ],
    [
      { title: "LIMS IT-LAB", text1: "Базовый блок", text2: '287 500 руб.', buttonText: 'Заказать' },
    ],
  ];
  
  const CustomPrevArrow = (props) => (
    <div {...props} className="custom-prev-arrow">
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
        <path d="M6.92053 0.207031C6.70217 0.207031 6.47871 0.293359 6.31113 0.460938C5.97598 0.796094 5.97598 1.34453 6.31113 1.67969L17.7826 13.1512L6.47871 24.4551C6.14355 24.7902 6.14355 25.3387 6.47871 25.6738C6.81387 26.009 7.3623 26.009 7.69746 25.6738L19.6158 13.7605C19.951 13.4254 19.951 12.877 19.6158 12.5418L7.53496 0.460938C7.3623 0.288281 7.14397 0.207031 6.92053 0.207031Z" fill="black"/>
      </svg>
    </div>
  );
  
  const CustomNextArrow = (props) => (
    <div {...props} className="custom-next-arrow">
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
        <path d="M19.0795 25.793C19.2978 25.793 19.5213 25.7066 19.6889 25.5391C20.024 25.2039 20.024 24.6555 19.6889 24.3203L8.21738 12.8488L19.5213 1.54492C19.8564 1.20977 19.8564 0.661327 19.5213 0.326172C19.1861 -0.00898361 18.6377 -0.00898361 18.3025 0.326172L6.38418 12.2395C6.04902 12.5746 6.04902 13.123 6.38418 13.4582L18.465 25.5391C18.6377 25.7117 18.856 25.793 19.0795 25.793Z" fill="black"/>
      </svg>
    </div>
  );
  
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: false,
    swipeToSlide: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };
  
  return (
    <div className="mobile-price-info-section-container">
      <img src={mobilePriceAtom1} alt="price-atom-1" className="mobile-price-atom-1" />
      <SectionTitle title="Цены:" />
      <div className="mobile-price-cards-container">
      <Slider {...settings}>
  {priceData.map((group, index) => (
    <div key={index}>
      <div>
        {group.map((card, cardIndex) => (
          <PriceCard
            key={cardIndex}
            className='style-1'
            title={card.title}
            text1={card.text1}
            text2={card.text2}
            buttonText={card.buttonText}
          />
        ))}
      </div>
    </div>
  ))}
</Slider>
      </div>
    </div>
  );
};
const PriceInfoSection = () => {
  return (
    <div id="pricing" className="price-info">
      {window.innerWidth >= 431 && (
        <div className="price-info-container">
          <img src={priceAtom1} alt="price-atom-1" className="price-atom-1" />
          <img src={priceAtom2} alt="price-atom-2" className="price-atom-2" />
          <SectionTitle title="Цены:" />
          <div className="price-cards-container">
            <PriceCard className='style-1' title="LIMS IT-LAB" text1="Протоколы испытаний" text2='115 000 руб.' buttonText='Заказать' />
            <PriceCard title="LIMS IT-LAB" text1="СМК" text2='40 250 руб.' buttonText='Заказать' />
            <PriceCard title="LIMS IT-LAB" text1="ВЛК" text2='172 500 руб.' buttonText='Заказать' />
            <PriceCard title="LIMS IT-LAB" text1="Реактивы и расходные материалы" text2='17 250 руб.' buttonText='Заказать' />
            <PriceCard title="LIMS IT-LAB" text1="Градуировочные характеристики" text2='11 500 руб.' buttonText='Заказать' />
            <PriceCard title="LIMS IT-LAB" text1="Акт верификации" text2='11 500 руб.' buttonText='Заказать' />
            <PriceCard title="LIMS IT-LAB" text1="Базовый блок" text2='287 500 руб.' buttonText='Заказать' />
          </div>
        </div>
      )}

      {window.innerWidth < 431 && <MobilePriceInfoSection />}

    </div>
  );
};

export default PriceInfoSection;
