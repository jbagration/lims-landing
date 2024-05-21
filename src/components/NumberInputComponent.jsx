import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/InputStyles.scss';

const NumberInputComponent = ({ label, onChange }) => {
  const [numberValue, setNumberValue] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const handleNumberChange = (e) => {
    const inputValue = e.target.value;
    const sanitizedValue = inputValue.replace(/\D/g, '');
  
    const numericValue = sanitizedValue === '' ? 0 : parseInt(sanitizedValue);
  
    setNumberValue(numericValue);
    onChange && onChange(numericValue);
  };
  

  const handleNumberIncrement = () => {
    setNumberValue((prevValue) => prevValue + 1);
    setIsActive(true);
  };

  const handleNumberDecrement = () => {
    setNumberValue((prevValue) => Math.max(0, prevValue - 1));
    setIsActive(true);
  };

  return (
    <div className="number-input-container">
      <div className="number-label">{label}</div>
      <div className={`number-input-wrapper ${isActive ? 'number-active-input' : ''}`}>
        <div className="number-input">
          <input
type="tel"  
pattern="[0-9]*"  
            value={numberValue}
            onChange={handleNumberChange}
            className="number-input-field"
          />
          <div className="number-buttons">
            <button onClick={handleNumberIncrement} className="number-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
  <path d="M0.0800781 7.33825C0.0800781 7.42223 0.113281 7.50818 0.177734 7.57263C0.306641 7.70154 0.517578 7.70154 0.646484 7.57263L5.05859 3.16052L9.40625 7.50818C9.53516 7.63709 9.74609 7.63709 9.875 7.50818C10.0039 7.37927 10.0039 7.16833 9.875 7.03943L5.29297 2.45544C5.16406 2.32654 4.95312 2.32654 4.82422 2.45544L0.177734 7.10193C0.111328 7.16833 0.0800781 7.25231 0.0800781 7.33825Z" fill="black"/>
</svg>
            </button>
            <button onClick={handleNumberDecrement} className="number-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
  <path d="M9.91992 2.66175C9.91992 2.57777 9.88672 2.49182 9.82227 2.42737C9.69336 2.29846 9.48242 2.29846 9.35352 2.42737L4.94141 6.83948L0.59375 2.49182C0.464844 2.36291 0.253906 2.36291 0.125 2.49182C-0.00390625 2.62073 -0.00390625 2.83167 0.125 2.96057L4.70703 7.54456C4.83594 7.67346 5.04688 7.67346 5.17578 7.54456L9.82227 2.89807C9.88867 2.83167 9.91992 2.74769 9.91992 2.66175Z" fill="black"/>
</svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

NumberInputComponent.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

export default NumberInputComponent;
