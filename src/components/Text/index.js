import React from 'react';
import classnames from 'classnames';

import './index.scss';

const Text = ({
  className,
  children
}) => {
  return (
    <p className={classnames('app-text', { [className]: !!className })}>{children}</p>
  );
}

export default Text;
