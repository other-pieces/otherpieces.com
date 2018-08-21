import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import {
  colorCharcoal,
  colorPeacockLight,
  spaceInlineDefault,
  weightSemiBold
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

const StyledLink = styled(Link)`
  font-size: 1.8rem;
  font-weight: ${weightSemiBold};
  line-height: 2rem;
  letter-spacing: 0.4rem;
  color: ${colorCharcoal};
  text-transform: uppercase;
  text-decoration: none;

  &:not(:last-child) {
    margin: ${spaceInlineDefault};
  }

  &:hover {
    color: ${colorPeacockLight};
    text-decoration: underline;
  }

  &:focus {
    outline: 0.2rem solid ${colorPeacockLight};
    outline-offset: 0.4rem;
  }
`;

export default Nav;
