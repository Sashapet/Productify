import { scale } from '@utils/helpers/dimensions';
import styled from 'styled-components/native';

export const BoxShadow = styled.View`
  border-radius: 10px;
  elevation: 7;
  background-color: ${({ theme }) => theme.colors.white};
  justify-content: center;
  margin-bottom: ${scale(10)}px;
`;
