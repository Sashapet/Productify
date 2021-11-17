import React, { useCallback } from 'react';
import styled from 'styled-components/native';
import { moderateScale, scale } from '@utils/helpers/dimensions';
import { SecondaryButton } from '@components/index';
import { useNavigation } from '@react-navigation/native';
import { LogoText } from '@components/texts';

export const LandingView: React.FC = () => {
  const { navigate } = useNavigation();
  const navigateToLogin = useCallback(() => {
    navigate('LoginScreen');
  }, []);

  return (
    <LandingContainer>
      <InnerContainer>
        <UpperSection>
          <LogoImg source={require('@assets/images/logo.png')} />
          <LogoText landing />
          <Paragraph>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </Paragraph>
        </UpperSection>
        <ButtonContainer>
          <SecondaryButton onPress={navigateToLogin}>
            Get Started
          </SecondaryButton>
        </ButtonContainer>
      </InnerContainer>
    </LandingContainer>
  );
};
const UpperSection = styled.View`
  align-items: center;
`;
const LandingContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary};
`;
const InnerContainer = styled.View`
  width: ${scale(85)}%;
  flex: 1;
  margin: 0 auto;
  padding: ${scale(52)}px 0;
  justify-content: space-between;
`;

const LogoImg = styled.Image`
  width: ${scale(159)}px;
  height: ${scale(152)}px;
`;

const Paragraph = styled.Text`
  color: ${({ theme }) => theme.colors.black01};
  font-family: ${({ theme }) => theme.fonts.Montserrat.MontserratMedium};
  font-size: ${({ theme }) => moderateScale(theme.fonts.size.s, 0.3)}px;
  text-align: justify;
  line-height: ${moderateScale(24, 0.7)}px;
`;
const ButtonContainer = styled.View`
  width: 100%;
  height: ${scale(71)}px;
`;
