import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { spaceStackCenterQuad, spaceStackDouble, spaceDouble } from '../../../theme/settings';

import TypeHeadline from '../../Typography/TypeHeadline';

const HeroineGrid = ({ headline, imageEnd, imageEndAlt, imageStart, imageStartAlt }) => (
  <StyledHeroineGrid>
    <StyledHeadline as="h2">{headline}</StyledHeadline>
    <StyledHeroineImageStart fluid={imageStart} alt={imageStartAlt} />
    <StyledHeroineImageEnd fluid={imageEnd} alt={imageEndAlt} />
  </StyledHeroineGrid>
);

const StyledHeroineGrid = styled.div`
  max-width: 104.8rem;
  width: 100%;
  position: relative;

  @media (min-width: 889px) {
    margin: ${spaceStackCenterQuad};
  }
`;

const StyledHeadline = styled(TypeHeadline)`
  margin: ${spaceStackDouble};
`;

const StyledHeroineImageStart = styled(Img)`
  max-width: 70.5rem;
  width: 100%;
  display: block;

  @media (max-width: 888px) {
    margin: ${spaceStackDouble};
  }

  @media (min-width: 1200px) {
    z-index: 1;
  }
`;

const StyledHeroineImageEnd = styled(Img)`
  max-width: 42rem;
  width: 100%;
  display: block;

  @media (max-width: 888px) {
    display: none;
  }

  @media (min-width: 889px) and (max-width: 1199px) {
    margin-top: calc(${spaceDouble} * -1);
    margin-left: auto;
  }

  @media (min-width: 1200px) {
    position: absolute !important;
    top: 0;
    right: 0;
  }
`;

HeroineGrid.propTypes = {
  headline: PropTypes.string.isRequired,
  imageEnd: PropTypes.object.isRequired,
  imageEndAlt: PropTypes.string.isRequired,
  imageStart: PropTypes.object.isRequired,
  imageStartAlt: PropTypes.string.isRequired,
};

export default HeroineGrid;
