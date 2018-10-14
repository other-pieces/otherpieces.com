import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import TypeSectionHeading from '../Typography/TypeSectionHeading';
import CardSmallGrid from '../UI/Cards/CardSmallGrid';
import CardSmall from '../UI/Cards/CardSmall';

import {
  spaceStackDouble,
  spaceStackOct,
  spaceStackQuad
} from '../../theme/settings';

const CalloutSection = ({ children }) => (
  <StyledCalloutSection>
    <StyledTypeSectionHeading>
      Things that are better than work/laundry/calling your mom:
    </StyledTypeSectionHeading>
    <CardSmallGrid>
      {/* TODO: Replace with final image and alt text */}
      <CardSmall
        key="cardSmall1"
        path="/style"
        linkText="View all style posts"
        image="https://source.unsplash.com/random/256x192"
        imageAlt="Card alt text"
        heading="Style"
        caption="Super cute &rsquo;fits"
      />
      <CardSmall
        key="cardSmall2"
        path="/lifestyle"
        linkText="View all lifestyle posts"
        image="https://source.unsplash.com/random/256x192"
        imageAlt="Card alt text"
        heading="Lifestyle"
        caption="Living your best life"
      />
      <CardSmall
        key="cardSmall3"
        path="/travel"
        linkText="View all travel posts"
        image="https://source.unsplash.com/random/256x192"
        imageAlt="Card alt text"
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

const StyledTypeSectionHeading = TypeSectionHeading.withComponent('h2').extend`
  margin: ${spaceStackDouble};
  max-width: 57.6rem;
  width: 100%;
  text-align: center;
`;

CalloutSection.propTypes = {
  children: PropTypes.array,
};

export default CalloutSection;
