import React from 'react';

import styled from 'styled-components/native';
//dimension width
import { dWidth } from '@utils/helpers/dimensions';
// import { useTranslation } from 'react-i18next';

// import { locale } from '../../utils/locale';
//Resizible image size
//Viewbos width and height
const vWidth = 159;
const vHeight = 152;

const width = dWidth * 0.4;
const aspectRatio = vHeight / vWidth;
//width * aspect ratio
const height = width * aspectRatio;

export const LandingView: React.FC = () => {
  // const { t } = useTranslation();

  return (
    <HomeContainer>
      <LogoImg source={require('@assets/images/logo.png')} />
      <LogoName>Producti</LogoName>
    </HomeContainer>
  );
};

const HomeContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary};
  align-items: center;
  justify-content: center;
`;
const LogoImg = styled.Image`
  width: ${width}px;
  height: ${height}px;
`;
const LogoName = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.Poppins.PoppinsExtraBold};
  font-size: 20px;
`;
