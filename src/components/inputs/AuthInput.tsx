import { scale } from '@utils/helpers/dimensions';
import styled from 'styled-components/native';

export const TextInput = styled.TextInput`
  font-family: ${({ theme }) => theme.fonts.Poppins.PoppinsMedium};
  font-size: ${({ theme }) => scale(theme.fonts.size.s)}px;
  height: ${scale(71)}px;
  padding-left: ${scale(10)}px;
`;
