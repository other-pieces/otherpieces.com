import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import GlobalLayout from '../components/Layout/GlobalLayout';
import Main from '../components/Layout/Main';

const SearchPage = () => (
  <StaticQuery
    query={graphql`
      query SearchQuery {
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
        </Main>
      </GlobalLayout>
    )}
  />
);

export default SearchPage;
