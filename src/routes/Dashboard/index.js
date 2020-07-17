import React, { useState } from 'react';
// import { compose } from 'redux'

import Header from 'routes/Dashboard/Header';
import { TABS, TABS_LIST, DefaultComponent } from 'routes/Dashboard/enums';

import './index.scss';

const getDefaultTab = (tabs) => {
  const tab = tabs.find(([key, options]) => !!options.default);
  return (tab && tab[0]) || null;
};

const Dashboard = function(props) {
  const [activeTab, setActiveTab] = useState(getDefaultTab(TABS_LIST));
  const Component = TABS[activeTab].component || DefaultComponent;

  return (
    <div className='app-dashboard'>
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <Component />
    </div>
  );
}

export default Dashboard;
