import React from 'react';
import moment from 'moment';

import Text from 'components/Text';
import Event from 'routes/Dashboard/Events/Event';
import { events } from 'data.js';

import './index.scss';

const backgrounds = ['#cef9c6', '#fff8dd', '#e4efff']

const baseClass = 'dashboard-events';
const DashboardEvents = (props) => {
  const relativeDate = moment().calendar(null, {
    lastDay : '[Yesterday]',
    sameDay : '[Today]',
    nextDay : '[Tomorrow]',
    lastWeek : '[Last] dddd',
    nextWeek : '[Next] dddd',
    sameElse : 'DD/MM/YYYY'
  });

  return (
    <div className={`${baseClass}`}>
      <Text className={`${baseClass}__relative-date`}>{relativeDate}</Text>
      {events && events.map((eventDetails, index) => {
        return (
          <Event key={eventDetails.id} {...eventDetails} background={backgrounds[index]} />
        )
      })}
    </div>
  );
}

export default DashboardEvents;
