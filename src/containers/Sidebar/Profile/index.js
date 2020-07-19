import React from 'react';

import Dots from 'components/Icons/Dots';
import Text from 'components/Text';
import Image from 'components/Image';
import TasksCounter from 'containers/Sidebar/Profile/TasksCounter';
import { profile } from 'data.js';

import './index.scss';

const baseClass = 'app-sidebar-profile';
const DashboardHeader = (props) => {
  return (
    <div className={`${baseClass}`}>
      <div className={`${baseClass}__info`}>
        <Image width={48} height={48} borderRadius='50%' />
        <div className={`${baseClass}__info__user`}>
          <Text>{profile.firstName} {profile.lastName}</Text>
          <Text>{profile.position}</Text>
        </div>
        <Dots />
      </div>
      <div className={`${baseClass}__tasks`}>
        <TasksCounter count={profile.tasksCount.completed} title='Completed Tasks' />
        <TasksCounter count={profile.tasksCount.open} title='Open Tasks' />
      </div>
    </div>
  );
}

export default DashboardHeader;
