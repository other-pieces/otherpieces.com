import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import { spaceStackDefault, spaceStackDouble, spaceStackOct, spaceStackQuad } from '../theme/settings';

import SEO from '../components/SEO/SEO';
import GlobalLayout from '../components/Layout/GlobalLayout';
import Main from '../components/Layout/Main';
import TypeMastheadHeadline from '../components/Typography/TypeMastheadHeadline';
import TypeBody from '../components/Typography/TypeBody';
import SuggestedContent from '../components/Content/SuggestedContent';

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
          <StyledMain id="mainContent">
            <StyledHeadline as="h1">Thanks, Babe</StyledHeadline>
            <StyledP as="p">We&rsquo;ll get back to you as soon as we can.</StyledP>
            <StyledLastP as="p">In the meantime, keep smashing the patriarchy.</StyledLastP>
            <SuggestedContent hiddenCalloutSectionTitle={true} />
          </StyledMain>
        </GlobalLayout>
      </>
    )}
  />
);

const StyledMain = styled(Main)`
  @media (min-width: 576px) {
    text-align: center;
  }
`;

const StyledHeadline = styled(TypeMastheadHeadline)`
  margin: ${spaceStackDouble};
`;

const StyledP = styled(TypeBody)`
  margin: ${spaceStackDefault};
`;

const StyledLastP = styled(TypeBody)`
  @media (max-width: 575px) {
    margin: ${spaceStackQuad};
  }

  @media (min-width: 576px) {
    margin: ${spaceStackOct};
  }
`;

export default ThankYouPage;
