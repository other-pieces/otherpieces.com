import React from 'react';
import styled from 'styled-components';

import TypeNavLink from './Typography/TypeNavLink';

import {
  spaceInlineDefault
} from '../theme/settings';

const Nav = () => (
  <StyledNav>
    <StyledLink to="/style">Style</StyledLink>
    <StyledLink to="/lifestyle">Lifestyle</StyledLink>
    <StyledLink to="/travel">Travel</StyledLink>
    <StyledLink to="/about">About</StyledLink>
    <StyledLink to="/search">Search</StyledLink>
  </StyledNav>
);

const StyledNav = styled.nav`
  max-width: 120.8rem;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
`;

const StyledLink = TypeNavLink.extend`
  &:not(:last-child) {
    margin: ${spaceInlineDefault};
  }
`;

export default Nav;
