import React from 'react';
import classnames from 'classnames';

import './index.scss';

const baseClass = 'app-component-image';
const Image = ({
  width=50,
  height=50,
  borderRadius,
  className,
  ...props
}) => {
  return (
    <div style={{ width, height, borderRadius }} className={classnames(baseClass, { [className]: !!className })} {...props} />
  );
}

export default Image;
