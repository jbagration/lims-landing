import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/InputStyles.scss';

const SelectInputComponent = ({ label, options, onChange }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSvgActive, setSvgActive] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setDropdownOpen(false);
    onChange && onChange(option);
  };

  const handleInputClick = () => {
    setDropdownOpen(!isDropdownOpen);
    setSvgActive(!isSvgActive);
  };

  return (
    <div className="select-input-container">
            <div className="select-label">{label}</div>
      <div className={`${isDropdownOpen ? 'select-active-input' : 'select-input-wrapper '}`} onClick={handleInputClick}>
        <div className="select-input">
        <div className={`selected-option ${isSvgActive ? 'svg-active' : ''}`} style={{ color: selectedOption ? 'black' : 'var(--grey, #949599)' }}>
            {selectedOption || 'Решение...'}
          </div>
          <div className="select-dropdown-icon">
              {isSvgActive ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <g filter="url(#filter0_b_606_1696)">
    <path d="M3.70508 15.7596C3.70508 15.8954 3.75879 16.0344 3.86304 16.1387C4.07155 16.3472 4.41275 16.3472 4.62126 16.1387L11.758 9.00195L18.7905 16.0344C18.999 16.2429 19.3402 16.2429 19.5487 16.0344C19.7572 15.8259 19.7572 15.4847 19.5487 15.2762L12.1371 7.86146C11.9286 7.65295 11.5874 7.65295 11.3789 7.86146L3.86304 15.3773C3.75563 15.4847 3.70508 15.6206 3.70508 15.7596Z" fill="black"/>
  </g>
  <defs>
    <filter id="filter0_b_606_1696" x="-50" y="-50" width="124" height="124" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
      <feGaussianBlur in="BackgroundImageFix" stdDeviation="25"/>
      <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_606_1696"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_606_1696" result="shape"/>
    </filter>
  </defs>
</svg>
              ) : (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <g filter="url(#filter0_b_606_1778)">
    <path d="M20.2949 8.24056C20.2949 8.10471 20.2412 7.96569 20.137 7.86144C19.9284 7.65293 19.5873 7.65293 19.3787 7.86144L12.242 14.9982L5.20953 7.96569C5.00101 7.75718 4.65982 7.75718 4.45131 7.96569C4.2428 8.1742 4.2428 8.5154 4.45131 8.72391L11.8629 16.1387C12.0714 16.3472 12.4126 16.3472 12.6211 16.1387L20.137 8.62282C20.2444 8.5154 20.2949 8.37957 20.2949 8.24056Z" fill="#00041A"/>
  </g>
  <defs>
    <filter id="filter0_b_606_1778" x="-50" y="-50" width="124" height="124" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
      <feGaussianBlur in="BackgroundImageFix" stdDeviation="25"/>
      <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_606_1778"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_606_1778" result="shape"/>
    </filter>
  </defs>
</svg>
              )}
          </div>
        </div>
        {isDropdownOpen && (
          <div className="select-dropdown-options">
            {options.map((option) => (
              <div key={option} className="select-dropdown-option" onClick={() => handleOptionClick(option)}>
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

SelectInputComponent.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func,
};

export default SelectInputComponent;
