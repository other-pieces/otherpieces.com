import React from 'react';
import styled from 'styled-components';

import TypeCaption from './Typography/TypeCaption';

import {
  colorCharcoal,
  spaceInsetDouble
} from '../theme/settings';

const Footer = () => (
  <StyledFooter>
    <StyledCopyright>&copy; 2018 Other Pieces. All rights reserved.</StyledCopyright>
  </StyledFooter>
);

const StyledFooter = styled.footer`
  padding: ${spaceInsetDouble};
  text-align: center;
`;

const StyledCopyright = TypeCaption.extend`
  color: ${colorCharcoal};
`;

export default Footer;
