import styled from 'styled-components';

import {
  breakpointMediumFloor,
  breakpointSmallCeiling,
  colorCharcoal,
  fontFamilySerif,
  weightRegular
} from '../../theme/settings';

const TypeMastheadHeadline = styled.span`
  font-family: ${fontFamilySerif};
  font-weight: ${weightRegular};
  color: ${colorCharcoal};

  @media (max-width: 575px) {
    font-size: 6.4rem;
    line-height: 1.125;
  }

  @media (min-width: 576px) {
    font-size: 9.6rem;
    line-height: 1.167;
  }
`;

export default TypeMastheadHeadline;
