import React, { useEffect, useState } from 'react';
import company1 from '../assets/company-1.png';
import company2 from '../assets/company-2.png';
import company3 from '../assets/company-3.png';
import '../styles/TextBlockStyles.scss';

const TextBlockAboutProgram = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <div className="text-block-program-with-header">
      <h2>О программе:</h2>
      <p className="text-block-program-with-header-text">
        Система LIMS – это место менеджмента качества и автоматизации процесса испытаний. Они организуются на базе производственных предприятий и испытательных Лабораторий. Роль человека в основном процессе велика, но он должен грамотно вести и всю отчетность. Благодаря данной системе, можно снизить нагрузку человека, работающего в лаборатории.
      </p>
      <p className="text-block-program-with-header-list-title">
        В рамках данного раздела представлено несколько продуктов ЛИМС. Это:
      </p>
      <ul>
        <li>LIMS IT-Lab;</li>
        <li>LIMS IT-Lab.Протоколы испытаний;</li>
        <li>LIMS IT-Lab.СМК;</li>
        <li>LIMS IT-Lab.ВЛК;</li>
        <li>LIMS IT-Lab.Акт верификации;</li>
        <li>LIMS IT-Lab.Градуировочные характеристики;</li>
        <li>LIMS IT-Lab.Реактивы;</li>
        <li>LIMS IT-Lab. Удаленный сервис (работа через “облачные” технологии).</li>
      </ul>
      <p className="text-block-program-with-header-after-list">
        Каждый функционал уже проверен временем и сотнями специалистов со всей России. Они работают в должном виде, без перебоев и всякого рода проблем.
      </p>
      <p className="text-block-program-with-header-after-list">
            Нам доверяют:
          </p>
          <div className="trusted-companies">
            <div className="company">
              <img src={company1} alt="АО НИЦ АЭС" />
              <p>АО "НИЦ АЭС"</p>
            </div>
            <div className="company">
              <img src={company2} alt="АНО СЦКС" />
              <p>АНО СЦКС</p>
            </div>
            <div className="company">
              <img src={company3} alt="НИИЖБ" />
              <p>НИИЖБ</p>
            </div>
          </div>
    </div>
  );
};

export default TextBlockAboutProgram;
