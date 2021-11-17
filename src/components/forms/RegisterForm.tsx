import React, { useCallback, useState } from 'react';
import { Formik } from 'formik';
import { useNavigation } from '@react-navigation/native';
import { TouchableWithoutFeedback as TouchableText } from 'react-native';
import { validations } from '@utils/validations';
import { actions } from '@state/.';
import { useDispatch } from 'react-redux';
import {
  BoxShadow,
  ButtonContainerS,
  FormContainer,
  MiddleSctionS,
} from '@components/wrappers';
import { TextInput } from '@components/inputs';
import { EyeButton, PrimaryButton } from '@components/buttons';
import { GreenText, GreyText } from '@components/texts';
import { Error } from '@components/other';
import { chooseErrorTitle } from '@utils/helpers/chooseErrorTitle';

import { Row } from '.';

export const RegisterForm: React.FC = () => {
  const [passwordEyeState, setPasswordEyeState] = useState(false);
  const [confirmEyeState, setConfirmEyeState] = useState(false);
  const [error, setError] = useState<string>();

  const dispatch = useDispatch();
  const { navigate } = useNavigation();

  const navigateToLogin = useCallback(() => {
    navigate('LoginScreen');
  }, []);
  const switchPasswordEyeState = useCallback(() => {
    setPasswordEyeState(prevState => !prevState);
  }, []);
  const switchConfirmEyeState = useCallback(() => {
    setConfirmEyeState(prevState => !prevState);
  }, []);

  return (
    <Formik
      initialValues={{ email: '', password: '', confirmPassword: '' }}
      onSubmit={async values =>
        dispatch(
          actions.auth.register({
            email: values.email,
            password: values.password,
          }),
        )
      }
      validateOnMount
      validationSchema={validations.register}
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
              <MiddleSctionS>
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
                <BoxShadow>
                  <TextInput
                    onChangeText={handleChange('confirmPassword')}
                    onBlur={handleBlur('confirmPassword')}
                    value={values.confirmPassword}
                    placeholder="Confirm Passsword"
                    secureTextEntry={confirmEyeState ? false : true}
                  />
                  <EyeButton
                    eyeState={confirmEyeState}
                    switchEyeState={switchConfirmEyeState}
                  />
                  {/* Leaving for later animation */}
                  {/* <Label>Confirm Password</Label> */}
                </BoxShadow>
              </MiddleSctionS>
              <ButtonContainerS>
                <PrimaryButton onPress={submit}>Register</PrimaryButton>
              </ButtonContainerS>
              <TouchableText onPress={navigateToLogin}>
                <Row>
                  <GreyText>Already have an account?</GreyText>
                  <GreenText>Login</GreenText>
                </Row>
              </TouchableText>
            </FormContainer>
          </>
        );
      }}
    </Formik>
  );
};

// const Label = styled.Text`
//   font-family: ${({ theme }) => theme.fonts.Poppins.PoppinsMedium};
//   color: ${({ theme }) => theme.colors.primary};
//   font-size: ${({ theme }) => scale(theme.fonts.size.s)}px;
//   position: absolute;
//   padding-left: ${scale(10)}px;
//   z-index: -10;
// `;
