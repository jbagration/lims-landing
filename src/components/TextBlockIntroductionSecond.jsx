import React from 'react';
import '../styles/TextBlockStyles.scss';

const TextBlockIntroductionSecond = ({ title, listText, text }) => {
  return (
    <div className='text-block-introduction-second'>
      <h2>{title}</h2>
      {listText ? (
        <ul>
          {listText.split('\n').map((item, index) => (
            <li key={index}>{item.trim()}</li>
          ))}
        </ul>
      ) : null}
      <p>{text}</p>
    </div>
  );
};

export default TextBlockIntroductionSecond;
