import styled from 'styled-components';

import {
  breakpointMediumFloor,
  breakpointSmallCeiling,
  colorCharcoal,
  colorCharcoalLight,
  fontFamilySans,
  weightLight,
  weightRegular
} from '../../theme/settings';

const TypeInput = styled.span`
  font-family: ${fontFamilySans};
  font-weight: ${weightRegular};
  color: ${colorCharcoal};

  @media (max-width: 575px) {
    font-size: 1.6rem;
    line-height: 1.625;
  }

  @media (min-width: 576px) {
    font-size: 1.8rem;
    line-height: 1.778;
  }

  &::placeholder {
    font-weight: ${weightLight};
    color: ${colorCharcoalLight};
  }

  &::-webkit-input-placeholder { /* Chrome/Opera/Safari */
    font-weight: ${weightLight};
    color: ${colorCharcoalLight};
  }

  &::-moz-placeholder { /* Firefox 19+ */
    font-weight: ${weightLight};
    color: ${colorCharcoalLight};
  }

  &:-ms-input-placeholder { /* IE 10+ */
    font-weight: ${weightLight};
    color: ${colorCharcoalLight};
  }
`;

export default TypeInput;
