import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import {
  colorCharcoal,
  colorElectric,
  fontFamilySerif,
  spaceStackDouble,
  weightRegular,
  spaceNone
} from '../theme/settings';

const Card = ({
  heading,
  linkText,
  image,
  path,
  subhead
}) => (
  <StyledCard to={path}>
    <HiddenLinkText>
      {linkText}
    </HiddenLinkText>
    <StyledCardImage src={image} />
    {heading &&
      <StyledCardHeading>
        {heading}
      </StyledCardHeading>
    }
    {subhead &&
      <StyledCardSubhead>
        {subhead}
      </StyledCardSubhead>
    }
  </StyledCard>
);

const StyledCard = styled(Link)`
  max-width: 36rem;
  display: inline-block;
  text-decoration: none;

  &:hover h2 {
    text-decoration: underline;
    text-decoration-color: ${colorElectric};
  }
`;

const HiddenLinkText = styled.span`
  position: absolute;
  clip: rect(1px, 1px, 1px, 1px);
`;

const StyledCardImage = styled.img`
  margin: ${spaceStackDouble};
  width: 100%;
`;

const StyledCardHeading = styled.h2`
  margin: ${spaceStackDouble};
  font-family: ${fontFamilySerif};
  font-size: 3.6rem;
  font-weight: ${weightRegular};
  color: ${colorCharcoal};
  line-height: 1.222;
`;

const StyledCardSubhead = styled.p`
  margin: ${spaceNone};
  font-size: 1.4rem;
  font-weight: ${weightRegular};
  line-height: 1.429;
  color: ${colorCharcoal};
  letter-spacing: 0.4rem;
  text-transform: uppercase;
`;

Card.propTypes = {
  heading: PropTypes.string,
  linkText: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  subhead: PropTypes.string
};

export default Card;
