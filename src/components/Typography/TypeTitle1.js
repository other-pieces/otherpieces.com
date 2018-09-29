import styled from 'styled-components';

import {
  breakpointDesktop,
  breakpointMobile,
  colorCharcoal,
  fontFamilySerif,
  weightRegular
} from '../../theme/settings';

const TypeTitle1 = styled.span`
  font-family: ${fontFamilySerif};
  font-weight: ${weightRegular};
  color: ${colorCharcoal};

  @media (max-width: ${breakpointMobile}) {
    font-size: 2.6rem;
    line-height: 1.231;
  }

  @media (min-width: ${breakpointDesktop}) {
    font-size: 3.6rem;
    line-height: 1.222;
  }
`;

export default TypeTitle1;
