import * as yup from 'yup';

const loginSchema = yup.object().shape({
  email: yup.string().email('Email is not valid').required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password min. 6 characters')
    .max(20, 'Password max. 20 characters')
    .required('Password is required'),
});

const registerSchema = yup.object().shape({
  //   firstname: yup
  //     .string()
  //     .max(15, 'firstNameMax')
  //     .required('firstNameReq')
  //     .matches(letterRegex, 'firstNameAplhabets')
  //     .transform((value, originalValue) =>
  //       /\s/.test(originalValue) ? NaN : value,
  //     ),
  //   lastname: yup
  //     .string()
  //     .max(15, 'lastNameMax')
  //     .required('lastNameReq')
  //     .transform((value, originalValue) =>
  //       /\s/.test(originalValue) ? NaN : value,
  //     )
  //     .matches(letterRegex, 'lastNameAplhabets'),
  email: yup.string().email('Email is not valid').required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password min. 6 characters')
    .max(20, 'Password max. 20 characters')
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .required('Confirm Password is required')
    .oneOf([yup.ref('password'), null], 'Confirm Password should match'),
});
const forgotPasswordSchema = yup.object().shape({
  email: yup.string().email('Email is not valid').required('Email is required'),
});

export const validations = {
  login: loginSchema,
  register: registerSchema,
  forgot: forgotPasswordSchema,
};
