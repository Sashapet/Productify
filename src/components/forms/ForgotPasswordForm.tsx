import React from 'react';
import { Formik } from 'formik';
import { validations } from '@utils/validations';
import {
  BoxShadow,
  ButtonContainerM,
  FormContainer,
  MiddleSectionM,
} from '@components/wrappers';
import { TextInput } from '@components/inputs';
import { useDispatch } from 'react-redux';
import { actions } from '@state/.';

import { PrimaryButton } from '..';

export const ForgotPasswordForm: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ email: '' }}
      onSubmit={async values => dispatch(actions.auth.recover(values.email))}
      validationSchema={validations.forgot}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <>
          <FormContainer>
            <MiddleSectionM>
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
            </MiddleSectionM>
            <ButtonContainerM>
              <PrimaryButton onPress={handleSubmit}>Reset</PrimaryButton>
            </ButtonContainerM>
          </FormContainer>
        </>
      )}
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
