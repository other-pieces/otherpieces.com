import styled from 'styled-components';

import {
  breakpointDesktop,
  breakpointMobile,
  colorCharcoal,
  fontFamilySerif,
  weightRegular
} from '../../theme/settings';

const TypeTitle3 = styled.span`
  font-family: ${fontFamilySerif};
  font-weight: ${weightRegular};
  color: ${colorCharcoal};

  @media (max-width: ${breakpointMobile}) {
    font-size: 1.6rem;
    line-height: 1.125;
  }

  @media (min-width: ${breakpointDesktop}) {
    font-size: 2.4rem;
    line-height: 1.167;
  }
`;

export default TypeTitle3;
