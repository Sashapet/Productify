import React, { useEffect, useState } from 'react';
import { ForgotPasswordForm } from '@components/forms/';
import { View as UpperSection } from 'react-native';
import { AuthContainer as ForgotPasswordContainer } from '@components/wrappers';
import { GreyText as Description, LogoText } from '@components/texts';
import { ForgotPasswordMsg } from '@components/other/ForgotPasswordMsg';
import { useDispatch, useSelector } from 'react-redux';
import { actions, messages, selectors } from '@state/.';

export const ForgotPasswordView: React.FC = () => {
  const [showMessage, setMessage] = useState(false);
  const messageType = useSelector(selectors.app.messageType);
  const dispatch = useDispatch();
  useEffect(() => {
    if (messageType === messages.recoverPassword) {
      setMessage(true);
    }
    return () => {
      //To initial state
      dispatch(actions.app.success({ type: null, text: null }));
    };
  }, [messageType]);

  return (
    <ForgotPasswordContainer>
      {showMessage ? (
        <ForgotPasswordMsg />
      ) : (
        <UpperSection>
          <Description>
            Please provide us with your email to get a request to reset your
            password.
          </Description>
          <ForgotPasswordForm />
        </UpperSection>
      )}
      <LogoText />
    </ForgotPasswordContainer>
  );
};
