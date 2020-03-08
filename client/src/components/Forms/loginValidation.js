export default values => {
  const errors = {};
  const passwordRegex = /^(?=.*[a-z].*)(?=.*[A-Z].*)(?=.*\d.*)[a-zA-Z\d]{8,}$/;
  const emailRegex = /\S+@\S+\.\S+/;

  // Email validation
  if (!values.email) {
    errors.email = 'Email address is required';
  } else if (!emailRegex.test(values.email)) {
    errors.email = 'Email address is invalid';
  }

  // Password validation
  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 8) {
    errors.password = 'Password must be longer than 8 characters';
  } else if (!passwordRegex.test(values.password)) {
    errors.password = 'Password is not strong enough';
  }

  return errors;
};
