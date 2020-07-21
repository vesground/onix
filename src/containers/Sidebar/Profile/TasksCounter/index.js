import React from 'react';

import Text from 'components/Text';

import './index.scss';

const baseClass = 'app-sidebar-profile-tasks-counter';
const TasksCounter = ({ count, title, ...props }) => {
  return (
    <div className={`${baseClass}`}>
      <Text>{count}</Text>
      <Text>{title}</Text>
    </div>
  );
}

export default TasksCounter;
