import React, { useCallback } from 'react';
import { Formik } from 'formik';
import styled from 'styled-components/native';
import { moderateScale, scale } from '@utils/helpers/dimensions';
import { useNavigation } from '@react-navigation/native';
import { TouchableWithoutFeedback } from 'react-native';

import { PrimaryButton } from '..';

export const LoginForm: React.FC = () => {
  const submit = useCallback(() => {
    console.tron.log('sth');
  }, []);
  const { navigate } = useNavigation();
  const navigateToRegister = useCallback(() => {
    navigate('RegisterScreen');
  }, []);
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={values => console.tron.log(values)}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <>
          <MiddleSection>
            <BoxShadow>
              <Input
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
              <Label>Email</Label>
            </BoxShadow>
            <BoxShadow>
              <Input
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
              />
              <Label>Password</Label>
            </BoxShadow>
            <GreenText>Forgot Password?</GreenText>
          </MiddleSection>
          <ButtonContainer>
            <PrimaryButton onPress={submit}>Login</PrimaryButton>
          </ButtonContainer>
          <TouchableWithoutFeedback onPress={navigateToRegister}>
            <FlexContainer>
              <QuestionText>Don&apos;t have an account?</QuestionText>
              <GreenText>Register</GreenText>
            </FlexContainer>
          </TouchableWithoutFeedback>
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
const Label = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Poppins.PoppinsMedium};
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => scale(theme.fonts.size.s)}px;
  position: absolute;
  padding-left: ${scale(10)}px;
  z-index: -10;
`;
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
