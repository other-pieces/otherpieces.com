import React from 'react';

import Main from '../components/Main';

const StylePage = ({ data }) => (
  <Main>
    <h1>Style {data.site.siteMetadata.title}</h1>
  </Main>
);

export const query = graphql`
  query StyleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default StylePage;
