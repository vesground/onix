import React from 'react';

import Dots from 'components/Icons/Dots';
import RoundIcon from 'components/Icons/RoundIcon';

import './index.scss';

const baseClass = 'app-button-more';
const More = (props) => {
  return (
    <div className={baseClass}>
      <RoundIcon width={30} height={30} background='#EAEAEA'>
        <Dots />
      </RoundIcon>
    </div>
  );
}

export default More;
