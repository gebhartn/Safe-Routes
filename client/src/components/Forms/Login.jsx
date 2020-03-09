import React from 'react';
import { submitLogin } from '../../services';

const Form = () => {
  const [errors, setErrors] = React.useState({});
  const [values, setValues] = React.useState({});

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const { email, password } = values;
    const result = await submitLogin({ email, password });
    console.log(result);
  };

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
      {errors.email && <p>{errors.email}</p>}
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
      <button type="submit">Login</button>
    </form>
  );
};

export default Form;
