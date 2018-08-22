import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TypeHiddenTitle = ({ children }) => (
  <StyledTypeHiddenTitle>
    {children}
  </StyledTypeHiddenTitle>
);

const StyledTypeHiddenTitle = styled.h1`
  position: absolute;
  clip: rect(1px, 1px, 1px, 1px);
`;

TypeHiddenTitle.propTypes = {
  children: PropTypes.node.isRequired
};

export default TypeHiddenTitle;
