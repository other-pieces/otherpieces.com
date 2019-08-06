import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import SuggestedContent from '../components/Content/SuggestedContent';
import GlobalLayout from '../components/Layout/GlobalLayout';
import Main from '../components/Layout/Main';
import SEO from '../components/SEO/SEO';
import TypeBody from '../components/Typography/TypeBody';
import TypeMastheadHeadline from '../components/Typography/TypeMastheadHeadline';
import { spaceStackDefault, spaceStackDouble, spaceStackOct, spaceStackQuad } from '../theme/settings';

const seoTitle = 'Thank You | Other Pieces';

const ThankYouPage = ({ location: { pathname } }) => (
  <>
    <SEO seoTitle={seoTitle} pagePath={pathname} />
    <GlobalLayout>
      <StyledMain id="mainContent">
        <StyledHeadline as="h1">Thanks, Babe</StyledHeadline>
        <StyledP as="p">We&rsquo;ll get back to you as soon as we can.</StyledP>
        <StyledLastP as="p">In the meantime, keep smashing the patriarchy.</StyledLastP>
        <SuggestedContent hiddenCalloutSectionTitle />
      </StyledMain>
    </GlobalLayout>
  </>
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

ThankYouPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default ThankYouPage;
