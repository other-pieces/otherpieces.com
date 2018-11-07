import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import FormFieldset from './FormFieldset';
import FormField from './FormField';
import FormLabel from './FormLabel';

const FormInput = ({ label, name, placeholder }) => (
  <FormFieldset>
    <FormLabel name={name}>{label}</FormLabel>
    <StyledInput as="input" type="text" name={name} id={name} placeholder={placeholder} />
  </FormFieldset>
);

const StyledInput = styled(FormField)`
  width: 100%;
`;

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

FormInput.defaultProps = {
  placeholder: null,
};

export default FormInput;
