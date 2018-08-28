import styled from 'styled-components';

import {
  colorCharcoalLight,
  fontFamilySans,
  weightLight
} from '../../theme/settings';

const TypePlaceholder = styled.span`
  font-family: ${fontFamilySans};
  font-size: 1.8rem;
  font-weight: ${weightLight};
  color: ${colorCharcoalLight};
  line-height: 1.778;
`;

export default TypePlaceholder;
