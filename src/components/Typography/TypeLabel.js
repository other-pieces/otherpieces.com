import styled from 'styled-components';

import {
  breakpointDesktop,
  breakpointMobile,
  colorCharcoal,
  fontFamilySans,
  weightSemiBold
} from '../../theme/settings';

const TypeLabel = styled.span`
  font-family: ${fontFamilySans};
  font-weight: ${weightSemiBold};
  color: ${colorCharcoal};
  text-transform: uppercase;

  @media (max-width: ${breakpointMobile}) {
    font-size: 1.4rem;
    line-height: 1.286;
    letter-spacing: 0.2rem;
  }

  @media (min-width: ${breakpointDesktop}) {
    font-size: 1.8rem;
    line-height: 1.25;
    letter-spacing: 0.3rem;
  }
`;

export default TypeLabel;
