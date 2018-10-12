import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import TypeNavLink from '../../Typography/TypeNavLink';
import TypeCaption from '../../Typography/TypeCaption';

import {
  colorPeacockLight,
  spaceStackHalf,
  spaceStackDefault,
  spaceNone
} from '../../../theme/settings';

// TODO: Implement redundant click event pattern: https://inclusive-components.design/cards/

const CardSmall = ({
  caption,
  heading,
  image,
  imageAlt,
  linkText,
  path
}) => (
  <StyledCardSmall to={path}>
    <HiddenLinkText>
      {linkText}
    </HiddenLinkText>
    <StyledCardSmallImage src={image} alt={imageAlt} />
    <StyledCardSmallContent>
      {heading &&
        <StyledCardSmallHeading>
          {heading}
        </StyledCardSmallHeading>
      }
      {caption &&
        <StyledCardSmallCaption>
          {caption}
        </StyledCardSmallCaption>
      }
    </StyledCardSmallContent>
  </StyledCardSmall>
);

const StyledCardSmall = styled(Link)`
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

const StyledCardSmallImage = styled.img`
  margin: ${spaceStackDefault};
  width: 100%;

  ${StyledCardSmall}:hover &,
  ${StyledCardSmall}:focus & {
    filter: brightness(1.02);
  }
`;

const StyledCardSmallContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
  text-align: center;
`;

const StyledCardSmallHeading = TypeNavLink.withComponent('h3').extend`
  margin: ${spaceStackHalf};

  ${StyledCardSmall}:hover &,
  ${StyledCardSmall}:focus & {
    color: ${colorPeacockLight};
    text-decoration: underline;
  }
`;

const StyledCardSmallCaption = TypeCaption.withComponent('p').extend`
  margin: ${spaceNone};
  text-transform: lowercase;
`;

CardSmall.propTypes = {
  caption: PropTypes.string,
  heading: PropTypes.string,
  image: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default CardSmall;
