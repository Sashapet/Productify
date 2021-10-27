import React from 'react';
import styled from 'styled-components/native';
import { RegisterForm } from '@components/forms';
import { moderateScale, scale } from '@utils/helpers/dimensions';

export const RegisterView: React.FC = () => (
  <RegisterContainer>
    <UpperSection>
      <Header>Register</Header>
      <Description>
        Register with email and password to continue using out app.
      </Description>
      <RegisterForm />
    </UpperSection>
    <LogoTextContainer>
      <LogoText1>Producti</LogoText1>
      <LogoText2>Fy</LogoText2>
    </LogoTextContainer>
  </RegisterContainer>
);

const RegisterContainer = styled.View`
  flex: 1;
  width: 85%;
  margin: ${moderateScale(30, 2)}px auto;
  justify-content: space-between;
`;
const UpperSection = styled.View``;
const Header = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.Montserrat.MontserratBold};
  font-size: ${({ theme }) => scale(theme.fonts.size.l)}px;
`;
const Description = styled.Text`
  color: ${({ theme }) => theme.colors.black02};
  font-family: ${({ theme }) => theme.fonts.Poppins.PoppinsMedium};
  font-size: ${({ theme }) => scale(theme.fonts.size.s)}px;
`;
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
