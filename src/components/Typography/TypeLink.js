import styled from 'styled-components';
import Link from 'gatsby-link';

import {
  colorCharcoal,
  colorPeacockLight,
  fontFamilySans,
  weightSemiBold
} from '../../theme/settings';

const TypeLink = styled(Link)`
  font-family: ${fontFamilySans};
  font-size: 1.8rem;
  font-weight: ${weightSemiBold};
  color: ${colorCharcoal};
  line-height: 1.778;

  &:hover {
    color: ${colorPeacockLight};
  }

  &:focus {
    outline: 0.2rem solid ${colorPeacockLight};
    outline-offset: 0.4rem;
  }
`;

export default TypeLink;
