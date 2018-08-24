import styled from 'styled-components';

import {
  fontFamilySans,
  weightRegular
} from '../../theme/settings';

const TypeBylineHeading = styled.span`
  font-family: ${fontFamilySans};
  font-size: 1.4rem;
  font-weight: ${weightRegular};
  line-height: 1.429;
  letter-spacing: 0.4rem;
  text-transform: uppercase;
`;

export default TypeBylineHeading;
