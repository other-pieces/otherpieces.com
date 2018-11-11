import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import TypeButton from '../../Typography/TypeButton';

import {
  colorLinen095,
  colorPeacock018,
  colorPeacock028,
  colorPeacock048,
  colorStateDisabled,
  spaceDefault,
} from '../../../theme/settings';

const ButtonDefault = ({ children, className }) => (
  <StyledButtonDefault as="button" className={className}>
    {children}
  </StyledButtonDefault>
);

const StyledButtonDefault = styled(TypeButton)`
  color: ${colorLinen095};
  background-color: ${colorPeacock028};
  border: none;
  cursor: pointer;

  @media (max-width: 575px) {
    padding: 1.3rem 2.4rem;
  }

  @media (min-width: 576px) {
    padding: ${spaceDefault} 2.4rem;
  }

  &:hover,
  &:focus {
    background-color: ${colorPeacock048};
  }

  &:active {
    background-color: ${colorPeacock018};
  }

  &:focus {
    outline: 0.2rem solid ${colorPeacock048};
    outline-offset: 0.2rem;
  }

  &:disabled {
    background-color: ${colorStateDisabled};
    cursor: not-allowed;
  }
`;

ButtonDefault.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
};

export default ButtonDefault;
