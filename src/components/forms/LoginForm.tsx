import React, { memo, useCallback, useState } from 'react';
import {
  Keyboard,
  TouchableWithoutFeedback as TouchableText,
} from 'react-native';
import { Formik } from 'formik';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { validations } from '@utils/validations';
import { useDispatch } from 'react-redux';
import { actions } from '@state/.';
import {
  BoxShadow,
  ButtonContainerS,
  FormContainer,
  MiddleSectionM,
} from '@components/wrappers/';
import { TextInput } from '@components/inputs';
import { EyeButton, PrimaryButton } from '@components/buttons';
import { GreenText, GreyText } from '@components/texts';
import { chooseErrorTitle } from '@utils/helpers/chooseErrorTitle';
import { Error } from '@components/other';

export const LoginForm: React.FC = memo(() => {
  const [passwordEyeState, setPasswordEyeState] = useState(false);
  const [error, setError] = useState<string>();
  const dispatch = useDispatch();
  const { navigate } = useNavigation();
  const navigateToRegister = useCallback(() => {
    navigate('RegisterScreen');
  }, []);
  const navigateToForgot = useCallback(() => {
    navigate('ForgotPasswordScreen');
  }, []);
  const switchPasswordEyeState = useCallback(() => {
    setPasswordEyeState(prevState => !prevState);
  }, []);
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={async values => {
        Keyboard.dismiss();
        dispatch(
          actions.auth.login({
            email: values.email,
            password: values.password,
          }),
        );
      }}
      validationSchema={validations.login}
      validateOnMount
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors }) => {
        const submit = () => {
          dispatch(actions.app.firebaseErr(null));
          setError(chooseErrorTitle(errors));
          handleSubmit();
        };

        return (
          <>
            <FormContainer>
              <MiddleSectionM>
                <Error>{error}</Error>
                <BoxShadow>
                  <TextInput
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    placeholder="Email"
                  />
                  {/* Leaving for later animation */}
                  {/* <Label>Email</Label> */}
                </BoxShadow>
                <BoxShadow>
                  <TextInput
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    placeholder="Password"
                    secureTextEntry={passwordEyeState ? false : true}
                  />
                  <EyeButton
                    eyeState={passwordEyeState}
                    switchEyeState={switchPasswordEyeState}
                  />

                  {/* Leaving for later animation */}
                  {/* <Label>Password</Label> */}
                </BoxShadow>
                <GreenText onPress={navigateToForgot}>
                  Forgot Password?
                </GreenText>
              </MiddleSectionM>
              <ButtonContainerS>
                <PrimaryButton onPress={submit}>Login</PrimaryButton>
              </ButtonContainerS>
              <TouchableText onPress={navigateToRegister}>
                <Row>
                  <GreyText>Don&apos;t have an account?</GreyText>
                  <GreenText>Register</GreenText>
                </Row>
              </TouchableText>
            </FormContainer>
          </>
        );
      }}
    </Formik>
  );
});

LoginForm.displayName = 'LoginForm';
//Reusable
export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

/* Leaving for later animation */
// const Label = styled.Text`
//   font-family: ${({ theme }) => theme.fonts.Poppins.PoppinsMedium};
//   color: ${({ theme }) => theme.colors.primary};
//   font-size: ${({ theme }) => scale(theme.fonts.size.s)}px;
//   position: absolute;
//   padding-left: ${scale(10)}px;
//   z-index: -10;
// `;
