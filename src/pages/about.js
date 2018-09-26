import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import GlobalLayout from '../components/Layout/GlobalLayout';
import Main from '../components/Layout/Main';
import ContactForm from '../components/Content/ContactForm';

const AboutPage = () => (
  <StaticQuery
    query={graphql`
      query AboutQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <GlobalLayout>
        <Main>
          <h1>About {data.site.siteMetadata.title}</h1>
          <ContactForm />
        </Main>
      </GlobalLayout>
    )}
  />
);

export default AboutPage;
