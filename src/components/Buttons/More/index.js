import React from 'react';

import Dots from 'components/Icons/Dots';
import RoundIcon from 'components/Icons/RoundIcon';

import './index.scss';

const baseClass = 'app-button-more';
const More = ({ handleClick, ...props }) => {
  return (
    <div className={baseClass} onClick={handleClick}>
      <RoundIcon width={30} height={30} background='#EAEAEA'>
        <Dots />
      </RoundIcon>
    </div>
  );
}

export default More;
