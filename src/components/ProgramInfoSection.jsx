import React from 'react';
import TextBlockAboutProgram from './TextBlockAboutProgram'; 
import UrgentProgramComponent from './UrgentProgramComponent'; 
import programAtom1 from '../assets/program-atom-1.svg';
import programAtom2 from '../assets/program-atom-2.svg';
import '../styles/ProgramInfo.scss';

const ProgramInfo = () => {
  const isMobile = window.innerWidth < 375;
  const isTablet = window.innerWidth >= 375 && window.innerWidth < 769;

  return (
    <div id="program" className={`program-info-container ${isMobile ? 'mobile' : isTablet ? 'tablet' : 'desktop'}`}>
      {!isMobile && !isTablet && (
        <>
                <img src={programAtom1} alt="program-atom-1" className="program-atom-1" />
        <img src={programAtom2} alt="program-atom-2" className="program-atom-2" />
        <div className='program-top-container'>
          <div className="program-info-image"></div>
          <div className="program-info-text">
            <TextBlockAboutProgram />
          </div>
        </div>
          <UrgentProgramComponent />
        </>
      )}

      {isTablet && (
        <><div className="tablet-program-info-text">
          <TextBlockAboutProgram />
        </div><UrgentProgramComponent /></>
      )}

      {isMobile && (
        <><div className="mobile-program-info-text">
          <TextBlockAboutProgram />
        </div><UrgentProgramComponent /></>
      )}
    </div>
  );
};

export default ProgramInfo;
