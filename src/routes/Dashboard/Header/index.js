import React from 'react';

import Details from 'routes/Dashboard/Header/Details';
import Tabs from 'components/Tabs';

import { TABS_LIST } from 'routes/Dashboard/enums';

import './index.scss';

const baseClass = 'dashboard-header';
const DashboardHeader = ({ activeTab, setActiveTab, ...props}) => {
  return (
    <div className={`${baseClass}`}>
      <Details />
      <Tabs activeTab={activeTab} tabs={TABS_LIST} setActiveTab={setActiveTab} />
    </div>
  );
}

export default DashboardHeader;
