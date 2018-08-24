import styled from 'styled-components';

import {
  colorCharcoal,
  fontFamilySerif,
  weightRegular
} from '../../theme/settings';

const TypeHeadingPrimary = styled.span`
  font-family: ${fontFamilySerif};
  font-size: 3.2rem;
  font-weight: ${weightRegular};
  color: ${colorCharcoal};
  line-height: 1.125;
`;

export default TypeHeadingPrimary;
