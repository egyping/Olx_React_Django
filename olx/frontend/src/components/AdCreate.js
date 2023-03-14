import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../api';
import { Formik, Field, Form } from 'formik';

export default function AdCreate() {
    const navigate = useNavigate();
  
    const handleSubmit = (values, { setSubmitting }) => {
      const formData = new FormData();
      formData.append('title', values.title);
      formData.append('description', values.description);
      formData.append('price', values.price);
      formData.append('make', values.make);
      formData.append('user', values.user);
      formData.append('seller', values.seller);
      formData.append('logo', values.logo);
      axios.post(`${BASE_URL}/create-ad/`, formData)
        .then(response => {
          console.log(response.data);
          navigate(`/ads/${response.data.id}`);
        })
        .catch(error => {
          console.error(error);
        })
        .finally(() => {
          setSubmitting(false);
        });
    };

  return (
    <div>
      <h1>Create NEW! Ad</h1>
      <Formik
        initialValues={{
          title: '',
          description: '',
          price: '',
          make: '',
          user: '',
          seller: '',
          logo: null,
        }}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label htmlFor="title">Title:</label>
              <Field type="text" id="title" name="title" required />
              
            </div>
            <div>
              <label htmlFor="description">Description:</label>
              <Field as="textarea" id="description" name="description" />
           
            </div>
            <div>
              <label htmlFor="price">Price:</label>
              <Field type="number" id="price" name="price" />
              
            </div>
            <div>
              <label htmlFor="make">Make:</label>
              <Field as="select" id="make" name="make" required>
                <option value="">Select a make</option>
                <option value="Japan">Japan</option>
                <option value="German">German</option>
                <option value="USA">USA</option>
              </Field>
              
            </div>
            <div>
              <label htmlFor="user">User:</label>
              <Field type="number" id="user" name="user" required />
             
            </div>
            <div>
              <label htmlFor="seller">Seller:</label>
              <Field type="text" id="seller" name="seller" required />
              
            </div>
            <div>
              <label htmlFor="logo">Logo:</label>
              <Field type="file" id="logo" name="logo" />
             
            </div>
            <div>
              <button type="submit" disabled={isSubmitting}>Create</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

