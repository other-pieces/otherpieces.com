import styled from 'styled-components';

import {
  colorCharcoal,
  fontFamilySerif,
  weightRegular
} from '../../theme/settings';

const TypeHeadingTertiary = styled.span`
  line-height: 1.125;
  font-family: ${fontFamilySerif};
  font-size: 2.4rem;
  font-weight: ${weightRegular};
  color: ${colorCharcoal};
  line-height: 1.167;
`;

export default TypeHeadingTertiary;
