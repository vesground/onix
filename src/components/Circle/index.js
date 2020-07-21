import React from 'react';

import './index.scss';

const Button = ({
  width=50,
  height=50,
  background,
  children
}) => {
  return (
    <div style={{ width, height, background }} className='app-shapes-circle'>{children}</div>
  );
}

export default Button;
