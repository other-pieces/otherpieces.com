import React from 'react';

import Main from '../components/Main';

const TravelPage = ({ data }) => (
  <Main>
    <h1>Travel {data.site.siteMetadata.title}</h1>
  </Main>
);

export const query = graphql`
  query TravelQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default TravelPage;
