import React from 'react';
import PropTypes from 'prop-types';
import '../styles/ButtonComponent.scss';

const ButtonComponent = ({ className, onClick, children }) => {
  return (
    <button className={`custom-button ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

ButtonComponent.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default ButtonComponent;
