import React from 'react';
import { View as UpperSection } from 'react-native';
import { RegisterForm } from '@components/forms';
import { AuthContainer as RegisterContainer } from '@components/wrappers';
import { GreyText as Description, LogoText } from '@components/texts';

export const RegisterView: React.FC = () => (
  <RegisterContainer>
    <UpperSection>
      <Description>
        Register with email and password to continue using out app.
      </Description>
      <RegisterForm />
    </UpperSection>
    <LogoText />
  </RegisterContainer>
);
