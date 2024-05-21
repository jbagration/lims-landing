import React from 'react';
import '../styles/TextBlockStyles.scss';

const TextBlock = ({ text }) => {
  return (
    <div className="text-block">
      <ul><li>{text}</li></ul>
    </div>
  );
};

export default TextBlock;
