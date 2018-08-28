import React from 'react';
import PropTypes from 'prop-types';

import TypeLabel from '../../Typography/TypeLabel';

import {
  colorCharcoalLighter,
  spaceStackHalf
} from '../../../theme/settings';

const FormLabel = ({
  children,
  name,
}) => (
  <StyledLabel htmlFor={name}>
    {children}
  </StyledLabel>
);

const StyledLabel = TypeLabel.withComponent('label').extend`
  margin: ${spaceStackHalf};
  display: block;
`;

FormLabel.propTypes = {
  children: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default FormLabel;
