import styled from 'styled-components';

import {
  fontFamilySans,
  weightSemiBold
} from '../../theme/settings';

const TypeButton = styled.span`
  font-family: ${fontFamilySans};
  font-weight: ${weightSemiBold};
  line-height: 1;
  letter-spacing: 0.2rem;
  text-transform: uppercase;

  @media (max-width: 575px) {
    font-size: 1.4rem;
  }

  @media (min-width: 576px) {
    font-size: 1.6rem;
  }
`;

export default TypeButton;
