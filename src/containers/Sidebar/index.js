import React from 'react';

import Text from 'components/Text';
import Profile from 'containers/Sidebar/Profile';
import Menu from 'containers/Sidebar/Menu';

import './index.scss';

const baseClass = 'app-sidebar';
const DashboardHeader = (props) => {
  return (
    <div className={`${baseClass}`}>
      <Text>title</Text>
      <Profile />
      <Menu />
    </div>
  );
}

export default DashboardHeader;
