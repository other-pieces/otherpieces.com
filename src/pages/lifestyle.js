import React from 'react';

import Main from '../components/Main';

const LifestylePage = ({ data }) => (
  <Main>
    <h1>Lifestyle {data.site.siteMetadata.title}</h1>
  </Main>
);

export const query = graphql`
  query LifestyleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default LifestylePage;
