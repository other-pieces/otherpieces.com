import styled from 'styled-components';
import Link from 'gatsby-link';

import { colorCharcoal, colorPeacockLight, fontFamilySans, weightSemiBold } from '../../theme/settings';

const TypeNavLink = styled(Link)`
  font-family: ${fontFamilySans};
  font-weight: ${weightSemiBold};
  color: ${colorCharcoal};
  letter-spacing: 0.4rem;
  text-transform: uppercase;
  text-decoration: none;

  @media (max-width: 575px) {
    font-size: 1.6rem;
    line-height: 1.25;
  }

  @media (min-width: 576px) {
    font-size: 1.8rem;
    line-height: 1.111;
  }

  &:hover,
  &:focus {
    color: ${colorPeacockLight};
    text-decoration: underline;
  }

  &:focus {
    outline: 0.2rem solid ${colorPeacockLight};
    outline-offset: 0.4rem;
  }
`;

export default TypeNavLink;
