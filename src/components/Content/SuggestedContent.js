import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import styled from 'styled-components';

import { colorPeacockLight } from '../../theme/settings';

import ScreenReaderOnly from '../A11y/ScreenReaderOnly';
import CategoryCalloutSection from '../Layout/CategoryCalloutSection';
import Divider from '../UI/Decoration/Divider';
import TypeSectionHeading from '../Typography/TypeSectionHeading';

const SuggestedContent = ({ hiddenCalloutSectionTitle }) => (
  <StaticQuery
    query={graphql`
      query SuggestedContentQuery {
        imageCategoryCalloutStart: file(relativePath: { eq: "jacqs-sweater-and-denim-detail.jpg" }) {
          ...imageFragmentCardSmall
        }
        imageCategoryCalloutCenter: file(relativePath: { eq: "jacqs-apartment-bedroom.jpg" }) {
          ...imageFragmentCardSmall
        }
        imageCategoryCalloutEnd: file(relativePath: { eq: "sara-travel-in-italy.jpg" }) {
          ...imageFragmentCardSmall
        }
      }
    `}
    render={data => (
      <>
        <CategoryCalloutSection
          hiddenTitle={hiddenCalloutSectionTitle}
          calloutImageStart={data.imageCategoryCalloutStart.childImageSharp.fluid}
          calloutImageCenter={data.imageCategoryCalloutCenter.childImageSharp.fluid}
          calloutImageEnd={data.imageCategoryCalloutEnd.childImageSharp.fluid}
        />
        <Divider />
        <StyledInstagramFeed>
          <StyledInstagramLink as={OutboundLink} href="https://instagram.com/otherpieces/">
            <ScreenReaderOnly>Follow </ScreenReaderOnly> @otherpieces{' '}
            <ScreenReaderOnly>on Instagram</ScreenReaderOnly>
          </StyledInstagramLink>
        </StyledInstagramFeed>
      </>
    )}
  />
);

const StyledInstagramFeed = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledInstagramLink = styled(TypeSectionHeading)`
  text-decoration: none;

  &:hover,
  &:focus {
    color: ${colorPeacockLight};
    text-decoration: underline;
  }

  &:focus {
    outline: 0.2rem solid ${colorPeacockLight};
    outline-offset: 0.4rem;
  }
`;

export default SuggestedContent;