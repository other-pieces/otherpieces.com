import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Main = ({ children }) => (
  <StyledMain>
    {children}
  </StyledMain>
);

const StyledMain = styled.main`
  margin-right: auto;
  margin-left: auto;
  max-width: 120.8rem;
  width: 100%;
`;

StyledMain.propTypes = {
  children: PropTypes.func,
};

export default Main;
