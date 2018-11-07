import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import TypeLabel from '../../Typography/TypeLabel';

import { spaceStackHalf } from '../../../theme/settings';

const FormLabel = ({ children, name }) => (
  <StyledLabel as="label" htmlFor={name}>
    {children}
  </StyledLabel>
);

const StyledLabel = styled(TypeLabel)`
  margin: ${spaceStackHalf};
  display: block;
`;

FormLabel.propTypes = {
  children: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default FormLabel;
