import styled from 'styled-components';

import {
  colorCharcoal,
  fontFamilySerif,
  weightRegular
} from '../../theme/settings';

const TypeHeadline = styled.span`
  font-family: ${fontFamilySerif};
  font-size: 7.2rem;
  font-weight: ${weightRegular};
  color: ${colorCharcoal};
  line-height: 1;
`;

export default TypeHeadline;
