import { scale } from '@utils/helpers/dimensions';
import styled from 'styled-components/native';

export const GreenHeader = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.Montserrat.MontserratBold};
  font-size: ${({ theme }) => scale(theme.fonts.size.l)}px;
`;
