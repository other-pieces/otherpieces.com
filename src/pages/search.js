import React from 'react';

import Main from '../components/Layout/Main';

const SearchPage = ({ data }) => (
  <Main>
    <h1>Search {data.site.siteMetadata.title}</h1>
  </Main>
);

export const query = graphql`
  query SearchQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default SearchPage;
