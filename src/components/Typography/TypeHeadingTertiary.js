import styled from 'styled-components';

import {
  colorCharcoal,
  fontFamilySerif,
  weightRegular
} from '../../theme/settings';

const TypeHeadingTertiary = styled.span`
  font-family: ${fontFamilySerif};
  font-size: 2rem;
  font-weight: ${weightRegular};
  color: ${colorCharcoal};
  line-height: 1.2;
`;

export default TypeHeadingTertiary;
