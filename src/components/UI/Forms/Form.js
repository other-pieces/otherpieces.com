import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Form = ({
  children,
  className,
  name
}) => (
  <form
    className={className}
    name={name}
    method="POST"
    data-netlify
  >
    <StyledHoneyPot
      type="checkbox"
      name="contact_me_by_fax_only"
      tabIndex="-1"
      autoComplete="off"
      data-netlify-honeypot
    />
    {children}
    <div data-netlify-recaptcha></div>
  </form>
);

Form.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired
};

const StyledHoneyPot = styled('input')`
  display: none !important;
`;

export default Form;
