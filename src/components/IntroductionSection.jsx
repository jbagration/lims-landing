import React, { useEffect, useState } from 'react';
import SectionTitle from './SectionTitle';
import ButtonComponent from './ButtonComponent';
import CertificateModalComponent from './CertificateModalComponent';
import TextBlockIntroductionFirst from './TextBlockIntroductionFirst';
import TextBlockIntroductionSecond from './TextBlockIntroductionSecond';
import mobilePlanSchemeAtom1 from '../assets/mobile-plan-scheme-atom-1.png';
import mobilePlanSchemeAtom2 from '../assets/mobile-plan-scheme-atom-2.png';
import tabletPlanSchemeAtom from '../assets/tablet-plan-scheme-atom.svg';
import planSchemeAtom from '../assets/plan-scheme-atom.svg';
import '../styles/IntroductionSectionStyles.scss';

const IntroductionSection = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [modalVisible, setModalVisible] = useState(false);


  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
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

  useEffect(() => {
    if (modalVisible) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden'; 
      document.body.style.paddingRight = `${scrollbarWidth}px`; 
    } else {
      document.body.style.overflow = 'auto'; 
      document.body.style.paddingRight = '0'; 
    }
  
    return () => {
      document.body.style.overflow = 'auto'; 
      document.body.style.paddingRight = '0';
    };
  }, [modalVisible]);

  const isDesktop = windowWidth >= 769;
  const isTablet = windowWidth >= 431 && windowWidth < 769;
  const isMobile = windowWidth < 431;

  if (isDesktop) {
    return (    <div className="introduction-section">
    <div className="introduction-section-container">
    <img src={planSchemeAtom} alt="plan-scheme-atom" className="plan-scheme-atom" />
<SectionTitle title="Внедрение:" />
      <div className="introduction-text-blocks-container">
        <TextBlockIntroductionFirst
          title="LIMS IT-LAB – информационная система для автоматизации Лабораторной деятельности."
          text={
            <>
              LIMS IT-LAB включена в Единый реестр российских программ для электронных вычислительных машин и баз данных.
              <br />
              Она охватывает различные области деятельности.<br />
              И включает в себя обширный функционал.
            </>
          }
          listTitle="Также система имеет ряд преимуществ:"
          listText={`Возможность подписывать журналы и протоколы электронной подписью
            Планировать работы сотрудников и их рабочие календари
            Выполнять шрих-кодирование образцов
            Настраивать журналы любого вида в режиме пользователя
            Формировать пакетную выгрузку во ФГИС
            Формировать различные отчеты в системе`}
          afterListText="В нашей LIMS IT-LAB возможны различные бизнес-процессы реализации"
        />
        <TextBlockIntroductionSecond
          title="А также с поставкой предоставляется перечень бесплатных услуг:"
          text={
            <>
              Внесение данных возможно вместе с Заказчиком, проводится удаленно и записывается, что позволит в дальнейшем пересматривать видео и самостоятельно решать вопросы с внесением данных.
              <br />
              Также при покупке LIMS IT-LAB предоставляется чек-лист самостоятельного внедрения системы, который поможет Лаборатории разработать план внесения данных и осуществить контроль над выполнением поставленных целей. Нашим клиентам данный список помог осуществить контроль над выполненными задачами по автоматизации и проанализировать многие функции с помощью отчетов.
            </>
          }
          listText={`загрузка 10 единиц оборудования
            загрузка 5 сотрудников
            загрузка 5 помещений
            настройка паспорта лаборатории (вносятся только основные данные, например: местонахождения, наименование, ответственные лица)
            настройка 3 электронных журналов по СМК 
            2 комплекта оборудования
            3 нормативных документа (по желанию, можно 3 внутренних документа)
            1 протокол испытаний`}
        />
      </div>
    </div>
  </div>
  
    );
  } else if (isTablet) {
    return (    <div className="tablet-introduction-section">
    <div className="tablet-introduction-section-container">
    <img src={tabletPlanSchemeAtom} alt="tablet-plan-scheme-atom" className="tablet-plan-scheme-atom" />
<SectionTitle title="Внедрение:" />
      <div className="tablet-introduction-text-blocks-container">
        <div className="tablet-text-block">
          <h2>LIMS IT-LAB – информационная система для автоматизации Лабораторной деятельности.</h2>
          <p>LIMS IT-LAB включена в Единый реестр российских программ для электронных вычислительных машин и баз данных. 
<br />Она охватывает различные области деятельности.
<br />И включает в себя обширный функционал.</p>
<p>
Также система имеет ряд преимуществ:</p>
          <ul>
            <li>Возможность подписывать журналы и протоколы электронной подписью</li>
            <li>Планировать работы сотрудников и их рабочие календари</li>
            <li>Выполнять шрих-кодирование образцов</li>
            <li>Настраивать журналы любого вида в режиме пользователя</li>
            <li>Формировать пакетную выгрузку во ФГИС</li>
            <li>Формировать различные отчеты в системе</li>

          </ul>
          <h2>В нашей LIMS IT-LAB возможны различные бизнес-процессы реализации   </h2>
          <p>А также с поставкой предоставляется перечень бесплатных услуг:</p>
          <ul>
          <li>загрузка 10 единиц оборудования</li>
            <li>загрузка 5 сотрудников</li>
            <li>загрузка 5 помещений</li>
            <li>настройка паспорта лаборатории (вносятся только основные данные, например: местонахождения, наименование, ответственные лица)</li>
            <li>настройка 3 электронных журналов по СМК</li>
            <li>2 комплекта оборудования</li>
            <li>3 нормативных документа (по желанию, можно 3 внутренних документа)</li>
            <li>1 протокол испытаний</li>
          </ul>
          <p>Внесение данных возможно вместе с Заказчиком, проводится удаленно и записывается, что позволит в дальнейшем пересматривать видео и самостоятельно решать вопросы с внесением данных.  <br />
Также при покупке LIMS IT-LAB предоставляется чек-лист самостоятельного внедрения системы, который поможет Лаборатории разработать план внесения данных и осуществить контроль над выполнением поставленных целей. Нашим клиентам данный список помог осуществить контроль над выполненными задачами по автоматизации и проанализировать многие функции с помощью отчетов.</p>
        </div>
      </div>
      <ButtonComponent className="button-style-2 introduction-button" onClick={handleOpenModal}>
    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="9" viewBox="0 0 36 9" fill="none">
            <path d="M0.646446 4.14645C0.451183 4.34171 0.451183 4.65829 0.646446 4.85355L3.82843 8.03553C4.02369 8.2308 4.34027 8.2308 4.53553 8.03553C4.7308 7.84027 4.7308 7.52369 4.53553 7.32843L1.70711 4.5L4.53553 1.67157C4.7308 1.47631 4.7308 1.15973 4.53553 0.964466C4.34027 0.769204 4.02369 0.769204 3.82843 0.964466L0.646446 4.14645ZM36 4L1 4V5L36 5V4Z" fill="#0593F5"/>
          </svg>
        Наши сертификаты   
      </ButtonComponent>
    </div>
    {modalVisible && (
        <CertificateModalComponent onClose={handleCloseModal}>
        </CertificateModalComponent>
      )}
  </div>
    );
  } else if (isMobile) {
    return (    <div className="mobile-introduction-section">
    <div className="mobile-introduction-section-container">
    <img src={mobilePlanSchemeAtom1} alt="mobile-plan-scheme-atom" className="mobile-plan-scheme-atom-1" />
    <img src={mobilePlanSchemeAtom2} alt="mobile-plan-scheme-atom" className="mobile-plan-scheme-atom-2" />
<SectionTitle title="Внедрение:" />
      <div className="mobile-introduction-text-blocks-container">
        <div className="mobile-text-block">
          <h2>LIMS IT-LAB – информационная система для автоматизации Лабораторной деятельности.</h2>
          <p>LIMS IT-LAB включена в Единый реестр российских программ для электронных вычислительных машин и баз данных. 
<br />Она охватывает различные области деятельности.
<br />И включает в себя обширный функционал.</p>
<p>
Также система имеет ряд преимуществ:</p>
          <ul>
            <li>Возможность подписывать журналы и протоколы электронной подписью</li>
            <li>Планировать работы сотрудников и их рабочие календари</li>
            <li>Выполнять шрих-кодирование образцов</li>
            <li>Настраивать журналы любого вида в режиме пользователя</li>
            <li>Формировать пакетную выгрузку во ФГИС</li>
            <li>Формировать различные отчеты в системе</li>

          </ul>
          <h2>В нашей LIMS IT-LAB возможны различные бизнес-процессы реализации   </h2>
          <p>А также с поставкой предоставляется перечень бесплатных услуг:</p>
          <ul>
          <li>загрузка 10 единиц оборудования</li>
            <li>загрузка 5 сотрудников</li>
            <li>загрузка 5 помещений</li>
            <li>настройка паспорта лаборатории (вносятся только основные данные, например: местонахождения, наименование, ответственные лица)</li>
            <li>настройка 3 электронных журналов по СМК</li>
            <li>2 комплекта оборудования</li>
            <li>3 нормативных документа (по желанию, можно 3 внутренних документа)</li>
            <li>1 протокол испытаний</li>
          </ul>
          <p>Внесение данных возможно вместе с Заказчиком, проводится удаленно и записывается, что позволит в дальнейшем пересматривать видео и самостоятельно решать вопросы с внесением данных.  <br />
Также при покупке LIMS IT-LAB предоставляется чек-лист самостоятельного внедрения системы, который поможет Лаборатории разработать план внесения данных и осуществить контроль над выполнением поставленных целей. Нашим клиентам данный список помог осуществить контроль над выполненными задачами по автоматизации и проанализировать многие функции с помощью отчетов.</p>
        </div>
      </div>
      <ButtonComponent className="button-style-2 introduction-button" onClick={handleOpenModal}>
    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="9" viewBox="0 0 36 9" fill="none">
            <path d="M0.646446 4.14645C0.451183 4.34171 0.451183 4.65829 0.646446 4.85355L3.82843 8.03553C4.02369 8.2308 4.34027 8.2308 4.53553 8.03553C4.7308 7.84027 4.7308 7.52369 4.53553 7.32843L1.70711 4.5L4.53553 1.67157C4.7308 1.47631 4.7308 1.15973 4.53553 0.964466C4.34027 0.769204 4.02369 0.769204 3.82843 0.964466L0.646446 4.14645ZM36 4L1 4V5L36 5V4Z" fill="#0593F5"/>
          </svg>
        Наши сертификаты   
      </ButtonComponent>
    </div>
    {modalVisible && (
        <CertificateModalComponent onClose={handleCloseModal}>
        </CertificateModalComponent>
      )}
  </div>
    );
  }
};

export default IntroductionSection;
