import React, { useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { lightTheme } from '@assets/theme/theme';
import RNBootSplash from 'react-native-bootsplash';
import { ThemeProvider } from 'styled-components/native';
import { COLORS, FONTS } from '@assets/theme';
import { useSelector } from 'react-redux';
import { selectors } from '@state/selectors';
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native';
import { HomeView } from '@containers/HomeFlow';
import {
  ForgotPasswordView,
  LandingView,
  LoginView,
  RegisterView,
} from '@containers/LoginFlow';
import { scale } from '@utils/helpers/dimensions';

import { ROUTES } from './RouteNames';

const Navigator = () => {
  const Stack = createStackNavigator();

  const user = useSelector(selectors.auth.user);
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
              screenOptions={{
                cardStyle: { backgroundColor: COLORS.white },
                headerTintColor: COLORS.primary,
                headerTitleStyle: {
                  fontFamily: FONTS.Montserrat.MontserratBold,
                  fontSize: scale(FONTS.size.l),
                },
              }}
            >
              {user ? (
                <Stack.Screen name={ROUTES.HomeScreen} component={HomeView} />
              ) : (
                <>
                  <Stack.Screen
                    options={{ headerShown: false }}
                    name={ROUTES.LandingScreen}
                    component={LandingView}
                  />
                  <Stack.Screen
                    options={{
                      headerTitle: 'Login',
                    }}
                    name={ROUTES.LoginScreen}
                    component={LoginView}
                  />
                  <Stack.Screen
                    options={{
                      headerTitle: 'Register',
                    }}
                    name={ROUTES.RegisterScreen}
                    component={RegisterView}
                  />
                  <Stack.Screen
                    options={{
                      headerTitle: 'Forgot Password?',
                    }}
                    name={ROUTES.ForgotPasswordScreen}
                    component={ForgotPasswordView}
                  />
                </>
              )}
            </Stack.Navigator>
          </NavigationContainer>
        </View>
      </TouchableWithoutFeedback>
    </ThemeProvider>
  );
};

export default Navigator;
