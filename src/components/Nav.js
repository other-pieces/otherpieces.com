import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import {
  colorCharcoal,
  spaceInlineDefault,
  spaceInsetSquishDouble,
  weightSemiBold,
  transition
} from '../theme/settings';

const Nav = () => (
  <StyledNav>
    <StyledLink to="/posts">Style</StyledLink>
    <StyledLink to="/about">Lifestyle</StyledLink>
    <StyledLink to="/about">Travel</StyledLink>
    <StyledLink to="/about">About</StyledLink>
    <StyledLink to="/about">Search</StyledLink>
  </StyledNav>
);

const StyledNav = styled.nav`
  padding: ${spaceInsetSquishDouble};
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
`;

const StyledLink = styled(Link)`
  margin: ${spaceInlineDefault};
  font-size: 1.8rem;
  font-weight: ${weightSemiBold};
  line-height: 2rem;
  letter-spacing: 0.4rem;
  color: ${colorCharcoal};
  text-transform: uppercase;
  text-decoration: none;
  transition: ${transition} color;
`;

export default Nav;
