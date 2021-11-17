import { FormikErrors } from 'formik';

interface FormValues {
  email: string;
  password: string;
  confirmPassword: string;
}

export const chooseErrorTitle = (errors: FormikErrors<FormValues>) => {
  // ERROR OBJ
  const errorState = {
    email: errors.email ? errors.email : '',
    password: errors.password ? errors.password : '',
    confirmPassword: errors.confirmPassword ? errors.confirmPassword : '',
  };
  let error = '';
  if (errorState.email) {
    error = errorState.email;
  } else if (errorState.password) {
    error = errorState.password;
  } else if (errorState.confirmPassword) {
    error = errorState.confirmPassword;
  }
  return error;
};
