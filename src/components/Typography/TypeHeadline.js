import styled from 'styled-components';

import {
  breakpointDesktop,
  breakpointMobile,
  colorCharcoal,
  fontFamilySerif,
  weightRegular
} from '../../theme/settings';

const TypeHeadline = styled.span`
  font-family: ${fontFamilySerif};
  font-weight: ${weightRegular};
  color: ${colorCharcoal};
  line-height: 1;

  @media (max-width: ${breakpointMobile}) {
    font-size: 4.8rem;
  }

  @media (min-width: ${breakpointDesktop}) {
    font-size: 7.2rem;
  }
`;

export default TypeHeadline;
