import React, { useEffect, useState, useRef } from 'react';
import Slider from 'react-slick';
import SectionTitle from './SectionTitle';
import CaseCard from './CaseCard';
import DocumentModalComponent from './DocumentModalComponent';
import ViewReviewsModalComponent from './ViewReviewsModalComponent'; 
import ButtonComponent from './ButtonComponent';
import caseAtom1 from '../assets/case-atom-1.svg';
import caseAtom2 from '../assets/case-atom-2.svg';
import caseAtom3 from '../assets/case-atom-3.svg';
import tabletCaseAtom1 from '../assets/tablet-case-atom-1.png';
import tabletCaseAtom2 from '../assets/tablet-case-atom-2.png';
import caseLogo1 from '../assets/case-logo-1.png';
import caseLogo2 from '../assets/case-logo-2.png';
import caseLogo3 from '../assets/case-logo-3.png';
import '../styles/CasesSectionStyles.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CasesSection = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [reviewsModalVisible, setReviewsModalVisible] = useState(false);
  const [documentModalVisible, setDocumentModalVisible] = useState(false);

  const handleOpenReviewsModal = () => {
    setReviewsModalVisible(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseReviewsModal = () => {
    setReviewsModalVisible(false);
    document.body.style.overflow = 'auto';
  };

  const handleOpenDocumentModal = () => {
    setDocumentModalVisible(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseDocumentModal = () => {
    setDocumentModalVisible(false);
    document.body.style.overflow = 'auto';
  };

  const tabletSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const mobileSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const cases = [
    {
      logo: caseLogo1,
      title: 'АО "НИЦ АЭС"',
      subtitle: 'Автоматизация процесса расчета стоимости испытаний с помощью программного компонента Калькуляция.',
      listItems: [
        `Формирование входящих Анкет от Заказчиков для фиксации перечня работ для проведения испытаний`,
        `Калькуляция расчета сметы по «Анкете» и формирование печатных форм с детальными результатами расчёта сметы, договорной стоимости и затрат по ФОТ и материалам`,
        `Фиксация выполнения работ, рассчитанных по смете документом «Калькуляция», формирование выходных печатных форм «Акт выполненных работ», «детализация работ»`,
        `Хранение перечня работ, с указанием используемых ресурсов и алгоритмов расчета их затрат.`,
      ],
      buttonText: 'Подробнее...',
  
    },
    {
      logo: caseLogo2,
      title: 'НИИЖБ им. Гвоздева А.А.',
      subtitle: 'Внедрение ЛИМС в крупную организацию в которой существует несколько  филиалов.',
      listItems: [
        `Благодаря нашей системе ведения электронных журналов и протоколов, мы сократили временные затраты и автоматизировали расчеты.`,
        `Теперь вся работа по испытаниям прослеживается на всех этапах процесса.`,
        `Великолепная организация рабочего пространства в едином окне позволяет легко находить информацию о оборудовании, расходных материалах и объектах испытаний.`,
        `Мы также реализовали электронные протоколы с электронно-цифровой подписью.`,
        `Реализация электронных протоколов дает возможность сохранять экологические нормы, не создавая бумажный архив.`,
      ],
      buttonText: 'Подробнее...',
  
    },
    {
      logo: caseLogo3,
      title: 'АНО СЦКС',
      subtitle: 'Автоматизации учета лабораторного оборудования и контроля аттестаций сотрудников.',
      listItems: [
        `Внесение перечня оборудования.`,
        `Фиксация параметров.`,
        `Формирование календаря напоминаний.`,
        `Внесен перечень сотрудников и вся информация необходимая для ведения деятельности.`,
        `Автоматизирован учет контроля стажеров и назначения наставников.`,
        `Разработан механизм проведения тестирования сотрудников в самой системе.`,
      ],
      buttonText: 'Подробнее...',
    },
  ];
  const tabletCases = [
    {
      logo: caseLogo1,
      title: 'АО "НИЦ АЭС"',
      subtitle: 'Автоматизация процесса расчета стоимости испытаний с помощью программного компонента Калькуляция.',
      listItems: [
        `Формирование входящих Анкет от Заказчиков для фиксации перечня работ для проведения испытаний`,
        `Калькуляция расчета сметы по «Анкете» и формирование печатных форм с детальными результатами расчёта сметы, договорной стоимости и затрат по ФОТ и материалам`,
        `Фиксация выполнения работ, рассчитанных по смете документом «Калькуляция», формирование выходных печатных форм «Акт выполненных работ», «детализация работ»`,
        `Хранение перечня работ, с указанием используемых ресурсов и алгоритмов расчета их затрат.`,
      ],
      buttonText: 'Подробнее...',
  
    },
    {
      logo: caseLogo2,
      title: 'НИИЖБ им. Гвоздева А.А.',
      subtitle: 'Внедрение ЛИМС в крупную организацию в которой существует несколько  филиалов.',
      listItems: [
        `Благодаря нашей системе ведения электронных журналов и протоколов, мы сократили временные затраты и автоматизировали расчеты.`,
        `Теперь вся работа по испытаниям прослеживается на всех этапах процесса.`,
        `Великолепная организация рабочего пространства в едином окне позволяет легко находить информацию о оборудовании, расходных материалах и объектах испытаний.`,
        `Мы также реализовали электронные протоколы с электронно-цифровой подписью.`,
        `Реализация электронных протоколов дает возможность сохранять экологические нормы, не создавая бумажный архив.`,
      ],
      buttonText: 'Подробнее...',
  
    },
    {
      logo: caseLogo3,
      title: 'АНО СЦКС',
      subtitle: 'Автоматизации учета лабораторного оборудования и контроля аттестаций сотрудников.',
      listItems: [
        `Внесение перечня оборудования.`,
        `Фиксация параметров.`,
        `Формирование календаря напоминаний.`,
        `Внесен перечень сотрудников и вся информация необходимая для ведения деятельности.`,
        `Автоматизирован учет контроля стажеров и назначения наставников.`,
        `Разработан механизм проведения тестирования сотрудников в самой системе.`,
      ],
      buttonText: 'Подробнее...',
    },
    {
      logo: caseLogo1,
      title: 'АО "НИЦ АЭС"',
      subtitle: 'Автоматизация процесса расчета стоимости испытаний с помощью программного компонента Калькуляция.',
      listItems: [
        `Формирование входящих Анкет от Заказчиков для фиксации перечня работ для проведения испытаний`,
        `Калькуляция расчета сметы по «Анкете» и формирование печатных форм с детальными результатами расчёта сметы, договорной стоимости и затрат по ФОТ и материалам`,
        `Фиксация выполнения работ, рассчитанных по смете документом «Калькуляция», формирование выходных печатных форм «Акт выполненных работ», «детализация работ»`,
        `Хранение перечня работ, с указанием используемых ресурсов и алгоритмов расчета их затрат.`,
      ],
      buttonText: 'Подробнее...',
  
    },
    {
      logo: caseLogo2,
      title: 'НИИЖБ им. Гвоздева А.А.',
      subtitle: 'Внедрение ЛИМС в крупную организацию в которой существует несколько  филиалов.',
      listItems: [
        `Благодаря нашей системе ведения электронных журналов и протоколов, мы сократили временные затраты и автоматизировали расчеты.`,
        `Теперь вся работа по испытаниям прослеживается на всех этапах процесса.`,
        `Великолепная организация рабочего пространства в едином окне позволяет легко находить информацию о оборудовании, расходных материалах и объектах испытаний.`,
        `Мы также реализовали электронные протоколы с электронно-цифровой подписью.`,
        `Реализация электронных протоколов дает возможность сохранять экологические нормы, не создавая бумажный архив.`,
      ],
      buttonText: 'Подробнее...',
  
    },
    {
      logo: caseLogo3,
      title: 'АНО СЦКС',
      subtitle: 'Автоматизации учета лабораторного оборудования и контроля аттестаций сотрудников.',
      listItems: [
        `Внесение перечня оборудования.`,
        `Фиксация параметров.`,
        `Формирование календаря напоминаний.`,
        `Внесен перечень сотрудников и вся информация необходимая для ведения деятельности.`,
        `Автоматизирован учет контроля стажеров и назначения наставников.`,
        `Разработан механизм проведения тестирования сотрудников в самой системе.`,
      ],
      buttonText: 'Подробнее...',
    },
  ];
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isDesktop = windowWidth >= 769;
  const isTablet = windowWidth >= 431 && windowWidth < 769;
  const isMobile = windowWidth < 431;
  const sliderRef = useRef(null);

  const handlePrevSlide = () => {
    sliderRef.current?.slickPrev();
  };

  const handleNextSlide = () => {
    sliderRef.current?.slickNext();
  };
  
  if (isDesktop) {
    return (    <div id='cases' className="cases-section container" >
    <div className="cases-section-container">
      <img src={caseAtom1} alt="case-atom-1" className="case-atom-1" />
      <img src={caseAtom2} alt="case-atom-2" className="case-atom-2" />
      <img src={caseAtom3} alt="case-atom-3" className="case-atom-3" />
      <SectionTitle title="Кейсы:" />
      <div className='case-section-content'>
        <div className="case-cards">
          {cases.map((item, index) => (
            <CaseCard key={index} {...item} onClickDetails={handleOpenDocumentModal} />
          ))}
        </div>
        <ButtonComponent className="cases-section-button button-style-2" onClick={handleOpenReviewsModal}>
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="9" viewBox="0 0 36 9" fill="none">
            <path d="M0.646446 4.14645C0.451183 4.34171 0.451183 4.65829 0.646446 4.85355L3.82843 8.03553C4.02369 8.2308 4.34027 8.2308 4.53553 8.03553C4.7308 7.84027 4.7308 7.52369 4.53553 7.32843L1.70711 4.5L4.53553 1.67157C4.7308 1.47631 4.7308 1.15973 4.53553 0.964466C4.34027 0.769204 4.02369 0.769204 3.82843 0.964466L0.646446 4.14645ZM36 4L1 4V5L36 5V4Z" fill="#0593F5"/>
          </svg>
          Посмотреть отзывы
        </ButtonComponent>

        {reviewsModalVisible && (
          <ViewReviewsModalComponent onClose={handleCloseReviewsModal} />
        )}

        {documentModalVisible && (
          <DocumentModalComponent onClose={handleCloseDocumentModal}>
          </DocumentModalComponent>
        )}
      </div>
    </div>
  </div>)
  } else if (isTablet) {
    return (    <div id='cases' className="tablet-cases-section">
    <div className="tablet-cases-section-container">
      <img src={tabletCaseAtom1} alt="tablet-case-atom-1" className="tablet-case-atom-1" />
      <img src={tabletCaseAtom2} alt="tablet-case-atom-2" className="tablet-case-atom-2" />
      <SectionTitle title="Кейсы:" />
      <div className='tablet-case-section-content'>
        {sliderRef && (
          <Slider ref={sliderRef} {...(isTablet ? tabletSettings : mobileSettings)}>
            {tabletCases.map((item, index) => (
              <CaseCard key={index} {...item} onClickDetails={handleOpenDocumentModal} />
            ))}
          </Slider>
        )}
        <div className="tablet-cases-arrows-container">
  <svg onClick={handlePrevSlide} xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
    <path d="M19.0795 25.793C19.2978 25.793 19.5213 25.7066 19.6889 25.5391C20.024 25.2039 20.024 24.6555 19.6889 24.3203L8.21738 12.8488L19.5213 1.54492C19.8564 1.20977 19.8564 0.661327 19.5213 0.326172C19.1861 -0.00898361 18.6377 -0.00898361 18.3025 0.326172L6.38418 12.2395C6.04902 12.5746 6.04902 13.123 6.38418 13.4582L18.465 25.5391C18.6377 25.7117 18.856 25.793 19.0795 25.793Z" fill="black"/>
  </svg>
  <svg onClick={handleNextSlide} xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
    <path d="M6.92053 0.207031C6.70217 0.207031 6.47871 0.293359 6.31113 0.460938C5.97598 0.796094 5.97598 1.34453 6.31113 1.67969L17.7826 13.1512L6.47871 24.4551C6.14355 24.7902 6.14355 25.3387 6.47871 25.6738C6.81387 26.009 7.3623 26.009 7.69746 25.6738L19.6158 13.7605C19.951 13.4254 19.951 12.877 19.6158 12.5418L7.53496 0.460938C7.3623 0.288281 7.14397 0.207031 6.92053 0.207031Z" fill="black"/>
  </svg>
</div>
        <ButtonComponent className="tablet-cases-section-button button-style-2" onClick={handleOpenReviewsModal}>
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="9" viewBox="0 0 36 9" fill="none">
            <path d="M0.646446 4.14645C0.451183 4.34171 0.451183 4.65829 0.646446 4.85355L3.82843 8.03553C4.02369 8.2308 4.34027 8.2308 4.53553 8.03553C4.7308 7.84027 4.7308 7.52369 4.53553 7.32843L1.70711 4.5L4.53553 1.67157C4.7308 1.47631 4.7308 1.15973 4.53553 0.964466C4.34027 0.769204 4.02369 0.769204 3.82843 0.964466L0.646446 4.14645ZM36 4L1 4V5L36 5V4Z" fill="#0593F5"/>
          </svg>
          Посмотреть отзывы
        </ButtonComponent>

        {reviewsModalVisible && (
          <ViewReviewsModalComponent onClose={handleCloseReviewsModal} />
        )}

        {documentModalVisible && (
          <DocumentModalComponent onClose={handleCloseDocumentModal}>
          </DocumentModalComponent>
        )}
      </div>
    </div>
    </div>)
  } else if (isMobile)  {
    return (    <div id='cases' className="mobile-cases-section">
    <div className="mobile-cases-section-container">
      <SectionTitle title="Кейсы:" />
      <div className='mobile-case-section-content'>
        {sliderRef && (
          <Slider {...mobileSettings} ref={sliderRef}>
            {cases.map((item, index) => (
              <CaseCard key={index} {...item} onClickDetails={handleOpenDocumentModal} />
            ))}
          </Slider>
        )}
        <div className="mobile-cases-arrows-container">
          <svg onClick={handlePrevSlide} xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
            <path d="M19.0795 25.793C19.2978 25.793 19.5213 25.7066 19.6889 25.5391C20.024 25.2039 20.024 24.6555 19.6889 24.3203L8.21738 12.8488L19.5213 1.54492C19.8564 1.20977 19.8564 0.661327 19.5213 0.326172C19.1861 -0.00898361 18.6377 -0.00898361 18.3025 0.326172L6.38418 12.2395C6.04902 12.5746 6.04902 13.123 6.38418 13.4582L18.465 25.5391C18.6377 25.7117 18.856 25.793 19.0795 25.793Z" fill="black"/>
          </svg>
          <svg onClick={handleNextSlide} xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
            <path d="M6.92053 0.207031C6.70217 0.207031 6.47871 0.293359 6.31113 0.460938C5.97598 0.796094 5.97598 1.34453 6.31113 1.67969L17.7826 13.1512L6.47871 24.4551C6.14355 24.7902 6.14355 25.3387 6.47871 25.6738C6.81387 26.009 7.3623 26.009 7.69746 25.6738L19.6158 13.7605C19.951 13.4254 19.951 12.877 19.6158 12.5418L7.53496 0.460938C7.3623 0.288281 7.14397 0.207031 6.92053 0.207031Z" fill="black"/>
          </svg>
        </div>
        <ButtonComponent className="mobile-cases-section-button button-style-2" onClick={handleOpenReviewsModal}>
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="9" viewBox="0 0 36 9" fill="none">
            <path d="M0.646446 4.14645C0.451183 4.34171 0.451183 4.65829 0.646446 4.85355L3.82843 8.03553C4.02369 8.2308 4.34027 8.2308 4.53553 8.03553C4.7308 7.84027 4.7308 7.52369 4.53553 7.32843L1.70711 4.5L4.53553 1.67157C4.7308 1.47631 4.7308 1.15973 4.53553 0.964466C4.34027 0.769204 4.02369 0.769204 3.82843 0.964466L0.646446 4.14645ZM36 4L1 4V5L36 5V4Z" fill="#0593F5"/>
          </svg>
          Посмотреть отзывы
        </ButtonComponent>

        {reviewsModalVisible && (
          <ViewReviewsModalComponent onClose={handleCloseReviewsModal} />
        )}

        {documentModalVisible && (
          <DocumentModalComponent onClose={handleCloseDocumentModal}>
          </DocumentModalComponent>
        )}
      </div>
    </div>
    </div>)
  }
};

export default CasesSection;