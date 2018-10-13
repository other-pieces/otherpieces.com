import React from 'react';
import PropTypes from 'prop-types';

import {
  colorLinen,
  colorPeacockLight,
  spaceDefault,
  spaceHalf
} from '../../theme/settings';

import TypeButton from '../Typography/TypeButton';

const SkipNav = ({ children, anchor }) => (
  <StyledSkipNav href={`#${anchor}`}>
    {children}
  </StyledSkipNav>
);

const StyledSkipNav = TypeButton.withComponent('a').extend`
  text-decoration: none;

  &:not(:focus) {
    padding: 0;
    width: 1px;
    height: 1px;
    position: absolute;
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(0px 0px 99.9% 99.9%);
    overflow: hidden;
    border: 0
  }

  @media (max-width: 575px) {
    &:focus {
      padding: 1.3rem 2.4rem;
    }
  }

  @media (min-width: 576px) {
    &:focus {
      padding: ${spaceDefault} 2.4rem;
    }
  }

  &:focus {
    position: fixed;
    top: ${spaceHalf};
    left: ${spaceHalf};
    color: ${colorLinen};
    background-color: ${colorPeacockLight};
    border: none;
    cursor: pointer;
    outline: 0.2rem solid ${colorPeacockLight};
    outline-offset: 0.2rem;
  }
`;

SkipNav.propTypes = {
  children: PropTypes.node.isRequired,
  anchor: PropTypes.string.isRequired
}

export default SkipNav;
