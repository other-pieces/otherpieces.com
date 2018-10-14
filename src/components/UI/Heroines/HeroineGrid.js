import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import {
  spaceDefault,
  spaceDouble,
  spaceStackCenterQuad,
  spaceQuad
} from '../../../theme/settings';

import TypeHeadline from '../../Typography/TypeHeadline';

const HeroineGrid = ({
  headline,
  imageEnd,
  imageEndAlt,
  imageStart,
  imageStartAlt
}) => {
  return (
    <StyledHeroineGrid>
      <StyledHeadline>
        {headline}
      </StyledHeadline>
      <StyledHeroineImageStart fluid={imageStart} alt={imageStartAlt}/>
      <StyledHeroineImageEnd fluid={imageEnd} alt={imageEndAlt}/>
    </StyledHeroineGrid>
  )
};

const StyledHeroineGrid = styled.div`
  margin: ${spaceStackCenterQuad};
  max-width: 104.8rem;
  width: 100%;
  display: grid;

  @media (max-width: 786px) {
    grid-template-rows: auto ${spaceDefault} auto ${spaceQuad} auto;
    grid-template-columns: ${spaceQuad} auto ${spaceDouble};
  }

  @media (min-width: 787px) {
    grid-template-rows: auto ${spaceDouble} 1fr auto;
    grid-template-columns: auto ${spaceDouble} ${spaceQuad} auto;
  }
`;

const StyledHeadline = TypeHeadline.withComponent('h2').extend`
  @media (max-width: 786px) {
    grid-row: 1 / span 1;
    grid-column: 1 / span 2;
  }
`;

const StyledHeroineImageStart = styled(Img)`
  max-width: 70.5rem;
  width: 100%;

  @media (max-width: 786px) {
    grid-row: 3 / span 2;
    grid-column: 1 / span 2;
  }

  @media (min-width: 787px) {
    z-index: 1;
    grid-row: 3 / span 2;
    grid-column: 1 / span 3;
  }
`;

const StyledHeroineImageEnd = styled(Img)`
  max-width: 42rem;
  width: 100%;

  @media (max-width: 786px) {
    margin-left: auto;
    grid-row: 4 / span 2;
    grid-column: 2 / span 2;
  }

  @media (min-width: 787px) {
    grid-row:  1 / span 3;
    grid-column: 3 / span 2;
  }
`;

HeroineGrid.propTypes = {
  headline: PropTypes.string.isRequired,
  imageEnd: PropTypes.object.isRequired,
  imageEndAlt: PropTypes.string.isRequired,
  imageStart: PropTypes.object.isRequired,
  imageStartAlt: PropTypes.string.isRequired
}

export default HeroineGrid;