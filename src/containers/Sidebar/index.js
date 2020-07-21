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

  return (
    <div className={classnames(baseClass, { [`${baseClass}-close`]: !isOpen })}>
      <div className={`${baseClass}__header`}>
        <Image width={24} height={24} background='transparent' src='public/images/Logo@3x.svg' />
        <Text>PROJECTUS</Text>
        <Image className={`${baseClass}__header__search`} width={16} height={16} background='transparent' src='public/images/Search@3x.svg' />
        <Image className={`${baseClass}__header__sidebar`} width={16} height={16} background='transparent' src='public/images/close.svg' onClick={toggleSidebar} />
      </div>
      <Profile />
      <Menu />
    </div>
  );
}

export default Sidebar;
