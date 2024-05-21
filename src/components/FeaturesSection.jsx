import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import CardWithIcons from './CardWithIcons';
import SectionTitle from './SectionTitle';
import { ReactComponent as GearIcon } from '../assets/mdi_gear-outline.svg';
import { ReactComponent as TabletGearIcon } from '../assets/tablet-mdi_gear-outline.svg';
import { ReactComponent as StreamlineModule } from '../assets/streamline_module-puzzle-3.svg';
import { ReactComponent as TabletStreamlineModule } from '../assets/tablet-streamline_module-puzzle-3.svg';
import { ReactComponent as IconRectangular } from '../assets/icon-park-outline_rectangular-circular-connection.svg';
import { ReactComponent as TabletIconRectangular } from '../assets/tablet-icon-park-outline_rectangular-circular-connection.svg';
import { ReactComponent as PepiconsPencilCalendar } from '../assets/pepicons-pencil_calendar.svg';
import { ReactComponent as TabletPepiconsPencilCalendar } from '../assets/tablet-pepicons-pencil_calendar.svg';
import { ReactComponent as IconArrow } from '../assets/icon_Arrow.svg';
import { ReactComponent as TabletIconArrow } from '../assets/tablet-icon_Arrow.svg';
import { ReactComponent as FluentDocumentApproval } from '../assets/fluent-mdl2_document-approval.svg';
import { ReactComponent as TabletFluentDocumentApproval } from '../assets/tablet-fluent-mdl2_document-approval.svg';
import { ReactComponent as BarcodeThin } from '../assets/ph_barcode-thin.svg';
import { ReactComponent as TabletBarcodeThin } from '../assets/tablet-ph_barcode-thin.svg';
import featuresAtom1 from '../assets/features-atom-1.png';
import featuresAtom2 from '../assets/features-atom-2.png';
import featuresAtom3 from '../assets/features-atom-3.svg';
import mobileFeaturesAtom1 from '../assets/mobile-features-atom-1.svg';
import '../styles/FeaturesSectionStyles.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const FeaturesSection = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const isDesktop = windowWidth >= 431;
  const isMobile = windowWidth < 431;

  const cardsData = [
    { icon: <TabletGearIcon />, text: 'Автоматизация и повышение эффективности основных лабораторных процессов. И кратное сокращение бумажного документооборота лаборатории' },
    { icon: <TabletStreamlineModule />, text: 'Помощник в планировании, постановки задач и отслеживании сроков. Платформа 1С, которую можно интегрировать с другими подразделениями организации.' },
    { icon: <TabletIconRectangular />, text: 'Организация единого рабочего пространства лаборатории как внутри одной лаборатории, так и при удаленных лабораторных филиалах.' },
    { icon: <TabletPepiconsPencilCalendar />, text: 'Сотрудник в едином окне может сформировать свой календарь, добавить туда свои текущие задачи и те, которые сформировались автоматически, и те, которые ему назначил руководитель.' },
    { icon: <TabletIconArrow />, text: 'Увеличилась скорость заполнения протоколов в 2 раза. Автоматически информация из журналов попадает в протокол, что позволяет избежать ошибок при ручном заполнении, а также ускоряет сам процесс формирования протоколов.' },
    { icon: <TabletFluentDocumentApproval />, text: 'Есть возможность формировать любые лабораторные журналы в системе и сколько угодно печатных форм к ним. А также подписывать это все ЭЦП.' },
    { icon: <TabletBarcodeThin />, text: 'Позволяет избежать срывов сроков по поверке оборудования, а также оперативно проводить контроль окончания срока службы оборудования, что позволяет принять меры для продления сроков или же списания и подготовки документов на закупку нового оборудования.' },
  ];

  function chunkArray(array, size) {
    const chunkedArr = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArr.push(array.slice(i, i + size));
    }
    return chunkedArr;
  }

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
  
  if (isDesktop) {
  return (
    <div id="features" className="features-section container">
      <div className="features-section-container">
        <img src={featuresAtom1} alt="features-atom-1" className="features-atom-1" />
        <img src={featuresAtom2} alt="features-atom-2" className="features-atom-2" />
        <img src={featuresAtom3} alt="features-atom-3" className="features-atom-3" />
        <SectionTitle title="Возможности решений:" />
        <div className="features-card-container">
          <CardWithIcons icon={<GearIcon />} text="Автоматизация и повышение эффективности основных лабораторных процессов. И кратное сокращение бумажного документооборота лаборатории" />
          <CardWithIcons icon={<StreamlineModule />} text="Помощник в планировании, постановки задач и отслеживании сроков. Платформа 1С, которую можно интегрировать с другими подразделениями организации." />
          <CardWithIcons icon={<IconRectangular />} text="Организация единого рабочего пространства лаборатории как внутри одной лаборатории, так и при удаленных лабораторных филиалах." />
          <CardWithIcons icon={<PepiconsPencilCalendar />} text="Сотрудник в едином окне может сформировать свой календарь, добавить туда свои текущие задачи и те, которые сформировались автоматически, и те, которые ему назначил руководитель." />
          <CardWithIcons icon={<IconArrow />} text="Увеличилась скорость заполнения протоколов в 2 раза. Автоматически информация из журналов попадает в протокол, что позволяет избежать ошибок при ручном заполнении, а также ускоряет сам процесс формирования протоколов." />
          <CardWithIcons icon={<FluentDocumentApproval />} text="Есть возможность формировать любые лабораторные журналы в системе и сколько угодно печатных форм к ним. А также подписывать это все ЭЦП." />
          <CardWithIcons icon={<BarcodeThin />} text="Позволяет избежать срывов сроков по поверке оборудования, а также оперативно проводить контроль окончания срока службы оборудования, что позволяет принять меры для продления сроков или же списания и подготовки документов на закупку нового оборудования." />
        </div>
      </div>
    </div>
  );}
 else if (isMobile) {
  return (  <div id="features" className="mobile-features-section-container">
  <img src={mobileFeaturesAtom1} alt="features-atom-1" className="mobile-features-atom-1" />
  <SectionTitle title="Возможности решений:" />
<div className="mobile-features-card-container">
  <Slider {...settings}>
    {chunkArray(cardsData, 3).map((chunk, index) => (
      <div key={index}>
        <div>
          {chunk.map((card, cardIndex) => (
            <CardWithIcons key={cardIndex} icon={card.icon} text={card.text} />
          ))}
        </div>
      </div>
    ))}
  </Slider>
</div>
  </div>)}
};

export default FeaturesSection;
