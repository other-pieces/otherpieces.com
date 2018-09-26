import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Form = ({
  action,
  children,
  className,
  name
}) => (
  <form
    className={className}
    name={name}
    action={action}
    method="post"
    data-netlify="true"
    netlify-honeypot="contact_me_by_fax_only"
  >
    <input type="hidden" name="form-name" value={name} />
    <StyledHoneyPot
      type="checkbox"
      name="contact_me_by_fax_only"
      tabIndex="-1"
      autoComplete="off"
    />
     <div data-netlify-recaptcha></div>
    {children}
  </form>
);

Form.propTypes = {
  action: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired
};

const StyledHoneyPot = styled('input')`
  display: none !important;
`;

export default Form;
