import styled from 'styled-components';

import { colorCharcoal012, fontFamilySans, weightLight } from '../../theme/settings';

const TypeBody = styled.span`
  font-family: ${fontFamilySans};
  font-weight: ${weightLight};
  color: ${colorCharcoal012};

  @media (max-width: 575px) {
    font-size: 1.6rem;
    line-height: 1.625;
  }

  @media (min-width: 576px) {
    font-size: 1.8rem;
    line-height: 1.778;
  }
`;

export default TypeBody;
