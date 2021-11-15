import React from 'react';
import { ForgotPasswordForm } from '@components/forms/';
import { View as UpperSection } from 'react-native';
import { AuthContainer as ForgotPasswordContainer } from '@components/wrappers';
import { GreyText as Description, LogoText } from '@components/texts';

export const ForgotPasswordView: React.FC = () => (
  <ForgotPasswordContainer>
    <UpperSection>
      <Description>
        Please provide us with your email to get a request to reset your
        password.
      </Description>
      <ForgotPasswordForm />
    </UpperSection>
    <LogoText />
  </ForgotPasswordContainer>
);
