import React, { useCallback, useState } from 'react';
import { Formik } from 'formik';
import styled from 'styled-components/native';
import { moderateScale, scale } from '@utils/helpers/dimensions';
import { useNavigation } from '@react-navigation/native';
import { TouchableWithoutFeedback } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import EyeIcon from 'react-native-vector-icons/Entypo';
import { COLORS, FONTS } from '@assets/theme/';
import { validations } from '@utils/validations';

import { PrimaryButton } from '..';

export const LoginForm: React.FC = () => {
  const [passwordEye, setPasswordEye] = useState(false);

  const { navigate } = useNavigation();
  const navigateToRegister = useCallback(() => {
    navigate('RegisterScreen');
  }, []);
  const navigateToForgot = useCallback(() => {
    navigate('ForgotPasswordScreen');
  }, []);
  const switchPasswordEye = useCallback(() => {
    setPasswordEye(prevState => !prevState);
  }, []);
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={values => console.tron.log(values)}
      validationSchema={validations.login}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <>
          <KeyboardAwareScrollView
            extraScrollHeight={15}
            enableOnAndroid={true}
            style={{ marginHorizontal: -20 }}
            contentContainerStyle={{ paddingHorizontal: 20 }}
            keyboardShouldPersistTaps={'always'}
          >
            <MiddleSection>
              <BoxShadow>
                <Input
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  placeholder="Email"
                />
                {/* Leaving for later animation */}
                {/* <Label>Email</Label> */}
              </BoxShadow>
              <BoxShadow>
                <Input
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  placeholder="Password"
                  secureTextEntry={passwordEye ? false : true}
                />
                <EyeContainer onPress={switchPasswordEye}>
                  <EyeIcon
                    name={passwordEye ? 'eye' : 'eye-with-line'}
                    size={scale(FONTS.size.m)}
                    color={COLORS.primary}
                  />
                </EyeContainer>
                {/* Leaving for later animation */}
                {/* <Label>Password</Label> */}
              </BoxShadow>
              <GreenText onPress={navigateToForgot}>Forgot Password?</GreenText>
            </MiddleSection>
            <ButtonContainer>
              <PrimaryButton onPress={handleSubmit}>Login</PrimaryButton>
            </ButtonContainer>
            <TouchableWithoutFeedback onPress={navigateToRegister}>
              <FlexContainer>
                <QuestionText>Don&apos;t have an account?</QuestionText>
                <GreenText>Register</GreenText>
              </FlexContainer>
            </TouchableWithoutFeedback>
          </KeyboardAwareScrollView>
        </>
      )}
    </Formik>
  );
};
const MiddleSection = styled.View`
  padding-vertical: ${moderateScale(72, 2)}px;
`;
const BoxShadow = styled.View`
  border-radius: 10px;
  elevation: 7;
  background-color: ${({ theme }) => theme.colors.white};
  justify-content: center;
  margin-bottom: ${scale(10)}px;
`;
const Input = styled.TextInput`
  font-family: ${({ theme }) => theme.fonts.Poppins.PoppinsMedium};
  font-size: ${({ theme }) => scale(theme.fonts.size.s)}px;
  height: ${scale(71)}px;
  padding-left: ${scale(10)}px;
`;
const EyeContainer = styled.TouchableOpacity`
  position: absolute;
  right: ${scale(10)}px;
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
const GreenText = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.Poppins.PoppinsBold};
  font-size: ${({ theme }) => scale(theme.fonts.size.s)}px;
`;

const ButtonContainer = styled.View`
  height: ${scale(71)}px;
  margin-bottom: ${scale(10)}px;
`;

const QuestionText = styled.Text`
  color: ${({ theme }) => theme.colors.black02};
  font-family: ${({ theme }) => theme.fonts.Poppins.PoppinsMedium};
  font-size: ${({ theme }) => scale(theme.fonts.size.s)}px;
  padding-right: 2px;
`;
const FlexContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;
