import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { loginFormSchema } from './constats';
import Button from '../common/Button';
import { LoginFormType } from './types';

const LoginForm: React.FC<LoginFormType> = ({ loginHandler, loading, initialValues }) => {
  return (
    <div className="LoginForm">
      <h1 className="text-keysign-dark heading">Login</h1>
      <h2 className="text-keysign-grey paragraph">Welcome to Keysign</h2>
      <Formik initialValues={initialValues} validationSchema={loginFormSchema} onSubmit={loginHandler}>
        {() => (
          <Form className="LoginForm__form">
            <div className="LoginForm__inputs-wrapper">
              <ErrorMessage name="accountNumber" component="span" className="formInputError" />
              <Field type="text" className="input" placeholder="Account Number" name="accountNumber" />
              <ErrorMessage name="signingKey" component="span" className="formInputError" />
              <Field type="text" className="input" placeholder="Signing Key" name="signingKey" />
            </div>
            <Button loading={loading}>Login</Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
