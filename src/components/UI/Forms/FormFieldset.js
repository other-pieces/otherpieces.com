import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import {
  spaceStackDouble
} from '../../../theme/settings';

// TODO: Style form labels when fieldset is disabled
const FormFieldset = ({
  children,
}) => (
  <StyledFieldset>
    {children}
  </StyledFieldset>
);

const StyledFieldset = styled.fieldset`
  margin: ${spaceStackDouble};
`;

FormFieldset.propTypes = {
  children: PropTypes.node.isRequired
};

export default FormFieldset;
