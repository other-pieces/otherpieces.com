import styled from 'styled-components';

import {
  spaceDouble,
  spaceQuad
} from '../theme/settings';

const GlobalLayout = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;

  @media (max-width: 575px) {
    grid-template-columns: ${spaceDouble} 1fr ${spaceDouble};
  }

  @media (min-width: 576px) and (max-width: 1336px) {
    grid-template-columns: ${spaceQuad} 1fr ${spaceQuad};
  }

  @media (min-width: 1337px) {
    grid-template-columns: 1fr 120.8rem 1fr;
  }
`;

export default GlobalLayout;
