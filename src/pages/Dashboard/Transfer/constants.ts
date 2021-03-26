import * as Yup from 'yup';

export const transferSchema = Yup.object().shape({
  accountNumber: Yup.string()
    .min(64, 'Wallet address is too short')
    .max(64, 'Wallet address is too long')
    .required('Wallet address is required')
    .matches(/^[a-zA-Z0-9]*$/, { message: 'Wallet address must only contain alphanumeric character' }),
  amount: Yup.number().integer().min(1, 'Amount must be greater than or equal to 1').required(),
});

export const initialValues = {
  accountNumber: '',
  amount: 0,
};
