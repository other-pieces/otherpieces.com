import styled from 'styled-components';

import {
  colorCharcoal,
  fontFamilySerif,
  weightRegular
} from '../../theme/settings';

const TypeHeadline = styled.span`
  font-family: ${fontFamilySerif};
  font-weight: ${weightRegular};
  color: ${colorCharcoal};
  line-height: 1;

  @media (max-width: 575px) {
    font-size: 4.8rem;
  }

  @media (min-width: 576px) {
    font-size: 7.2rem;
  }
`;

export default TypeHeadline;
