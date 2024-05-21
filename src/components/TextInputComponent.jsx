import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/InputStyles.scss';

const TextInputComponent = ({ label, error, onChange, placeholder }) => {
  const [inputValue, setInputValue] = useState('');
  const [isActive, setIsActive] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    onChange && onChange(e.target.value);
    setIsActive(e.target.value !== '');
  };

  const handleInputBlur = () => {
    setIsActive(inputValue !== '');
  };

  return (
    <div className="text-without-star text-input-container">
      <div className={`text-input-wrapper ${isActive ? 'text-active-input' : ''} ${error ? 'text-error-input' : ''}`}>
        <input
          type="text"
          id="input"
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          placeholder={placeholder}
          className={`text-input-field ${isActive ? 'text-active-input' : ''}`}  
        />
        {error ? (
          <div className="text-error">
            {error === true ? 'Ошибка!' : error}
          </div>
        ) : null}
      </div>
    </div>
  );
};

TextInputComponent.propTypes = {
  label: PropTypes.string.isRequired,
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  onChange: PropTypes.func,
  placeholder: PropTypes.string, 
};

export default TextInputComponent;
