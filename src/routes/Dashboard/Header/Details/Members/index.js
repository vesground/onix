import React from 'react';

import Image from 'components/Image';

import './index.scss';

const baseClass = 'dashboard-header-details-members';
const Members = (props) => {
  return (
    <div className={`${baseClass}`}>
      <Image width={30} height={30} borderRadius='50%' />
      <Image width={30} height={30} borderRadius='50%' />
      <Image width={30} height={30} borderRadius='50%' />
    </div>
  );
}

export default Members;
