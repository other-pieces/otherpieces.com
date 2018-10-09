import React from 'react';
import styled from 'styled-components';

import Logo from './Logo';
import Nav from './Nav';

import {
  breakpointMobile,
  breakpointDesktop,
  spaceDouble,
  spaceInsetStretchDouble,
  spaceStackOct,
  spaceStackQuad,
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

  @media (max-width: ${breakpointMobile}) {
    margin: ${spaceStackQuad};
    padding: ${spaceInsetStretchDouble};
  }

  @media (min-width: ${breakpointDesktop}) {
    margin: ${spaceStackOct};
    padding-top: ${spaceQuad};
    padding-bottom: ${spaceDouble};
  }
`;

export default Header;
