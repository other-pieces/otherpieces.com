import React from 'react';

import GlobalLayout from '../components/Layout/GlobalLayout';
import Main from '../components/Layout/Main';

const NotFoundPage = () => (
  <GlobalLayout>
    <Main>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist&hellip;the sadness.</p>
    </Main>
  </GlobalLayout>
);

export default NotFoundPage;
