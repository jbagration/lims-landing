import React from 'react';
import '../styles/OurPartnersSectionStyles.scss';

const PartnerSlide = ({ logoSrc, title, text, website }) => {
  const externalLink = website.startsWith('http') ? website : `http://${website}`;

  return (
    <div className="parnters-slide">
      <img src={logoSrc} alt="Лого" />
      <h2>{title}</h2>
      <p>{text}</p>
      <a href={externalLink} target="_blank" rel="noopener noreferrer">
        {website}
      </a>
    </div>
  );
};

export default PartnerSlide;
