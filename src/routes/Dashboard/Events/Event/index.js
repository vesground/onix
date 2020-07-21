import React from 'react';
import moment from 'moment';

import Image from 'components/Image';
import RoundIcon from 'components/Icons/RoundIcon';
import Text from 'components/Text';
import EventComment from 'routes/Dashboard/Events/Event/Comment';
import EventFiles from 'routes/Dashboard/Events/Event/Files';

import './index.scss';

const META_COMPONENTS = {
  comment: EventComment,
  files: EventFiles,
};

const baseClass = 'dashboard-event';
const DashboardEvent = ({ icon, type, title, meta, createdAt, background, ...props }) => {
  const MetaComponent = META_COMPONENTS[meta?.type];

  const time = moment.unix(createdAt).format("HH:mm");

  return (
    <div className={`${baseClass}`}>
      <RoundIcon width={40} height={40} background={background}>
        <Image width={12} height={12} borderRadius='50%' background='transparent' src={icon} />
      </RoundIcon>
      <div className={`${baseClass}__details`}>
        <Text>{title}</Text>
        {MetaComponent && (<MetaComponent {...meta.content} />)}
      </div>
      <Text className={`${baseClass}__date`}>{time}</Text>
    </div>
  );
}

export default DashboardEvent;
