import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import {
  spaceDouble
} from '../../../theme/settings';

const CardSmallGrid = ({ children }) => (
  <StyledCardGrid>
    {children}
  </StyledCardGrid>
);

const StyledCardGrid = styled.div`
  width: 100%;
  display: grid;
  grid-gap: ${spaceDouble};
  justify-content: center;

  @media (max-width: 959px) {
    grid-template-columns: 25.6rem;
  }

  @media (min-width: 960px) {
    grid-template-columns: repeat(auto-fit, 25.6rem);
  }
`;

CardSmallGrid.propTypes = {
  children: PropTypes.node.isRequired
};

export default CardSmallGrid;
