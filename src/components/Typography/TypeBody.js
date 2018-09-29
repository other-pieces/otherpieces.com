import styled from 'styled-components';

import {
  breakpointDesktop,
  breakpointMobile,
  colorCharcoal,
  fontFamilySans,
  weightLight
} from '../../theme/settings';

const TypeBody = styled.span`
  font-family: ${fontFamilySans};
  font-weight: ${weightLight};
  color: ${colorCharcoal};

  @media (max-width: ${breakpointMobile}) {
    font-size: 1.6rem;
    line-height: 1.625;
  }

  @media (min-width: ${breakpointDesktop}) {
    font-size: 1.8rem;
    line-height: 1.778;
  }
`;

export default TypeBody;
