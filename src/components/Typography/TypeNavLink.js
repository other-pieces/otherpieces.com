import styled from 'styled-components';
import Link from 'gatsby-link';

import {
  colorCharcoal,
  colorPeacockLight,
  fontFamilySans,
  weightSemiBold
} from '../../theme/settings';

const TypeNavLink = styled(Link)`
  font-family: ${fontFamilySans};
  font-size: 1.8rem;
  font-weight: ${weightSemiBold};
  color: ${colorCharcoal};
  line-height: 1.111;
  letter-spacing: 0.4rem;
  text-transform: uppercase;
  text-decoration: none;

  &:hover {
    color: ${colorPeacockLight};
    text-decoration: underline;
  }

  &:focus {
    outline: 0.2rem solid ${colorPeacockLight};
    outline-offset: 0.4rem;
  }
`;

export default TypeNavLink;
