import React from 'react';
import PropTypes from 'prop-types';

import {
  spaceStackDouble
} from '../../../theme/settings';

// TODO: Style form labels when fieldset is disabled
const FormFieldset = ({
  children,
  className
}) => (
  <fieldset className={className}>
    {children}
  </fieldset>
);

FormFieldset.propTypes = {
  children: PropTypes.node.isRequired
};

export default FormFieldset;
