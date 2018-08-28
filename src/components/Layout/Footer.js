import React from 'react';
import styled from 'styled-components';

import TypeCaption from '../Typography/TypeCaption';

import {
  colorCharcoal,
  spaceInsetDouble
} from '../../theme/settings';

const Footer = () => (
  <StyledFooter>
    <StyledCopyright>&copy; 2018 Other Pieces. All rights reserved.</StyledCopyright>
  </StyledFooter>
);

const StyledFooter = styled.footer`
  padding: ${spaceInsetDouble};
  grid-column: 2 / 3;
  text-align: center;
`;

const StyledCopyright = TypeCaption.withComponent('small').extend`
  color: ${colorCharcoal};
`;

export default Footer;
