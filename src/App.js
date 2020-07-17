import React from 'react';

import Dashboard from 'routes/Dashboard';
import Sidebar from 'containers/Sidebar';

import './App.scss';

function App() {
  return (
    <div className='app'>
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default App;
