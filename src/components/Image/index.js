import React from 'react';

import './index.scss';

const baseClass = 'app-component-image';
const Image = ({
  width=50,
  height=50,
  borderRadius
}) => {
  return (
    <div style={{ width, height, borderRadius }} className={`${baseClass}`} />
  );
}

export default Image;
