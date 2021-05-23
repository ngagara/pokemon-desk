import { navigate } from 'hookrouter';
import React from 'react';
import Button from '../../components/Button';

import { LinkEnum } from '../../routes';

const NotFound = () => {
  return (
    <>
      <h1>NOT FOUND</h1>
      <Button
        onClick={() => {
          navigate(LinkEnum.HOME);
        }}>
        GO HOME
      </Button>
    </>
  );
};

export default NotFound;
