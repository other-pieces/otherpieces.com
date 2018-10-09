import React from 'react';
import PropTypes from 'prop-types';

// TODO: Style form labels when fieldset is disabled
const FormFieldset = ({
  children,
  className,
  isTrueFieldset
}) => (
  <>
    {isTrueFieldset ?
      <fieldset className={className}>
        {children}
      </fieldset>
      :
      <div className={className}>
        {children}
      </div>
    }
  </>
);

FormFieldset.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  isTrueFieldset: PropTypes.bool
};

export default FormFieldset;
