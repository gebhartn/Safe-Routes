import React from 'react';
import { submitRegister } from '../../services';
import validate from './validation';

const Register = () => {
  const [errors, setErrors] = React.useState({});
  const [values, setValues] = React.useState({});

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const [list, count] = validate(values);

    setErrors(list);

    if (!count.length) {
      const { email, password } = values;
      await submitRegister({ email, password });
    }
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
