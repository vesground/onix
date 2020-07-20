import React from 'react';

import Tab from 'components/Tabs/Tab';

import './index.scss';

const baseClass = 'app-component-tabs';
const Tabs = ({ activeTab, tabs, setActiveTab, ...props }) => {
  const handleTabClick = (tabKey) => () => {
    setActiveTab(tabKey);
  }
  return (
    <div className={`${baseClass}`}>
      {tabs.map(([key, options]) => (
        <Tab isActive={key === activeTab} key={key} title={options.title} handleClick={handleTabClick(key)} />
      ))}
    </div>
  );
}

export default Tabs;
