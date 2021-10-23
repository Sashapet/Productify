import React from 'react';

import styled from 'styled-components/native';
//dimension width
import { dWidth } from '@utils/helpers/dimensions';
// import { useTranslation } from 'react-i18next';
import { DefaultButton } from '@components/index';
// import { locale } from '../../utils/locale';
//Resizible image size
//Viewbox width and height
const vWidth = 159;
const vHeight = 152;
//width with padding
const width = dWidth * 0.4;
const aspectRatio = vHeight / vWidth;
//height dependant on aspectRatio
const height = width * aspectRatio;

export const LandingView: React.FC = () => {
  // const { t } = useTranslation();

  return (
    <HomeContainer>
      <LogoImg source={require('@assets/images/logo.png')} />
      <LogoTextContainer>
        <LogoText1>Producti</LogoText1>
        <LogoText2>Fy</LogoText2>
      </LogoTextContainer>
      <Paragraph>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
      </Paragraph>
      <ButtonContainer>
        <DefaultButton onPress={() => console.tron.log('op')}>
          Get Started
        </DefaultButton>
      </ButtonContainer>
    </HomeContainer>
  );
};

const HomeContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary};
  justify-content: center;
  align-items: center;
`;
const LogoImg = styled.Image`
  width: ${width}px;
  height: ${height}px;
`;
const LogoTextContainer = styled.View`
  padding-vertical: ${dWidth * 0.08}px;
  flex-direction: row;
`;
const LogoText1 = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.Montserrat.MontserratMedium};
  font-size: ${({ theme }) => theme.fonts.size.m}px;
`;
const LogoText2 = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.Montserrat.MontserratExtraBold};
  font-size: ${({ theme }) => theme.fonts.size.m}px;
`;
const Paragraph = styled.Text`
  color: ${({ theme }) => theme.colors.black01};
  font-family: ${({ theme }) => theme.fonts.Montserrat.MontserratMedium};
  font-size: ${({ theme }) => theme.fonts.size.s}px;
  text-align: justify;
  line-height: 22px;
  width: 85%;
  margin: 0 auto;
`;
const ButtonContainer = styled.View`
  position: absolute;
  bottom: 5%;
  width: 85%;
  margin: 0 auto;
  height: 8%;
  max-height: 72px;
`;
