import styled from 'styled-components';

import {
  colorCharcoal,
  fontFamilySans,
  weightSemiBold
} from '../../theme/settings';

const TypeLabel = styled.span`
  font-family: ${fontFamilySans};
  font-size: 1.6rem;
  font-weight: ${weightSemiBold};
  color: ${colorCharcoal};
  line-height: 1.25;
  letter-spacing: 0.3rem;
  text-transform: uppercase;
`;

export default TypeLabel;
