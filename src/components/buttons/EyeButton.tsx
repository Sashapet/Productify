import { scale } from '@utils/helpers/dimensions';
import React from 'react';
import styled from 'styled-components/native';
import EyeIcon from 'react-native-vector-icons/Entypo';
import { COLORS, FONTS } from '@assets/theme';

export const EyeButton: React.FC<{
  switchEyeState: (event: unknown) => void;
  eyeState: boolean;
}> = ({ switchEyeState, eyeState }) => (
  <EyeContainer onPress={switchEyeState}>
    <EyeIcon
      name={eyeState ? 'eye' : 'eye-with-line'}
      size={scale(FONTS.size.m)}
      color={COLORS.primary}
    />
  </EyeContainer>
);
const EyeContainer = styled.TouchableOpacity`
  position: absolute;
  right: ${scale(10)}px;
`;
