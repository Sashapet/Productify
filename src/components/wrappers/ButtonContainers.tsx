import { scale, verticalScale } from '@utils/helpers/dimensions';
import styled from 'styled-components/native';

export const ButtonContainerS = styled.View`
  height: ${scale(71)}px;
  margin-bottom: ${scale(10)}px;
`;
export const ButtonContainerM = styled.View`
  height: ${scale(71)}px;
  margin-bottom: ${verticalScale(150)}px;
`;
