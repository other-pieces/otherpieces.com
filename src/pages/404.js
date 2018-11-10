import React from 'react';

import SEO from '../components/SEO/SEO';
import GlobalLayout from '../components/Layout/GlobalLayout';
import Main from '../components/Layout/Main';

const seoTitle = 'Oops, We Lost It. | Other Pieces';

const NotFoundPage = props => (
  <>
    <SEO
      seoTitle={seoTitle}
      pagePath={props.location.pathname}
    />
    <GlobalLayout>
      <Main id="mainContent">
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist&hellip;the sadness.</p>
      </Main>
    </GlobalLayout>
  </>
);

export default NotFoundPage;
