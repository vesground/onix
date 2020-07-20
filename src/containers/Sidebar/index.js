import React from 'react';
import classnames from 'classnames';
import { useDispatch } from 'react-redux'

import Text from 'components/Text';
import Image from 'components/Image';
import Profile from 'containers/Sidebar/Profile';
import Menu from 'containers/Sidebar/Menu';
import { setSidebarVisibility, SidebarVisibilityStatuses } from 'store/actions.js';

import './index.scss';

const baseClass = 'app-sidebar';
const Sidebar = ({ isOpen, ...props }) => {
  const dispatch = useDispatch();
  const toggleSidebar = () => {
    const newStatus = isOpen ? SidebarVisibilityStatuses.CLOSE : SidebarVisibilityStatuses.OPEN;
    const action = setSidebarVisibility(newStatus);
    dispatch(action);
  };
  console.log('is open', isOpen);
  return (
    <>
      {isOpen ? (
        <div className={classnames(baseClass, `${baseClass}-open`)}>
          <Image width={16} height={16} className={`${baseClass}__toggle-sidebar`} onClick={toggleSidebar} />
        </div>
      ) : (
        <div className={classnames(baseClass, `${baseClass}-close`)}>
          <Image width={16} height={16} className={`${baseClass}__toggle-sidebar`} onClick={toggleSidebar} />
        </div>
      )}
    </>

  );
}

// <div className={`${baseClass}__header`}>
//   <Image width={24} height={24} />
//   <Text>PROJECTUS</Text>
//   <Image className={`${baseClass}__header__search`} width={16} height={16} />
//   <Image className={`${baseClass}__header__sidebar`} width={16} height={16} onClick={toggleSidebar} />
// </div>
// <Profile />
// <Menu />

export default Sidebar;
