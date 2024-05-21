import React, { useEffect, useState } from 'react';
import SectionTitle from './SectionTitle';
import ButtonComponent from './ButtonComponent';
import CertificateModalComponent from './CertificateModalComponent';
import planScheme from '../assets/plan-scheme-group.svg';
import planSchemeGroup from '../assets/plan-scheme.png';
import tabletPlanScheme from '../assets/tablet-plan-scheme.png';
import tabletPlanSchemeGroup from '../assets/tablet-plan-scheme-group.svg';
import mobilePlanScheme from '../assets/mobile-plan-scheme.png';
import mobilePlanSchemeGroup from '../assets/mobile-plan-scheme-group.svg';
import '../styles/PlanSchemeSectionStyles.scss';

const DesktopPlanSchemeSection = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <div className="plan-scheme-section">
      <div className="plan-scheme-section-container">
      <ButtonComponent className="button-style-2 plan-button" onClick={handleOpenModal}>
    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="9" viewBox="0 0 36 9" fill="none">
            <path d="M0.646446 4.14645C0.451183 4.34171 0.451183 4.65829 0.646446 4.85355L3.82843 8.03553C4.02369 8.2308 4.34027 8.2308 4.53553 8.03553C4.7308 7.84027 4.7308 7.52369 4.53553 7.32843L1.70711 4.5L4.53553 1.67157C4.7308 1.47631 4.7308 1.15973 4.53553 0.964466C4.34027 0.769204 4.02369 0.769204 3.82843 0.964466L0.646446 4.14645ZM36 4L1 4V5L36 5V4Z" fill="#0593F5"/>
          </svg>
        Наши сертификаты   
      </ButtonComponent>
        <SectionTitle title="План схема:" />
        <div className="plan-scheme-container">
          <img src={planScheme} alt="Plan Scheme" className="plan-scheme-image" />
          <img src={planSchemeGroup} alt="Plan Scheme Group" className="plan-scheme-group-image" />
        </div>
      </div>
      {modalVisible && (
        <CertificateModalComponent onClose={handleCloseModal}>
        </CertificateModalComponent>
      )}
    </div>
  );
};

const TabletPlanSchemeSection = () => {
  return (
    <div className="tablet-plan-scheme-section">
      <div className="tablet-plan-scheme-section-container">
        <SectionTitle title="План схема:" />
        <div className="tablet-plan-scheme-container">
          <img src={tabletPlanScheme} alt="Tablet Plan Scheme" className="tablet-plan-scheme-image" />
          <img src={tabletPlanSchemeGroup} alt="Tablet Plan Scheme Group" className="tablet-plan-scheme-group-image" />
        </div>
      </div>
    </div>
  );
};

const MobilePlanSchemeSection = () => {
  return (
    <div className="mobile-plan-scheme-section">
      <div className="mobile-plan-scheme-section-container">
        <SectionTitle title="План схема:" />
        <div className="mobile-plan-scheme-container">
          <img src={mobilePlanScheme} alt="Mobile Plan Scheme" className="mobile-plan-scheme-image" />
          <img src={mobilePlanSchemeGroup} alt="Mobile Plan Scheme Group" className="mobile-plan-scheme-group-image" />
        </div>
      </div>
    </div>
  );
};

const PlanSchemeSection = () => {
  return (
    <div className="plan-scheme-section">
      {window.innerWidth >= 769 && <DesktopPlanSchemeSection />}
      {window.innerWidth >= 431 && window.innerWidth < 769 && <TabletPlanSchemeSection />}
      {window.innerWidth < 431 && <MobilePlanSchemeSection />}
    </div>
  );
};

export default PlanSchemeSection;
