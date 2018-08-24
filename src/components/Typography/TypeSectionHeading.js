import styled from 'styled-components';

import {
  colorCharcoal,
  fontFamilySans,
  weightSemiBold
} from '../../theme/settings';

const TypeSectionHeading = styled.span`
  font-family: ${fontFamilySans};
  font-size: 2.4rem;
  font-weight: ${weightSemiBold};
  color: ${colorCharcoal};
  line-height: 1.5;
  letter-spacing: 0.4rem;
  text-transform: uppercase;
`;

export default TypeSectionHeading;
