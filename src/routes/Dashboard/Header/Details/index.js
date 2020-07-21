import React from 'react';
import { useDispatch, useSelector } from 'react-redux'

import Text from 'components/Text';
import Image from 'components/Image';
import { More } from 'components/Buttons/index.js';
import Members from 'routes/Dashboard/Header/Details/Members';
import Actions from 'routes/Dashboard/Header/Details/Actions';
import { setSidebarVisibility, SidebarVisibilityStatuses } from 'store/actions.js';

import './index.scss';
// <img src='public/images/Shapes@2x.png' />

const baseClass = 'dashboard-header-details';
const HeaderDetails = (props) => {
  const sidebarVisibility = useSelector(state => state.sidebarVisibility);
  const isSidebarOpen = sidebarVisibility === SidebarVisibilityStatuses.OPEN;

  const dispatch = useDispatch();
  const toggleSidebar = () => {
    const newStatus = isSidebarOpen ? SidebarVisibilityStatuses.CLOSE : SidebarVisibilityStatuses.OPEN;
    const action = setSidebarVisibility(newStatus);
    dispatch(action);
  };

  return (
    <div className={`${baseClass}`}>
      <div className={`${baseClass}__title`}>
        <Image width={40} height={40} borderRadius='8px' background='#ffc200' src='public/images/Shapes@2x.png' />
        <Text>Website Redesign</Text>
        <More handleClick={toggleSidebar} />
      </div>
      <div className={`${baseClass}__info`}>
        <Members />
        <Actions />
      </div>
    </div>
  );
}

export default HeaderDetails;
