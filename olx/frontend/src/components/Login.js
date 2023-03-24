import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import { authService } from '../services/authentication';



export default function Login() {
  const initialValues = {
    username: '',
    password: '',
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/auth-token/', values);
      authService.login(response.data.token)
      console.log(response.data);
      // do something with the response, like store the token in local storage
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  const validate = values => {
    const errors = {};
    if (!values.username) {
      errors.username = 'Required';
    }
    if (!values.password) {
      errors.password = 'Required';
    }
    return errors;
  };

  return (
    <div>
      <h1>Login</h1>
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validate={validate}>
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label htmlFor="username">Username</label>
              <Field type="text" name="username" />
              <ErrorMessage name="username" component="div" />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="div" />
            </div>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}


