import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/InputStyles.scss';

const EmailInputComponent = ({ label, error, onChange, placeholder }) => {
  const [inputValue, setInputValue] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [inputError, setInputError] = useState(false);

  const validateEmail = (email) => {
    // Простая проверка на наличие @ в строке в качестве примера
    return email.includes('@');
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    onChange && onChange(value);
    setIsActive(value !== '');
    setInputError(!validateEmail(value));
  };

  const handleInputBlur = () => {
    setIsActive(inputValue !== '');

    if (!inputValue || !validateEmail(inputValue)) {
      setInputError(true);
    } else {
      setInputError(false);
    }
  };

  return (
    <div className="text-input-container">
      <div className={`text-input-wrapper ${isActive ? 'text-active-input' : ''} ${inputError ? 'text-error-input' : ''}`}>
        <label htmlFor="input" className="text-label">
          {inputError ? 'Ошибка! Некорректный email' : '*'}
        </label>
        <input
          type="email"
          id="input"
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          placeholder={placeholder}
          className={`text-input-field ${isActive ? 'text-active-input' : ''}`}
        />
      </div>
    </div>
  );
};

EmailInputComponent.propTypes = {
  label: PropTypes.string.isRequired,
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
};

export default EmailInputComponent;
