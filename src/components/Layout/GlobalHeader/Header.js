import React from 'react';
import styled from 'styled-components';

import Logo from './Logo';
import Nav from './Nav';

import {
  breakpointSmallCeiling,
  breakpointMediumFloor,
  spaceDouble,
  spaceStackDouble,
  spaceStackOct,
  spaceQuad
} from '../../../theme/settings';

const Header = () => (
  <StyledHeader>
    <Logo />
    <Nav />
  </StyledHeader>
);

const StyledHeader = styled.header`
  grid-column: 2 / 3;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 575px) {
    margin: ${spaceStackDouble};
    padding-top: ${spaceDouble};
    padding-bottom: ${spaceDouble};
  }

  @media (min-width: 576px) {
    margin: ${spaceStackOct};
    padding-top: ${spaceQuad};
    padding-bottom: ${spaceDouble};
  }
`;

export default Header;
