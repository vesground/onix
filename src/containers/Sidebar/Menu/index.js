import React from 'react';

import Text from 'components/Text';
import MenuItem from 'containers/Sidebar/Menu/MenuItem';
import NotificationMenu from 'containers/Sidebar/Menu/NotificationMenu';

import './index.scss';

const menuItems = [
  {
    id: 1,
    title: 'Menu',
    defaultActive: true
  },
  {
    id: 2,
    title: 'Home',
    defaultActive: false
  },
  {
    id: 3,
    title: 'My Tasks',
    defaultActive: false
  },
  {
    id: 4,
    component: NotificationMenu,
    defaultActive: false
  },
];

const baseClass = 'app-sidebar-menu';
const SidebarMenu = (props) => {
  return (
    <div className={`${baseClass}`}>
      {menuItems.map(({ component: Component, ...itemOptions }) => (
        <MenuItem key={itemOptions.id} active={itemOptions.defaultActive}>
          {Component ?
            <Component /> :
            <Text>{itemOptions.title}</Text>
          }
        </MenuItem>
      ))}
    </div>
  );
}

export default SidebarMenu;
