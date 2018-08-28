import React from 'react';

import Main from '../components/Layout/Main';

const AboutPage = ({ data }) => (
  <Main>
    <h1>About {data.site.siteMetadata.title}</h1>
  </Main>
);

export const query = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default AboutPage;
