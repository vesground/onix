import React from 'react';

import Image from 'components/Image';

import './index.scss';

const baseClass = 'dashboard-header-details-members';
const Members = (props) => {
  return (
    <div className={`${baseClass}`}>
      <Image width={30} height={30} borderRadius='50%' background='transparent' src='public/images/person1.jpg' />
      <Image width={30} height={30} borderRadius='50%' background='transparent' src='public/images/person2.jpeg' />
      <Image width={30} height={30} borderRadius='50%' background='transparent' src='public/images/person3.jpg' />
    </div>
  );
}

export default Members;
