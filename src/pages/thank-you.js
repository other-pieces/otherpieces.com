import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import SEO from '../components/SEO/SEO';
import GlobalLayout from '../components/Layout/GlobalLayout';
import Main from '../components/Layout/Main';

const seoTitle = 'Thank You | Other Pieces';

const ThankYouPage = props => (
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
      <>
        <SEO
          seoTitle={seoTitle}
          pagePath={props.location.pathname}
        />
        <GlobalLayout>
          <Main id="mainContent">
            <h1>Search {data.site.siteMetadata.title}</h1>
            <h2>Thank you</h2>
          </Main>
        </GlobalLayout>
      </>
    )}
  />
);

export default ThankYouPage;
