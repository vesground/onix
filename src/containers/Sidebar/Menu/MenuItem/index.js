import React from 'react';
import classnames from 'classnames';

import './index.scss';

const baseClass = 'app-sidebar-menu-item';
const MenuItem = ({ title, children, active, ...props }) => {
  return (
    <div className={classnames(baseClass, { [`${baseClass}__active`]: active })}>
      {children}
    </div>
  );
}

export default MenuItem;
