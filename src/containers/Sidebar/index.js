import React from 'react';

import Text from 'components/Text';
import Image from 'components/Image';
import Profile from 'containers/Sidebar/Profile';
import Menu from 'containers/Sidebar/Menu';

import './index.scss';

const baseClass = 'app-sidebar';
const DashboardHeader = (props) => {
  return (
    <div className={`${baseClass}`}>
      <div className={`${baseClass}__header`}>
        <Image width={24} height={24} />
        <Text>PROJECTUS</Text>
        <Image className={`${baseClass}__header__search`} width={16} height={16} />
        <Image className={`${baseClass}__header__sidebar`} width={16} height={16} />
      </div>
      <Profile />
      <Menu />
    </div>
  );
}

export default DashboardHeader;
