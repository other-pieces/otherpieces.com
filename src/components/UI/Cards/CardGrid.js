import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import {
  spaceQuad
} from '../../../theme/settings';

const CardGrid = ({ children }) => (
  <StyledCardGrid>
    {children}
  </StyledCardGrid>
);

const StyledCardGrid = styled.div`
  margin-bottom: ${spaceQuad};
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, 36rem);
  grid-gap: ${spaceQuad};
  justify-content: center;
`;

CardGrid.propTypes = {
  children: PropTypes.node.isRequired
};

export default CardGrid;
