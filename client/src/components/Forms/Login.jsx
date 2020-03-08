import React from 'react';
import validate from './loginValidation';
import { useForm } from '../../hooks';

const Form = () => {
  const login = () => {
    console.log('login');
  };

  const { values, handleChange, handleSubmit, errors } = useForm(
    login,
    validate
  );

  return (
    <form onSubmit={handleSubmit} noValidate>
      <label htmlFor="email">
        Email Address
        <input
          autoComplete="off"
          className={`input ${errors.email && 'is-danger'}`}
          type="email"
          name="email"
          onChange={handleChange}
          value={values.email || ''}
          required
        />
      </label>
      {errors.email && <p className="help is-danger">{errors.email}</p>}
      <label htmlFor="password">
        Password
        <input
          className={`input ${errors.password && 'is-danger'}`}
          type="password"
          name="password"
          onChange={handleChange}
          value={values.password || ''}
          required
        />
      </label>
      {errors.password && <p>{errors.password}</p>}
      <button type="submit">Login</button>
    </form>
  );
};

export default Form;
