import React from 'react';

import Main from '../components/Layout/Main';
import ContactForm from '../components/Content/ContactForm';

const AboutPage = ({ data }) => (
  <Main>
    <h1>About {data.site.siteMetadata.title}</h1>
    <ContactForm />
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
