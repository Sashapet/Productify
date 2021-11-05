import { scale } from '@utils/helpers/dimensions';
import styled from 'styled-components/native';

export const GreyText = styled.Text`
  color: ${({ theme }) => theme.colors.black02};
  font-family: ${({ theme }) => theme.fonts.Poppins.PoppinsMedium};
  font-size: ${({ theme }) => scale(theme.fonts.size.s)}px;
  padding-right: 2px;
`;
