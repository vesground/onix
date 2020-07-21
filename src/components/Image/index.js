import React from 'react';
import classnames from 'classnames';

import './index.scss';

const baseUrl = 'http://localhost:4000';
const baseClass = 'app-component-image';
const Image = ({
  src,
  width=50,
  height=50,
  borderRadius,
  background,
  className,
  ...props
}) => {
  return (
    <img
      src={`${baseUrl}/${src}`}
      style={{ minWidth: width, minHeight: height, width, height, borderRadius, background }}
      className={classnames(baseClass, { [className]: !!className })}
      alt=''
      {...props}
    />
  );
}

export default Image;
