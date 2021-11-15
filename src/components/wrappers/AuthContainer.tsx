import { moderateScale } from '@utils/helpers/dimensions';
import styled from 'styled-components/native';

export const AuthContainer = styled.View`
  flex: 1;
  width: 85%;
  margin: 0 auto;
  margin-bottom: ${moderateScale(30, 2)}px;
  justify-content: space-between;
`;
