import styled from 'styled-components';

import TypeInput from '../../Typography/TypeInput';

import {
  colorCharcoal054,
  colorLinen098,
  colorStateDisabledLight,
  colorPeacock048,
  spaceDefault,
  spaceInsetDefault,
} from '../../../theme/settings';

const FormField = styled(TypeInput)`
  box-sizing: border-box;
  background-color: ${colorLinen098};
  border: none;

  @media (max-width: 575px) {
    padding: 1.1rem ${spaceDefault};
  }

  @media (min-width: 576px) {
    padding: ${spaceInsetDefault};
  }

  &:focus {
    outline: 2px solid ${colorPeacock048};
  }

  &:disabled {
    background-color: ${colorStateDisabledLight};
    color: ${colorCharcoal054};
    cursor: not-allowed;

    &::placeholder {
      color: ${colorCharcoal054};
    }

    &::-webkit-input-placeholder {
      /* Chrome/Opera/Safari */
      color: ${colorCharcoal054};
    }

    &::-moz-placeholder {
      /* Firefox 19+ */
      color: ${colorCharcoal054};
    }

    &:-ms-input-placeholder {
      /* IE 10+ */
      color: ${colorCharcoal054};
    }
  }
`;

export default FormField;
