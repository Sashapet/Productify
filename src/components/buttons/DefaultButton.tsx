import React from 'react';
import styled from 'styled-components/native';

interface DefaultButtonProps {
  onPress: (event: unknown) => void;
}

export const DefaultButton: React.FC<DefaultButtonProps> = ({
  onPress,
  children,
}) => {
  return (
    <TouchableWrapper onPress={onPress}>
      <ButtonTitle>{children}</ButtonTitle>
    </TouchableWrapper>
  );
};

const ButtonTitle = styled.Text`
  font-size: ${({ theme }) => theme.fonts.size.s}px;
  font-family: ${({ theme }) => theme.fonts.Montserrat.MontserratBold};
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
`;

const TouchableWrapper = styled.TouchableOpacity`
  border-radius: 6px;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.secondary};
  flex: 1;
  /* padding-vertical: 27px; */
`;
