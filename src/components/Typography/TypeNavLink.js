import styled from 'styled-components';
import Link from 'gatsby-link';

import {
  fontFamilySans,
  weightSemiBold
} from '../../theme/settings';

const TypeNavLink = styled(Link)`
  font-family: ${fontFamilySans};
  font-size: 1.8rem;
  font-weight: ${weightSemiBold};
  line-height: 1.111;
  letter-spacing: 0.4rem;
  text-transform: uppercase;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default TypeNavLink;
