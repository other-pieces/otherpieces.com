import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import {
  spaceQuad
} from '../theme/settings';

const CardGrid = ({ children }) => (
  <StyledCardGrid>
    {children}
  </StyledCardGrid>
);

const StyledCardGrid = styled.div`
  margin-right: auto;
  margin-bottom: ${spaceQuad};
  margin-left: auto;
  max-width: 120.8rem;
  display: grid;
  grid-template-columns: 36rem 36rem 36rem;
  grid-gap: ${spaceQuad};
`;

CardGrid.propTypes = {
  children: PropTypes.node.isRequired
};

export default CardGrid;
