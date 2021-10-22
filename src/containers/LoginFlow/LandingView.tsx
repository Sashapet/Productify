import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import { useTranslation } from 'react-i18next';

import { locale } from '../../utils/locale';
import { DefaultButton } from '@components/index';

export const LandingView: React.FC = () => {
  const { t } = useTranslation();

  return (
    <HomeContainer>
      <Text>Productify</Text>
    </HomeContainer>
  );
};

const HomeContainer = styled.View`
  flex: 1;
`;
