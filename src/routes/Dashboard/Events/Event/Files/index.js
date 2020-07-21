import React from 'react';

import Image from 'components/Image';

import './index.scss';

const baseClass = 'dashboard-event-files';
const EventFiles = ({ files, ...props }) => {
  return (
    <div className={`${baseClass}`}>
      {files.map((file, index) => (
        <Image key={index} width={100} height={100} borderRadius='8px' src={file} />
      ))}
    </div>
  );
}

export default EventFiles;
