import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import ScreenReaderOnly from '../A11y/ScreenReaderOnly';
import TypeSectionHeading from '../Typography/TypeSectionHeading';
import CardSmallGrid from '../UI/Cards/CardSmallGrid';
import CardSmall from '../UI/Cards/CardSmall';

import { spaceStackDouble, spaceStackOct, spaceStackQuad } from '../../theme/settings';

const calloutSectionTitle = 'Things that are better than work/laundry/calling your mom:';

const CalloutSection = ({ calloutImageStart, calloutImageCenter, calloutImageEnd, hiddenTitle }) => (
  <StyledCalloutSection>
    {hiddenTitle
      ?
        <ScreenReaderOnly as="h2">
          {calloutSectionTitle}
        </ScreenReaderOnly>
      :
        <StyledTypeSectionHeading as="h2">
          Things that are better than work/laundry/calling your mom:
        </StyledTypeSectionHeading>
    }
    <CardSmallGrid>
      {/* TODO: Replace with final image and alt text */}
      <CardSmall
        key="cardSmall1"
        path="/style"
        linkText="View all style posts"
        fluid={calloutImageStart}
        imageAlt="Detail of Jacqs wearing a cozy sweater and denim jeans"
        heading="Style"
        caption="Super cute &rsquo;fits"
      />
      <CardSmall
        key="cardSmall2"
        path="/lifestyle"
        linkText="View all lifestyle posts"
        fluid={calloutImageCenter}
        imageAlt="Jacqs' apartment bedroom decor"
        heading="Lifestyle"
        caption="Living your best life"
      />
      <CardSmall
        key="cardSmall3"
        path="/travel"
        linkText="View all travel posts"
        fluid={calloutImageEnd}
        imageAlt="Sara overlooking the Mediterranean sea in Ravello, Italy"
        heading="Travel"
        caption="Literally skipping town"
      />
    </CardSmallGrid>
  </StyledCalloutSection>
);

const StyledCalloutSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 575px) {
    margin: ${spaceStackQuad};
  }

  @media (min-width: 576px) {
    margin: ${spaceStackOct};
  }
`;

const StyledTypeSectionHeading = styled(TypeSectionHeading)`
  margin: ${spaceStackDouble};
  max-width: 57.6rem;
  width: 100%;
  text-align: center;
`;

CalloutSection.propTypes = {
  hiddenTitle: PropTypes.bool.isRequired,
  calloutImageStart: PropTypes.object.isRequired,
  calloutImageCenter: PropTypes.object.isRequired,
  calloutImageEnd: PropTypes.object.isRequired,
};

export default CalloutSection;
