import TypeInput from '../../Typography/TypeInput';

import {
  colorCharcoalLighter,
  colorLinenLight,
  colorStateDisabledLight,
  colorPeacockLight,
  spaceInsetDefault
} from '../../../theme/settings';

const FormField = TypeInput.withComponent('div').extend`
  padding: ${spaceInsetDefault};
  box-sizing: border-box;
  background-color: ${colorLinenLight};
  border: none;

  &:focus {
    outline: 2px solid ${colorPeacockLight};
  }

  &:disabled {
    background-color: ${colorStateDisabledLight};
    color: ${colorCharcoalLighter};
    cursor: not-allowed;

      &::placeholder {
        color: ${colorCharcoalLighter};
      }

      &::-webkit-input-placeholder { /* Chrome/Opera/Safari */
        color: ${colorCharcoalLighter};
      }

      &::-moz-placeholder { /* Firefox 19+ */
        color: ${colorCharcoalLighter};
      }

      &:-ms-input-placeholder { /* IE 10+ */
        color: ${colorCharcoalLighter};
      }
  }
`;

export default FormField;