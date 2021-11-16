import React from 'react';
import styled from 'styled-components/native';
import { scale } from '@utils/helpers/dimensions';
import { GreyText as Description } from '@components/texts';
import { useNavigation } from '@react-navigation/native';

import { PrimaryButton } from '..';

export const ForgotPasswordMsg: React.FC = () => {
  const { goBack } = useNavigation();

  return (
    <MsgWrapper>
      <Img source={require('@assets/images/inbox.png')} />
      <Header>Check Your Email</Header>
      <Description>
        Please check your inbox and click the received link to recover password.
      </Description>
      <ButtonContainer>
        <PrimaryButton onPress={goBack}>Go to login</PrimaryButton>
      </ButtonContainer>
    </MsgWrapper>
  );
};

const MsgWrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const Img = styled.Image`
  width: ${scale(152)}px;
  height: ${scale(152)}px;
`;
const Header = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Montserrat.MontserratBold};
  font-size: ${({ theme }) => scale(theme.fonts.size.l)}px;
  color: ${({ theme }) => theme.colors.primary};
  margin-vertical: ${scale(20)}px;
`;
const ButtonContainer = styled.View`
  width: 100%;
  height: ${scale(71)}px;
  margin-top: ${scale(20)}px;
`;
