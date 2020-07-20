import React from 'react';
import { useSelector } from 'react-redux'
import classnames from 'classnames';

import Dashboard from 'routes/Dashboard';
import Sidebar from 'containers/Sidebar';
import { SidebarVisibilityStatuses } from 'store/actions.js';

import './App.scss';

function App() {
  const sidebarVisibility = useSelector(state => state.sidebarVisibility);
  const isSidebarOpen = sidebarVisibility === SidebarVisibilityStatuses.OPEN;

  return (
    <div className='app'>
      <Dashboard />
    </div>
  );
}
// <div className={classnames('app', { 'app__open-sidebar': isSidebarOpen })}>
// <Sidebar isOpen={isSidebarOpen} />

export default App;
