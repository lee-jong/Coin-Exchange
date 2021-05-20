import React from 'react';

//Component
import Meta from '../shared/Meta';

const BaseLayout = ({ children, path }) => {
  return (
    <>
      <Meta />
      {children}
    </>
  );
};

export default BaseLayout;
