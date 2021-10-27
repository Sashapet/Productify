import React from 'react';
import styled from 'styled-components/native';
import { scale } from '@utils/helpers/dimensions';
import { GestureResponderEvent } from 'react-native';

interface DefaultButtonProps {
  onPress: (event: GestureResponderEvent) => void;
}

export const PrimaryButton: React.FC<DefaultButtonProps> = ({
  onPress,
  children,
}) => (
  <PrimaryTouchableWrapper onPress={onPress}>
    <ButtonTitle>{children}</ButtonTitle>
  </PrimaryTouchableWrapper>
);

export const SecondaryButton: React.FC<DefaultButtonProps> = ({
  onPress,
  children,
}) => (
  <SecondaryTouchableWrapper onPress={onPress}>
    <ButtonTitle>{children}</ButtonTitle>
  </SecondaryTouchableWrapper>
);

const ButtonTitle = styled.Text`
  font-size: ${({ theme }) => scale(theme.fonts.size.m)}px;
  font-family: ${({ theme }) => theme.fonts.Montserrat.MontserratBold};
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
`;

const PrimaryTouchableWrapper = styled.TouchableOpacity`
  border-radius: 6px;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};
  flex: 1;
`;
const SecondaryTouchableWrapper = styled.TouchableOpacity`
  border-radius: 6px;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.secondary};
  flex: 1;
`;
