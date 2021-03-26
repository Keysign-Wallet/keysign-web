import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import TransactionsTable from '../../../components/TransactionsTable';
import { transferSchema, initialValues } from './constants';
import './Transfer.scss';

const Transfer: React.FC<{
  onClick: (data: { accountNumber: string; amount: number }) => void;
  buttonText: string;
}> = ({ onClick, buttonText }) => (
  <div className="Transfer dashboard-col-container">
    <div className="dashboard-left-col text-keysign-navy-blue-i Transfer__left">
      <div className="Transfer__heading heading">Transfer</div>
      <div className="Transfer__subheading paragraph text-keysign-grey">Send coins to another account.</div>
      <Formik initialValues={initialValues} validationSchema={transferSchema} onSubmit={onClick}>
        {() => (
          <Form className="Transfer__keysign">
            <ErrorMessage name="amount" component="span" className="formInputError" />
            <Field className="input Transfer__amount-input" placeholder="0" type="number" name="amount" />
            <ErrorMessage name="accountNumber" component="span" className="formInputError" />
            <Field
              className="input Transfer__account-input"
              placeholder="Wallet Address"
              type="text"
              name="accountNumber"
            />
            <button className="button Transfer__button">{buttonText}</button>
          </Form>
        )}
      </Formik>
      {/* <hr className="border-keysign-offwhite" />
      <div className="Transfer__normal">
        <input className="input Transfer__amount-input" placeholder="0" type="number" />
        <input className="input Transfer__account-input" placeholder="Wallet Address" type="text" />
        <button className="button Transfer__button">Send</button>
      </div>
    </div> */}
    </div>
    <div className="dashboard-right-col Transfer__right">
      <TransactionsTable />
    </div>
  </div>
);

export default Transfer;
