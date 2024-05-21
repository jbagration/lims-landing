import React from 'react';

const SectionTitle = ({ title }) => {
  const titleStyle = {
    color: '#0D3754',
    fontFamily: 'Gilroy-Medium',
    fontSize: '36px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '130%',
  };

  const tabletStyle = {
    fontSize: '24px',
    lineHeight: '130%',
  };

  const mobileStyle = {
    fontSize: '16px',
    lineHeight: '130%',
  };

  return (
    <h2 style={{ ...titleStyle, ...(window.innerWidth >= 375 && window.innerWidth < 769 && tabletStyle), ...(window.innerWidth < 431 && mobileStyle) }}>
      {title}
    </h2>
  );
};

export default SectionTitle;
