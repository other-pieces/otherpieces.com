import styled from 'styled-components';

import {
  colorCharcoal,
  fontFamilySans,
  weightRegular
} from '../../theme/settings';

const TypeBylineHeading = styled.span`
  font-family: ${fontFamilySans};
  font-weight: ${weightRegular};
  color: ${colorCharcoal};
  text-transform: uppercase;

  @media (max-width: 575px) {
    font-size: 1.2rem;
    line-height: 1.333;
    letter-spacing: 0.2rem;
  }

  @media (min-width: 576px) {
    font-size: 1.4rem;
    line-height: 1.429;
    letter-spacing: 0.4rem;
  }
`;

export default TypeBylineHeading;
