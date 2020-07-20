import React from 'react';

import Image from 'components/Image';

import './index.scss';

const baseClass = 'dashboard-event-files';
const EventFiles = ({ files, ...props }) => {
  return (
    <div className={`${baseClass}`}>
      {files.map(file => (
        <Image key={file} width={100} height={100} borderRadius='8px' />
      ))}
    </div>
  );
}

export default EventFiles;
