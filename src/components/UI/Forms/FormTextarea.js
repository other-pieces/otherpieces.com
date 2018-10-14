import React from 'react';
import PropTypes from 'prop-types';

import FormFieldset from './FormFieldset';
import FormField from './FormField';
import FormLabel from './FormLabel';

const FormTextarea = ({ className, label, name, placeholder }) => (
  <FormFieldset className={className}>
    <FormLabel name={name}>{label}</FormLabel>
    <StyledTextarea type="text" name={name} id={name} placeholder={placeholder} />
  </FormFieldset>
);

const StyledTextarea = FormField.withComponent('textarea').extend`
  width: 100%;
  min-height: 12.8rem;
  resize: vertical;
`;

FormTextarea.propTypes = {
  className: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

FormTextarea.defaultProps = {
  placeholder: null,
};

export default FormTextarea;
