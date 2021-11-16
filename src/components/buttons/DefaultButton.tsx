import React from 'react';
import { ActivityIndicator } from 'react-native';
import { selectors } from '@state/selectors';
import styled from 'styled-components/native';
import { COLORS } from '@assets/theme';
import { scale } from '@utils/helpers/dimensions';
import { useSelector } from 'react-redux';

interface DefaultButtonProps {
  onPress: (event: unknown) => void;
}

export const PrimaryButton: React.FC<DefaultButtonProps> = ({
  onPress,
  children,
}) => {
  const { setOnSync } = useSelector(selectors.app.setOnSync);

  return (
    <PrimaryTouchableWrapper onPress={onPress}>
      {setOnSync ? (
        <ActivityIndicator size={'large'} color={COLORS.black01} />
      ) : (
        <ButtonTitle>{children}</ButtonTitle>
      )}
    </PrimaryTouchableWrapper>
  );
};

export const SecondaryButton: React.FC<DefaultButtonProps> = ({
  onPress,
  children,
}) => {
  const { setOnSync } = useSelector(selectors.app.setOnSync);
  return (
    <SecondaryTouchableWrapper onPress={onPress}>
      {setOnSync ? (
        <ActivityIndicator size={'large'} color={COLORS.black01} />
      ) : (
        <ButtonTitle>{children}</ButtonTitle>
      )}
    </SecondaryTouchableWrapper>
  );
};

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
