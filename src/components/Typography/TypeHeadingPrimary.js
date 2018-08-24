import styled from 'styled-components';

import {
  colorCharcoal,
  fontFamilySerif,
  weightRegular
} from '../../theme/settings';

const TypeHeadingPrimary = styled.span`
  font-family: ${fontFamilySerif};
  font-size: 3.6rem;
  font-weight: ${weightRegular};
  color: ${colorCharcoal};
  line-height: 1.222;
`;

export default TypeHeadingPrimary;
