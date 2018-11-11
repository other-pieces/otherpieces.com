import styled from 'styled-components';
import Link from 'gatsby-link';

import { colorCharcoal012, colorPeacock048, fontFamilySans, weightSemiBold } from '../../theme/settings';

const TypeLink = styled(Link)`
  font-family: ${fontFamilySans};
  font-weight: ${weightSemiBold};
  color: ${colorCharcoal012};

  @media (max-width: 575px) {
    font-size: 1.6rem;
    line-height: 1.625;
  }

  @media (min-width: 576px) {
    font-size: 1.8rem;
    line-height: 1.778;
  }

  &:hover,
  &:focus {
    color: ${colorPeacock048};
  }

  &:focus {
    outline: 0.2rem solid ${colorPeacock048};
    outline-offset: 0.4rem;
  }
`;

export default TypeLink;
