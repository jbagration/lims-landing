import React from 'react';
import '../styles/TextBlockStyles.scss';

const TextBlockIntroductionFirst = ({ title, text, listTitle, listText, afterListText }) => {
  return (
    <div className='text-block-introduction-first'>
      <h2 className='text-block-introduction-first-title'>{title}</h2>
      <p className='text-block-introduction-first-text'>{text}</p>
      <p className='text-block-introduction-first-listTitle'>{listTitle}</p>
      {listText ? (
        <ul>
          {listText.split('\n').map((item, index) => (
            <li key={index}>{item.trim()}</li>
          ))}
        </ul>
      ) : null}
      <p className='text-block-introduction-first-afterListText'>{afterListText}</p>
    </div>
  );
};

export default TextBlockIntroductionFirst;
