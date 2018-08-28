import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const ButtonDefault = ({ children }) => (
  <button>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.string.isRequired
};

export default ButtonDefault;
