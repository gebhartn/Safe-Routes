import React from 'react';
import validate from './validation';
import { useForm } from '../../hooks';

const Register = () => {
  const register = () => {
    console.log('register');
  };

  const { values, handleChange, handleSubmit, errors } = useForm(
    register,
    validate
  );

  return (
    <form onSubmit={handleSubmit} noValidate>
      <label htmlFor="email">
        Email Address
        <input
          autoComplete="off"
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
          type="password"
          name="password"
          onChange={handleChange}
          value={values.password || ''}
          required
        />
      </label>
      {errors.password && <p>{errors.password}</p>}
      <label htmlFor="confirm">
        Password
        <input
          type="password"
          name="confirm"
          onChange={handleChange}
          value={values.confirm || ''}
          required
        />
      </label>
      {errors.confirm && <p>{errors.confirm}</p>}
      <button type="submit">Login</button>
    </form>
  );
};

export default Register;
