import React from 'react';

import Button from 'components/Buttons';
import Image from 'components/Image';
import Text from 'components/Text';

import './index.scss';

const baseClass = 'dashboard-header-details-actions';
const HeaderActions = (props) => {
  return (
    <div className={`${baseClass}`}>
      <Button background='#EAEAEA'>
        <Text>Share</Text>
      </Button>
      <Button background='#FFF8DD'>
        <Image width={16} height={16} background='transparent' src='public/images/Combined Shape@1x.svg' />
        <Text>Chat</Text>
      </Button>
    </div>
  );
}

export default HeaderActions;
