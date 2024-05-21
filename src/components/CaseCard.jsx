import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ButtonComponent from './ButtonComponent';
import '../styles/CaseCardStyles.scss';

const CaseCard = ({ logo, title, subtitle, listItems, buttonText, onClickDetails }) => {

  return (
    <div className="case-card-container">
      <div className="case-card">
        <div className="case-card-header">
          {logo && <img className="case-card-logo" src={logo} alt="Logo" />}
          <div className="case-card-titles">
            <h3 className="case-card-title">{title}</h3>
            <p className="case-card-subtitle">{subtitle}</p>
          </div>
        </div>
        <div className="case-card-content">
          <ul className="case-card-list">
            {listItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <ButtonComponent className="case-card-button button-style-4" onClick={onClickDetails}>
          {buttonText}
        </ButtonComponent>
      </div>
    </div>
  );
};

CaseCard.propTypes = {
  logo: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  listItems: PropTypes.array.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default CaseCard;
