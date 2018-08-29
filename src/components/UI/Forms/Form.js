import React from 'react';
import PropTypes from 'prop-types';

const Form = ({
  children,
  name
}) => (
  <form
    name={name}
    method="POST"
    data-netlify
  >
    {/* <input
      type="checkbox"
      name="contact_me_by_fax_only"
      style="display:none !important"
      tabIndex="-1"
      autoComplete="off"
      data-netlify-honeypot
    /> */}
    {children}
    <div data-netlify-recaptcha></div>
  </form>
);

Form.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired
};

export default Form;
