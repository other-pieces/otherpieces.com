import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import TypeHeadingPrimary from '../../Typography/TypeHeadingPrimary';
import TypeBylineHeading from '../../Typography/TypeBylineHeading';

import {
  colorPeacockLight,
  spaceStackDouble,
  spaceNone
} from '../../../theme/settings';

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
    <StyledCardContent>
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
    </StyledCardContent>
  </StyledCard>
);

const StyledCard = styled(Link)`
  max-width: 36rem;
  display: flex;
  flex-direction: column;
  text-decoration: none;

  &:hover img {
    filter: brightness(1.02);
  }

  &:hover h2 {
    color: ${colorPeacockLight};
    text-decoration: underline;
  }

  &:focus {
    outline: 0.4rem solid ${colorPeacockLight};
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

const StyledCardContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
`;

const StyledCardHeading = TypeHeadingPrimary.withComponent('h2').extend`
  margin: ${spaceStackDouble};
`;

const StyledCardSubhead = TypeBylineHeading.withComponent('p').extend`
  margin: ${spaceNone};
`;

Card.propTypes = {
  heading: PropTypes.string,
  linkText: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  subhead: PropTypes.string
};

export default Card;
