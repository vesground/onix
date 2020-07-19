import React from 'react';

import './index.scss';

const baseClass = 'app-icon-round-icon';
const RoundIcon = ({
  width=50,
  height=50,
  background='',
  children
}) => {
  return (
    <div style={{ width, height, background }} className={`${baseClass}`}>
      {children}
    </div>
  );
}

export default RoundIcon;
