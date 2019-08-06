import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import ScreenReaderOnly from '../components/A11y/ScreenReaderOnly';
import SuggestedContent from '../components/Content/SuggestedContent';
import GlobalLayout from '../components/Layout/GlobalLayout';
import Main from '../components/Layout/Main';
import SEO from '../components/SEO/SEO';
import TypeBody from '../components/Typography/TypeBody';
import TypeMastheadHeadline from '../components/Typography/TypeMastheadHeadline';
import { spaceStackDouble, spaceStackOct, spaceStackQuad } from '../theme/settings';

const seoTitle = 'Oops, We Lost It. | Other Pieces';

const NotFoundPage = ({ location: { pathname } }) => (
  <>
    <SEO seoTitle={seoTitle} pagePath={pathname} />
    <GlobalLayout>
      <StyledMain id="mainContent">
        <ScreenReaderOnly as="h1">404 Page Not Found</ScreenReaderOnly>
        <StyledHeadline as="h2">O.O.O.</StyledHeadline>
        <StyledP as="p">
          We will be out of the office starting (Start Date) through (End Date). If you need immediate assistance during
          our absence, slide into our DMs. For all other matters, see below:
        </StyledP>
        <SuggestedContent hiddenCalloutSectionTitle />
      </StyledMain>
    </GlobalLayout>
  </>
);

const StyledMain = styled(Main)`
  @media (min-width: 576px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const StyledHeadline = styled(TypeMastheadHeadline)`
  margin: ${spaceStackDouble};
`;

const StyledP = styled(TypeBody)`
  max-width: 60.4rem;

  @media (max-width: 575px) {
    margin: ${spaceStackQuad};
  }

  @media (min-width: 576px) {
    margin: ${spaceStackOct};
  }
`;

NotFoundPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default NotFoundPage;
