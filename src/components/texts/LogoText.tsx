import { scale } from '@utils/helpers/dimensions';
import React from 'react';
import styled from 'styled-components/native';

export const LogoText: React.FC = () => (
  <LogoTextContainer>
    <LogoText1>Producti</LogoText1>
    <LogoText2>Fy</LogoText2>
  </LogoTextContainer>
);

const LogoTextContainer = styled.View`
  justify-content: center;
  width: 100%;
  flex-direction: row;
`;
const LogoText1 = styled.Text`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.Montserrat.MontserratMedium};
  font-size: ${({ theme }) => scale(theme.fonts.size.l)}px;
`;
const LogoText2 = styled.Text`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.Montserrat.MontserratExtraBold};
  font-size: ${({ theme }) => scale(theme.fonts.size.l)}px;
`;
