import styled from 'styled-components';

import {
  colorCharcoal,
  fontFamilySerif,
  weightRegular
} from '../../theme/settings';

const TypeTitle2 = styled.span`
  font-family: ${fontFamilySerif};
  font-weight: ${weightRegular};
  color: ${colorCharcoal};

  @media (max-width: 575px) {
    font-size: 2rem;
    line-height: 1.2;
  }

  @media (min-width: 576px) {
    font-size: 3.2rem;
    line-height: 1.125;
  }
`;

export default TypeTitle2;
