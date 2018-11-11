import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import TypeTitle1 from '../../Typography/TypeTitle1';
import TypeBylineHeading from '../../Typography/TypeBylineHeading';

import { colorPeacock048, spaceStackDouble, spaceNone } from '../../../theme/settings';

const Card = ({ heading, linkText, image, imageAlt, path, subhead }) => (
  <StyledCard to={path}>
    <HiddenLinkText>{linkText}</HiddenLinkText>
    <StyledCardImage fluid={image} alt={imageAlt} />
    <StyledCardContent>
      {heading && <StyledCardHeading as="h2">{heading}</StyledCardHeading>}
      {subhead && <StyledCardSubhead as="p">{subhead}</StyledCardSubhead>}
    </StyledCardContent>
  </StyledCard>
);

const StyledCard = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;

  &:focus {
    outline: 0.4rem solid ${colorPeacock048};
  }
`;

const HiddenLinkText = styled.span`
  position: absolute;
  clip: rect(1px, 1px, 1px, 1px);
`;

const StyledCardImage = styled(Img)`
  margin: ${spaceStackDouble};
  width: 100%;

  @media (max-width: 575px) {
    max-width: 28.8rem;
  }

  @media (min-width: 576px) {
    max-width: 36rem;
  }

  ${StyledCard}:hover &,
  ${StyledCard}:focus & {
    filter: brightness(1.02);
  }
`;

const StyledCardContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
`;

const StyledCardHeading = styled(TypeTitle1)`
  margin: ${spaceStackDouble};

  ${StyledCard}:hover &,
  ${StyledCard}:focus & {
    color: ${colorPeacock048};
    text-decoration: underline;
  }
`;

const StyledCardSubhead = styled(TypeBylineHeading)`
  margin: ${spaceNone};
`;

Card.propTypes = {
  heading: PropTypes.string,
  linkText: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  imageAlt: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  subhead: PropTypes.string,
};

Card.defaultProps = {
  heading: null,
  subhead: null,
};

export default Card;
