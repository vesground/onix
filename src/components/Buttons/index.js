import React from 'react';

import More from 'components/Buttons/More';

import './index.scss';

const baseClass = 'app-component-button';
const Button = ({
  className,
  background,
  children
}) => {
  return (
    <button style={{ background }} className={`${baseClass}`} onClick={() => {}}>{children}</button>
  );
}

export { More };
export default Button;
