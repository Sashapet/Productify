import React, { useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { lightTheme } from '@assets/theme/theme';
import RNBootSplash from 'react-native-bootsplash';
import { ThemeProvider } from 'styled-components/native';
import { COLORS } from '@assets/theme';
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native';

import {
  ForgotPasswordView,
  LandingView,
  LoginView,
  RegisterView,
} from '../containers/LoginFlow';

const Navigator = () => {
  const Stack = createStackNavigator();

  //hide splash
  const hideSplash = useCallback(() => {
    RNBootSplash.hide({ fade: true });
  }, []);

  return (
    <ThemeProvider theme={lightTheme}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1 }}>
          <NavigationContainer onReady={hideSplash}>
            <Stack.Navigator
              screenOptions={{ cardStyle: { backgroundColor: COLORS.white } }}
              headerMode="none"
            >
              <Stack.Screen name="LandingScreen" component={LandingView} />
              <Stack.Screen name="LoginScreen" component={LoginView} />
              <Stack.Screen name="RegisterScreen" component={RegisterView} />
              <Stack.Screen
                name="ForgotPasswordScreen"
                component={ForgotPasswordView}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </View>
      </TouchableWithoutFeedback>
    </ThemeProvider>
  );
};

export default Navigator;
