import React from 'react';
import styled from 'styled-components';

import TypeNavLink from '../../Typography/TypeNavLink';

import { spaceDefault } from '../../../theme/settings';

const Nav = () => (
  <StyledNav>
    <StyledLink to="/style">Style</StyledLink>
    <StyledLink to="/lifestyle">Lifestyle</StyledLink>
    <StyledLink to="/travel">Travel</StyledLink>
    <StyledLink to="/about">About</StyledLink>
  </StyledNav>
);

const StyledNav = styled.nav`
  margin-top: -${spaceDefault};
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  align-items: center;

  @media (max-width: 575px) {
    justify-content: center;
  }

  @media (min-width: 576px) {
    justify-content: space-between;
  }
`;

const StyledLink = styled(TypeNavLink)`
  margin-top: ${spaceDefault};

  &:not(:last-child) {
    margin-right: ${spaceDefault};
  }
`;

export default Nav;
