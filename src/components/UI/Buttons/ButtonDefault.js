import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import TypeButton from '../../Typography/TypeButton';

import {
  colorLinen,
  colorPeacock,
  colorPeacockLight,
  colorPeacockDark,
  colorStateDisabled,
  spaceInsetSquishDouble
} from '../../../theme/settings';

const ButtonDefault = ({
  children,
  className
}) => (
  <StyledButtonDefault className={className}>
    {children}
  </StyledButtonDefault>
);

const StyledButtonDefault = TypeButton.withComponent('button').extend`
  padding: ${spaceInsetSquishDouble};
  color: ${colorLinen};
  background-color: ${colorPeacock};
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${colorPeacockLight};
  }

  &:active {
    background-color: ${colorPeacockDark};
  }

  &:focus {
    outline: 0.2rem solid ${colorPeacockLight};
    outline-offset: 0.2rem;
  }

  &:disabled {
    background-color: ${colorStateDisabled};
    cursor: not-allowed;
  }
`;

ButtonDefault.propTypes = {
  children: PropTypes.node.isRequired
};

export default ButtonDefault;
