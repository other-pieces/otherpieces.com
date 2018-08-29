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
  imageAlt,
  path,
  subhead
}) => (
  <StyledCard to={path}>
    <HiddenLinkText>
      {linkText}
    </HiddenLinkText>
    <StyledCardImage src={image} alt={imageAlt} />
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
  display: flex;
  flex-direction: column;
  text-decoration: none;

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

  ${StyledCard}:hover & {
    filter: brightness(1.02);
  }
`;

const StyledCardContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
`;

const StyledCardHeading = TypeHeadingPrimary.withComponent('h2').extend`
  margin: ${spaceStackDouble};

  ${StyledCard}:hover & {
    color: ${colorPeacockLight};
    text-decoration: underline;
  }
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
