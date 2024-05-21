import React from 'react';
import PropTypes from 'prop-types';
import '../styles/CardWithIconsStyles.scss';

const CardWithIcons = ({ icon, text }) => {
  return (
    <div className="card-with-icons-container">
      <div className="card-with-icons-content-container">
        <div className="card-with-icons-icon-container">{icon}</div>
        <div className="card-with-icons-text-container">{text}</div>
      </div>
    </div>
  );
};

CardWithIcons.propTypes = {
  icon: PropTypes.element.isRequired, 
  text: PropTypes.string.isRequired,  
};

export default CardWithIcons;
