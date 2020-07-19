import React from 'react';

import Text from 'components/Text';
import Event from 'routes/Dashboard/Events/Event';
import { events } from 'data.js';

import './index.scss';

const baseClass = 'dashboard-events';
const DashboardEvents = (props) => {
  return (
    <div className={`${baseClass}`}>
      <Text className={`${baseClass}__relative-date`}>{Date.now()}</Text>
      {events && events.map(eventDetails => {
        return (
          <Event {...eventDetails} />
        )
      })}
    </div>
  );
}

export default DashboardEvents;
