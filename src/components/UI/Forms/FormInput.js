import React from 'react';
import PropTypes from 'prop-types';

import FormFieldset from './FormFieldset';
import FormField from './FormField';
import FormLabel from './FormLabel';

const FormInput = ({
  label,
  name,
  placeholder
}) => (
  <FormFieldset>
    <FormLabel name={name}>
      {label}
    </FormLabel>
    <StyledInput
      type="text"
      name={name}
      id={name}
      placeholder={placeholder}
    />
  </FormFieldset>
);

const StyledInput = FormField.withComponent('input').extend`
  max-width: 25.6rem;
`;

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired
};

export default FormInput;
