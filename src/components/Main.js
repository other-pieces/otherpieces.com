import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Main = ({ children }) => (
  <StyledMain>
    {children}
  </StyledMain>
);

const StyledMain = styled.main`
  grid-column: 2 / 3;
`;

StyledMain.propTypes = {
  children: PropTypes.array,
};

export default Main;
