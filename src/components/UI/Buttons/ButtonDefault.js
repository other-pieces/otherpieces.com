import React from 'react';
import PropTypes from 'prop-types';

import TypeButton from '../../Typography/TypeButton';

import {
  colorLinen,
  colorPeacock,
  colorPeacockLight,
  colorPeacockDark,
  colorStateDisabled,
  spaceDefault,
} from '../../../theme/settings';

const ButtonDefault = ({ children, className }) => (
  <StyledButtonDefault className={className}>{children}</StyledButtonDefault>
);

const StyledButtonDefault = TypeButton.withComponent('button').extend`
  color: ${colorLinen};
  background-color: ${colorPeacock};
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
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
};

export default ButtonDefault;
