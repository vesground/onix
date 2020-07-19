import React from 'react';

import Circle from 'components/Circle'

import './index.scss';

const baseClass = 'app-icon-dots';
const More = (props) => {
  return (
    <div className={baseClass}>
      <Circle width={4} height={4} background='#D8D8D8' />
      <Circle width={4} height={4} background='#D8D8D8' />
      <Circle width={4} height={4} background='#D8D8D8' />
    </div>
  );
}

export default More;
