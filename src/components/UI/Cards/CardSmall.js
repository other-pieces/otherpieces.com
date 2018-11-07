import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import TypeNavLink from '../../Typography/TypeNavLink';
import TypeCaption from '../../Typography/TypeCaption';

import { colorPeacockLight, spaceStackHalf, spaceStackDefault, spaceNone } from '../../../theme/settings';

// TODO: Implement redundant click event pattern: https://inclusive-components.design/cards/

const CardSmall = ({ caption, heading, fixed, imageAlt, linkText, path }) => (
  <StyledCardSmall to={path}>
    <HiddenLinkText>{linkText}</HiddenLinkText>
    <StyledCardSmallImage fixed={fixed} alt={imageAlt} />
    <StyledCardSmallContent>
      {heading && <StyledCardSmallHeading as="h3">{heading}</StyledCardSmallHeading>}
      {caption && <StyledCardSmallCaption as="p">{caption}</StyledCardSmallCaption>}
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

const StyledCardSmallImage = styled(Img)`
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

const StyledCardSmallHeading = styled(TypeNavLink)`
  margin: ${spaceStackHalf};

  ${StyledCardSmall}:hover &,
  ${StyledCardSmall}:focus & {
    color: ${colorPeacockLight};
    text-decoration: underline;
  }
`;

const StyledCardSmallCaption = styled(TypeCaption)`
  margin: ${spaceNone};
  text-transform: lowercase;
`;

CardSmall.propTypes = {
  caption: PropTypes.string,
  heading: PropTypes.string,
  fixed: PropTypes.object.isRequired,
  imageAlt: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

CardSmall.defaultProps = {
  caption: null,
  heading: null,
};

export default CardSmall;
