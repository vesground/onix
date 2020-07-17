import React from 'react';

import Text from 'components/Text';

import './index.scss';

const baseClass = 'dashboard-header';
const DashboardHeader = (props) => {
  return (
    <div className={`${baseClass}`}>
      <Text>menu</Text>
    </div>
  );
}

export default DashboardHeader;
