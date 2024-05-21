import React from 'react';
import { ReactComponent as DownloadIcon } from '../assets/download-sharp.svg';
import listPdfFile from '../assets/lims-presentation.pdf';
import '../styles/UrgentPriceStyles.scss';

const UrgentProgramComponent = () => {
  return (
    <div className="urgent-price-section urgent-program-section">
      <div className="urgent-price-container">
        <p className="urgent-price-header-text">
          Хотели бы больше погрузиться в LIMS IT-Lab?
        </p>
        <p className="urgent-price-sub-header-text">
          Узнать подробнее о продуктах в презентации.
        </p>
        <div className="urgent-price-download-block">
          <a className='lims-presentation-pdf' href={listPdfFile} download="lims-presentation.pdf">
            <p>Скачать</p>
            <DownloadIcon width="50" height="50" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default UrgentProgramComponent;
