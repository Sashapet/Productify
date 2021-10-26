import React, { useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useTranslation } from 'react-i18next';
import { lightTheme } from '@assets/theme/theme';
import RNBootSplash from 'react-native-bootsplash';
import { ThemeProvider } from 'styled-components/native';

import { LandingView } from '../containers/LoginFlow';

const Navigator = () => {
  const { t } = useTranslation('tabLabels');

  const Stack = createStackNavigator();

  //hide splash
  const hideSplash = useCallback(() => {
    RNBootSplash.hide({ fade: true });
  }, []);

  return (
    <ThemeProvider theme={lightTheme}>
      <NavigationContainer onReady={hideSplash}>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="LandingScreen" component={LandingView} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default Navigator;
