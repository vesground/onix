import React from 'react';

import Text from 'components/Text';
import RoundIcon from 'components/Icons/RoundIcon';

import './index.scss';

const baseClass = 'app-sidebar-menu-item-notifications';
const MenuItem = ({ title, children, active, ...props }) => {
  return (
    <div className={baseClass}>
      <Text>Notifications</Text>
      <RoundIcon width={20} height={20} background='#FFC200'><Text>3</Text></RoundIcon>
    </div>
  );
}

export default MenuItem;
