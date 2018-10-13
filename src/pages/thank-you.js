import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import GlobalLayout from '../components/Layout/GlobalLayout';
import Main from '../components/Layout/Main';

const ThankYouPage = ({ data }) => (
  <StaticQuery
    query={graphql`
        query ThankYouQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <GlobalLayout>
        <Main id="mainContent">
          <h1>Search {data.site.siteMetadata.title}</h1>
          <h2>Thank you</h2>
        </Main>
      </GlobalLayout>
    )}
  />
);

export default ThankYouPage;
