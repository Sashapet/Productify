import { moderateScale } from '@utils/helpers/dimensions';
import styled from 'styled-components/native';

export const AuthContainer = styled.View`
  flex: 1;
  width: 85%;
  margin: ${moderateScale(30, 2)}px auto;
  justify-content: space-between;
`;
