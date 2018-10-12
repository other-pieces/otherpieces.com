import React from 'react'
import styled from 'styled-components';

import {
  colorPeacockLight,
  spaceStackCenterOct,
  spaceStackCenterQuad
} from '../../../theme/settings';

const Divider = () => (
  <StyledDivider
    width="910"
    height="75"
    viewBox="0 0 910 75"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="presentation"
  >
    <path
      d="M2.054 57.123c14.486-10.803 24.571-12.98 40.217-2.287C57.388 65.168 71.735 79.451 91.6 69.364c25.142-12.767 45.006-27.978 74.401-27.56 20.825.295 27.982 12.357 45.903 18.932 49.375 18.113 94.913-21.4 139.44-33.956 26.706-7.53 49.49 6.2 72.363 17.039 13.771 6.525 27.004 14.517 42.742 14.946 18.657.507 38.005-1.884 55.056-9.522 12.74-5.706 22.818-15.148 34.995-21.627 10.165-5.41 22.078-8.153 33.078-11.697 17.802-5.735 31.181 3.919 44.863 13.629 13.518 9.592 35.558 23.46 52.822 24.035 18.863.63 42.37-11.398 56.514-22.765 13.975-11.233 24.346-23.961 43.832-27.448C804.28.386 820.33 9.466 829.632 22.178c11.62 15.88 31.565 30.872 52.558 31.984 8.875.47 20.179 1.888 25.65-5.761"
      stroke={colorPeacockLight}
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </StyledDivider>
);

const StyledDivider = styled.svg`
  max-width: 91rem;
  width: 100%;
  display: block;

  @media (max-width: 575px) {
    margin: ${spaceStackCenterQuad};
  }

  @media (min-width: 576px) {
    margin: ${spaceStackCenterOct};
  }
`;

export default Divider;


