import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import {
  spaceDouble
} from '../theme/settings';

const CardSmallGrid = ({ children }) => (
  <StyledCardGrid>
    {children}
  </StyledCardGrid>
);

const StyledCardGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, 25.6rem);
  grid-gap: ${spaceDouble};
  justify-content: center;
`;

CardSmallGrid.propTypes = {
  children: PropTypes.node.isRequired
};

export default CardSmallGrid;
