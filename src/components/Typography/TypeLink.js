import styled from 'styled-components';
import Link from 'gatsby-link';

import {
  breakpointDesktop,
  breakpointMobile,
  colorCharcoal,
  colorPeacockLight,
  fontFamilySans,
  weightSemiBold
} from '../../theme/settings';

const TypeLink = styled(Link)`
  font-family: ${fontFamilySans};
  font-weight: ${weightSemiBold};
  color: ${colorCharcoal};

  @media (max-width: ${breakpointMobile}) {
    font-size: 1.6rem;
    line-height: 1.625;
  }

  @media (min-width: ${breakpointDesktop}) {
    font-size: 1.8rem;
    line-height: 1.778;
  }

  &:hover {
    color: ${colorPeacockLight};
  }

  &:focus {
    outline: 0.2rem solid ${colorPeacockLight};
    outline-offset: 0.4rem;
  }
`;

export default TypeLink;
