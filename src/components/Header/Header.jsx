import React from 'react';

import Form from '../Form';

const Header = () => {
  console.log('render Header');
  return (
    <header>
      <Form />
    </header>
  );
};

export default React.memo(Header);
