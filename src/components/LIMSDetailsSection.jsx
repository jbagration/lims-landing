import React, { useEffect, useState } from 'react';
import SectionTitle from './SectionTitle'; 
import limsAtom1 from '../assets/lims-atom-1.svg';
import limsAtom2 from '../assets/lims-atom-2.svg';
import tabletLimsAtom1 from '../assets/tablet-lims-atom-1.svg';
import tabletLimsAtom2 from '../assets/tablet-lims-atom-2.svg';
import '../styles/LIMSDetailsSectionStyles.scss'; 

const LIMSDetailsSection = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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

  if (isDesktop) {
    return (
      <div id='details' className="container lims-details-section">
      <div className="lims-details-section-container">
        <SectionTitle title="Детально о LIMS:" />
        <img src={limsAtom1} alt="lims-atom-1" className="lims-atom-1" />
        <img src={limsAtom2} alt="lims-atom-2" className="lims-atom-2" />
        <iframe
            className="lims-details"
            src="https://www.youtube.com/embed/D3fOvbwLoOI" // изменена ссылка на встроенное видео
            title="YouTube video player"
            frameBorder="0"
            allowFullScreen
          ></iframe>
      </div>
    </div>    );
  } else if (isTablet) {
    return (
      <div id='details' className="tablet-lims-details-section">
      <div className="tablet-lims-details-section-container">
        <SectionTitle title="Детально о LIMS:" />
        <img src={tabletLimsAtom1} alt="tablet-lims-atom-1" className="tablet-lims-atom-1" />
        <img src={tabletLimsAtom2} alt="tablet-lims-atom-2" className="tablet-lims-atom-2" />
        <iframe
            className="tablet-lims-details"
            src="https://www.youtube.com/embed/D3fOvbwLoOI" // изменена ссылка на встроенное видео
            title="YouTube video player"
            frameBorder="0"
            allowFullScreen
          ></iframe>
      </div>
    </div>
    );
  } else if (isMobile) {
    return (
      <div id='details' className="mobile-lims-details-section">
      <div className="mobile-lims-details-section-container">
        <SectionTitle title="Детально о LIMS:" />
        <iframe
            className="mobile-lims-details"
            src="https://www.youtube.com/embed/D3fOvbwLoOI" // изменена ссылка на встроенное видео
            title="YouTube video player"
            frameBorder="0"
            allowFullScreen
          ></iframe>
      </div>
    </div>
    );
  }
};

export default LIMSDetailsSection;
