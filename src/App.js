import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import classnames from 'classnames';
import withSizes from 'react-sizes'

import Dashboard from 'routes/Dashboard';
import Sidebar from 'containers/Sidebar';
import { SidebarVisibilityStatuses, setSidebarVisibility } from 'store/actions.js';

import './App.scss';

function App({ isMobile, ...props }) {
  const dispatch = useDispatch();
  const sidebarVisibility = useSelector(state => state.sidebarVisibility);
  const isSidebarOpen = sidebarVisibility === SidebarVisibilityStatuses.OPEN;

  useEffect(() => {
    if (isSidebarOpen && isMobile) {
      const action = setSidebarVisibility(SidebarVisibilityStatuses.CLOSE);
      dispatch(action);
    }
  }, []);

  return (
    <div className={classnames('app', { 'app__close-sidebar': !isSidebarOpen })}>
      <Sidebar isOpen={isSidebarOpen} />
      <Dashboard />
    </div>
  );
}

const mapSizesToProps = ({ width }) => ({
  isMobile: width < 768,
})

export default withSizes(mapSizesToProps)(App)
