import React, { memo } from 'react';
import { View as UpperSection } from 'react-native';
import { LoginForm } from '@components/forms/';
import { AuthContainer as LoginContainer } from '@components/wrappers';
import { GreyText as Description, LogoText } from '@components/texts';

export const LoginView: React.FC = memo(() => (
  <LoginContainer>
    <UpperSection>
      <Description>Login to continue using our app.</Description>
      <LoginForm />
    </UpperSection>
    <LogoText />
  </LoginContainer>
));
LoginView.displayName = 'LoginView';
