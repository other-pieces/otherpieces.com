import styled from 'styled-components';

import {
  fontFamilySans,
  weightSemiBold
} from '../../theme/settings';

const TypeButton = styled.span`
  font-family: ${fontFamilySans};
  font-size: 1.6rem;
  font-weight: ${weightSemiBold};
  line-height: 1;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
`;

export default TypeButton;
