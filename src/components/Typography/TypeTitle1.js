import styled from 'styled-components';

import {
  breakpointMediumFloor,
  breakpointSmallCeiling,
  colorCharcoal,
  fontFamilySerif,
  weightRegular
} from '../../theme/settings';

const TypeTitle1 = styled.span`
  font-family: ${fontFamilySerif};
  font-weight: ${weightRegular};
  color: ${colorCharcoal};

  @media (max-width: 575px) {
    font-size: 2.6rem;
    line-height: 1.231;
  }

  @media (min-width: 576px) {
    font-size: 3.6rem;
    line-height: 1.222;
  }
`;

export default TypeTitle1;
