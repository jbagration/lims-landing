import React, { useState } from 'react';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
import '../styles/InputStyles.scss';

const PhoneNumberInputComponent = ({ label, error, onChange, placeholder }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (value) => {
    setInputValue(value);
    onChange && onChange(value);
  };

  return (
    <div className="phone-input-container">
        <label htmlFor="input" className="text-asterisk">
          *
        </label>
      <PhoneInput
        country="ru" 
        placeholder={placeholder}
        value={inputValue}
        onChange={handleInputChange}
      />
      {error && <span className="error-message">{error}</span>}
    </div>
  );
};

export default PhoneNumberInputComponent;
