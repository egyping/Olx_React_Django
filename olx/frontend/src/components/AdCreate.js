import React, { useContext } from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import { AuthContext } from '../contexts/AuthContexts';

const BASE_URL = 'http://127.0.0.1:8000/api';

export default function AdCreate(props) {
  const { user: {token} } = useContext(AuthContext)
  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      price: '',
      make: '',
      seller: '',
      available: true,
      logo: null,
      user:'admin',
    },
    onSubmit: (values) => {
      console.log(values)

      const formData = new FormData();
      
      Object.entries(values).forEach(([key, value]) => {
        formData.append(key, value);
      });

      axios.post(`${BASE_URL}/ads/create-ad/`, formData, {
          headers: {
            "Authorization": 'Token ${token}',
          }
        })
        .then(res => {
          console.log(res.data)
        });
    },

    
  });

  const handleFileChange = (event) => {
    formik.setFieldValue('logo', event.target.files[0]);
  };

 
  
  return (
    <div>
      <h1>Create Ad</h1>
      <form onSubmit={formik.handleSubmit}>

        <label htmlFor="title">Title:</label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.title}
        />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          onChange={formik.handleChange}
          value={formik.values.description}
        />

        <label htmlFor="price">Price:</label>
        <input
          id="price"
          name="price"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.price}
        />

        <label htmlFor="make">Make:</label>
        <select
          id="make"
          name="make"
          value={formik.values.make}
          onChange={formik.handleChange}
        >
          <option value="">Select Make</option>
          <option value="German">German</option>
          <option value="Japan">Japan</option>
          <option value="USA">USA</option>
        </select>

        <label htmlFor="title">Seller:</label>
        <input
          id="seller"
          name="seller"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.title}
        />

        <label htmlFor="available">Available:</label>
        <input
          id="available"
          name="available"
          type="checkbox"
          checked={formik.values.available}
          onChange={formik.handleChange}
        />

        <label htmlFor="logo">Logo:</label>
        <input
          id="logo"
          name="logo"
          type="file"
          onChange={handleFileChange}
        />

        {/* <input
          type="hidden"
          name="user"
          value={formik.values.user}
        /> */}
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

