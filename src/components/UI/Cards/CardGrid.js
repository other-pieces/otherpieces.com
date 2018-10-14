import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { spaceQuad } from '../../../theme/settings';

const CardGrid = ({ children }) => <StyledCardGrid>{children}</StyledCardGrid>;

const StyledCardGrid = styled.div`
  margin-bottom: ${spaceQuad};
  width: 100%;
  display: grid;
  grid-gap: ${spaceQuad};
  justify-content: center;

  @media (max-width: 575px) {
    grid-template-columns: repeat(auto-fill, 28.8rem);
  }

  @media (min-width: 576px) {
    grid-template-columns: repeat(auto-fill, 36rem);
  }
`;

CardGrid.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CardGrid;
