import React from 'react';
import classnames from 'classnames';

import Text from 'components/Text';

import './index.scss';

const baseClass = 'app-component-tab';
const Tab = ({ isActive, title, handleClick }) => {
  return (
    <div className={classnames(baseClass, { [`${baseClass}__active`]: isActive })} onClick={handleClick}>
      <Text>{title}</Text>
    </div>
  );
}

export default Tab;
