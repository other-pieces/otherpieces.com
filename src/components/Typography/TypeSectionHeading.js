import styled from 'styled-components';

import {
  breakpointDesktop,
  breakpointMobile,
  colorCharcoal,
  fontFamilySans,
  weightSemiBold
} from '../../theme/settings';

const TypeSectionHeading = styled.span`
  font-family: ${fontFamilySans};
  font-weight: ${weightSemiBold};
  color: ${colorCharcoal};
  text-transform: uppercase;

  @media (max-width: ${breakpointMobile}) {
    font-size: 2rem;
    line-height: 1.3;
    letter-spacing: 0.2rem;
  }

  @media (min-width: ${breakpointDesktop}) {
    font-size: 2.4rem;
    line-height: 1.5;
    letter-spacing: 0.4rem;
  }
`;

export default TypeSectionHeading;
