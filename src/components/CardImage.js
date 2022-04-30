import React from 'react';

const CardImage = (props) => {
  return (
    <img
      src={ props.imgSrc }
      className={ props.imgStyle }
      alt={ props.imgAlt }
    />
  );
};

export default CardImage;
