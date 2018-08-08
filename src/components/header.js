import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import Logo from './Logo';
import Nav from './Nav';

const Header = () => (
  <StyledHeader>
    <Logo />
    <Nav />
  </StyledHeader>
);

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Header;
