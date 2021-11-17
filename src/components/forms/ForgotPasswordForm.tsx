import React, { useState } from 'react';
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
import { Error } from '@components/other';
import { chooseErrorTitle } from '@utils/helpers/chooseErrorTitle';

import { PrimaryButton } from '..';

export const ForgotPasswordForm: React.FC = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState<string>();

  return (
    <Formik
      initialValues={{ email: '' }}
      onSubmit={async values => dispatch(actions.auth.recover(values.email))}
      validationSchema={validations.forgot}
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
              </MiddleSectionM>
              <ButtonContainerM>
                <PrimaryButton onPress={submit}>Reset</PrimaryButton>
              </ButtonContainerM>
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
