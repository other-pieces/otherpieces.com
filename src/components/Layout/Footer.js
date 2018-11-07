import React from 'react';
import styled from 'styled-components';

import TypeCaption from '../Typography/TypeCaption';

import { colorCharcoal, spaceInsetDouble } from '../../theme/settings';

const Footer = () => (
  <StyledFooter>
    <StyledCopyright as="small">&copy; 2018 Other Pieces. All rights reserved.</StyledCopyright>
  </StyledFooter>
);

const StyledFooter = styled.footer`
  padding: ${spaceInsetDouble};
  grid-column: 2 / 3;
  text-align: center;
`;

const StyledCopyright = styled(TypeCaption)`
  color: ${colorCharcoal};
`;

export default Footer;
