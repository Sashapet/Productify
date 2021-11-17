import { scale } from '@utils/helpers/dimensions';
import React from 'react';
import styled from 'styled-components/native';

export const LogoText: React.FC<{ landing?: boolean }> = ({ landing }) => (
  <LogoTextContainer landing={landing}>
    <LogoText1 landing={landing}>Producti</LogoText1>
    <LogoText2 landing={landing}>Fy</LogoText2>
  </LogoTextContainer>
);

const LogoTextContainer = styled.View<{ landing: boolean }>`
  justify-content: center;
  width: 100%;
  flex-direction: row;
  ${({ landing }) => landing && 'padding-vertical:' + scale(10) + 'px'};
`;
const LogoText1 = styled.Text<{ landing: boolean }>`
  color: ${({ theme, landing }) =>
    landing ? theme.colors.white : theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.Montserrat.MontserratMedium};
  font-size: ${({ theme }) => scale(theme.fonts.size.l)}px;
`;
const LogoText2 = styled.Text<{ landing: boolean }>`
  color: ${({ theme, landing }) =>
    landing ? theme.colors.white : theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.Montserrat.MontserratExtraBold};
  font-size: ${({ theme }) => scale(theme.fonts.size.l)}px;
`;
