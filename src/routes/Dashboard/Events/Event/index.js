import React from 'react';

import Image from 'components/Image';
import Text from 'components/Text';

import './index.scss';

const baseClass = 'dashboard-event';
const DashboardHeader = ({ type, title, createdAt, ...props }) => {
  return (
    <div className={`${baseClass}`}>
      <Image width={40} height={40} borderRadius='50%' />
      <Text className={`${baseClass}__title`}>{title}</Text>
      <Text className={`${baseClass}__date`}>{createdAt}</Text>
    </div>
  );
}

export default DashboardHeader;
