import * as Yup from 'yup';

export const loginFormSchema = Yup.object().shape({
  accountNumber: Yup.string()
    .min(64, 'Account Number is too short')
    .max(64, 'Account Number is too long')
    .required('Account Number is required')
    .matches(/^[a-zA-Z0-9]*$/, { message: 'Account Number must only contain alphanumeric character' }),
  signingKey: Yup.string()
    .min(64, 'Signinig key is too short')
    .max(64, 'Signinig key is too long')
    .required('Signinig key is required')
    .matches(/^[a-zA-Z0-9]*$/, { message: 'Signing Key must only contain alphanumeric character' }),
});
