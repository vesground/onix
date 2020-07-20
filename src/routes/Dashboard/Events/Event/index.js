import React from 'react';
import moment from 'moment';

import Image from 'components/Image';
import Text from 'components/Text';
import EventComment from 'routes/Dashboard/Events/Event/Comment';
import EventFiles from 'routes/Dashboard/Events/Event/Files';

import './index.scss';

const META_COMPONENTS = {
  comment: EventComment,
  files: EventFiles,
};

const baseClass = 'dashboard-event';
const DashboardEvent = ({ type, title, meta, createdAt, ...props }) => {
  const MetaComponent = META_COMPONENTS[meta?.type];

  const time = moment.unix(createdAt).format("HH:mm");

  return (
    <div className={`${baseClass}`}>
      <Image width={40} height={40} borderRadius='50%' />
      <div className={`${baseClass}__details`}>
        <Text>{title}</Text>
        {MetaComponent && (<MetaComponent {...meta.content} />)}
      </div>
      <Text className={`${baseClass}__date`}>{time}</Text>
    </div>
  );
}

export default DashboardEvent;
