import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import {
  colorCharcoal,
  colorPeacock,
  transition,
  weightExtraBold
} from '../theme/settings';

const Logo = () => (
  <StyledLogo to="/">
    Other Pieces
  </StyledLogo>
);

const StyledLogo = styled(Link)`
  font-size: 7vw;
  font-weight: ${weightExtraBold};
  line-height: 1;
  letter-spacing: 0.5em;
  color: ${colorCharcoal};
  text-transform: uppercase;
  text-decoration: none;
  transition: ${transition} color;

  &:hover {
    color: ${colorPeacock};
  }
`;

export default Logo;
