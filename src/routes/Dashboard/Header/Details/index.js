import React from 'react';

import Text from 'components/Text';
import Image from 'components/Image';
import { More } from 'components/Buttons/index.js';
import Members from 'routes/Dashboard/Header/Details/Members';
import Actions from 'routes/Dashboard/Header/Details/Actions';

import './index.scss';
// <img src='public/images/Shapes@2x.png' />

const baseClass = 'dashboard-header-details';
const HeaderDetails = (props) => {
  return (
    <div className={`${baseClass}`}>
      <div className={`${baseClass}__title`}>
        <Image width={40} height={40} borderRadius='8px' />
        <Text>Website Redesign</Text>
        <More />
      </div>
      <div className={`${baseClass}__info`}>
        <Members />
        <Actions />
      </div>
    </div>
  );
}

export default HeaderDetails;
