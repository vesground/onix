import React from 'react';

import './index.scss';

const baseClass = 'dashboard-header';
const DashboardHeader = (props) => {
  return (
    <div className={`${baseClass}`}>
      <div className={`${baseClass}__title`}>
        photo
        website redesign
        more
      </div>
      <div className={`${baseClass}__info`}>
        members
        actions
      </div>
    </div>
  );
}

export default DashboardHeader;
