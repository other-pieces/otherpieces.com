import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const HiddenTitle = ({ children }) => (
  <StyledHiddenTitle>
    {children}
  </StyledHiddenTitle>
);

const StyledHiddenTitle = styled.h1`
  position: absolute;
  clip: rect(1px, 1px, 1px, 1px);
`;

HiddenTitle.propTypes = {
  children: PropTypes.node.isRequired
};

export default HiddenTitle;
