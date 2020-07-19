import React from 'react';

import Text from 'components/Text';

import './index.scss';

const baseClass = 'dashboard-event-comment';
const EventComment = ({ title, ...props }) => {
  return (
    <div className={`${baseClass}`}>
      <Text>{title}</Text>
    </div>
  );
}

export default EventComment;
