import styled from 'styled-components';

import {
  colorCharcoal,
  fontFamilySans,
  weightLight
} from '../../theme/settings';

const TypeBody = styled.span`
  font-family: ${fontFamilySans};
  font-size: 1.8rem;
  font-weight: ${weightLight};
  color: ${colorCharcoal};
  line-height: 1.778;
`;

export default TypeBody;
