import styled from 'styled-components';

import { colorCharcoal, fontFamilySerif, weightRegular } from '../../theme/settings';

const TypeTitle3 = styled.span`
  font-family: ${fontFamilySerif};
  font-weight: ${weightRegular};
  color: ${colorCharcoal};

  @media (max-width: 575px) {
    font-size: 1.6rem;
    line-height: 1.125;
  }

  @media (min-width: 576px) {
    font-size: 2.4rem;
    line-height: 1.167;
  }
`;

export default TypeTitle3;
