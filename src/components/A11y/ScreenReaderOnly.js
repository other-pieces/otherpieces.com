import styled from 'styled-components';

const ScreenReaderOnly = styled.span`
  padding: 0;
  width: 1px;
  height: 1px;
  position: absolute;
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(0px 0px 99.9% 99.9%);
  overflow: hidden;
  border: 0;
`;

export default ScreenReaderOnly;
