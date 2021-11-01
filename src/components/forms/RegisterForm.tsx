import React, { useCallback } from 'react';
import { Formik } from 'formik';
import styled from 'styled-components/native';
import { moderateScale, scale } from '@utils/helpers/dimensions';
import { useNavigation } from '@react-navigation/native';
import { TouchableWithoutFeedback } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { PrimaryButton } from '..';

export const RegisterForm: React.FC = () => {
  const submit = useCallback(() => {
    console.tron.log('sth');
  }, []);
  const { navigate } = useNavigation();
  const navigateToLogin = useCallback(() => {
    navigate('LoginScreen');
  }, []);

  return (
    <Formik
      initialValues={{ email: '', password: '', confirmPassword: '' }}
      onSubmit={values => console.tron.log(values)}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <>
          <KeyboardAwareScrollView
            extraScrollHeight={15}
            enableOnAndroid={true}
            style={{ marginHorizontal: -20 }}
            contentContainerStyle={{ paddingHorizontal: 20 }}
          >
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
              <BoxShadow>
                <Input
                  onChangeText={handleChange('confirmPassword')}
                  onBlur={handleBlur('confirmPassword')}
                  value={values.confirmPassword}
                />
                <Label>Confirm Password</Label>
              </BoxShadow>
            </MiddleSection>
            <ButtonContainer>
              <PrimaryButton onPress={submit}>Register</PrimaryButton>
            </ButtonContainer>
            <TouchableWithoutFeedback onPress={navigateToLogin}>
              <FlexContainer>
                <QuestionText>Already have an account?</QuestionText>
                <GreenText>Login</GreenText>
              </FlexContainer>
            </TouchableWithoutFeedback>
          </KeyboardAwareScrollView>
        </>
      )}
    </Formik>
  );
};
const MiddleSection = styled.View`
  padding-vertical: ${moderateScale(52, 2)}px;
`;
const BoxShadow = styled.View`
  border-radius: 10px;
  padding: -20px;
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
