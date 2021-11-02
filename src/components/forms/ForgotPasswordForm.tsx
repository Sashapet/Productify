import React, { useCallback } from 'react';
import { Formik } from 'formik';
import styled from 'styled-components/native';
import { moderateScale, scale, verticalScale } from '@utils/helpers/dimensions';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { PrimaryButton } from '..';

export const ForgotPasswordForm: React.FC = () => {
  const submit = useCallback(() => {
    console.tron.log('sth');
  }, []);
  return (
    <Formik
      initialValues={{ email: '' }}
      onSubmit={values => console.tron.log(values)}
    >
      {({ handleChange, handleBlur, values }) => (
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
                  placeholder="Email"
                />
                {/* Leaving for later animation */}
                {/* <Label>Email</Label> */}
              </BoxShadow>
            </MiddleSection>
            <ButtonContainer>
              <PrimaryButton onPress={submit}>Reset</PrimaryButton>
            </ButtonContainer>
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
// const Label = styled.Text`
//   font-family: ${({ theme }) => theme.fonts.Poppins.PoppinsMedium};
//   color: ${({ theme }) => theme.colors.primary};
//   font-size: ${({ theme }) => scale(theme.fonts.size.s)}px;
//   position: absolute;
//   padding-left: ${scale(10)}px;
//   z-index: -10;
// `;

const ButtonContainer = styled.View`
  height: ${scale(71)}px;
  margin-bottom: ${verticalScale(150)}px;
`;
