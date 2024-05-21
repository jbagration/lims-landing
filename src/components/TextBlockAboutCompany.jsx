import React from 'react';
import '../styles/TextBlockStyles.scss';

const TextBlockAboutCompany = ({ title, text, listText }) => {
  return (
    <div className='text-block-company-with-header'>
      <h2>{title}</h2>
      {listText && (
        <ul>
          {listText.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
      <p>{text}</p>
    </div>
  );
};

export default TextBlockAboutCompany;

