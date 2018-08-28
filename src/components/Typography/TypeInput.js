import styled from 'styled-components';

import {
  colorCharcoal,
  colorCharcoalLight,
  fontFamilySans,
  weightLight,
  weightRegular
} from '../../theme/settings';

const TypeInput = styled.span`
  font-family: ${fontFamilySans};
  font-size: 1.8rem;
  font-weight: ${weightRegular};
  color: ${colorCharcoal};
  line-height: 1.778;

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
