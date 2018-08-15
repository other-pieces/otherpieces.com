import React from 'react';
import styled from 'styled-components';

import Logo from './Logo';
import Nav from './Nav';

import {
  spaceDouble,
  spaceStackOct,
  spaceQuad
} from '../theme/settings';

const Header = () => (
  <StyledHeader>
    <Logo />
    <Nav />
  </StyledHeader>
);

const StyledHeader = styled.header`
  margin: ${spaceStackOct};
  padding-top: ${spaceQuad};
  padding-bottom: ${spaceDouble};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Header;
