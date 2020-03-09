import React from 'react';

const useForm = (callback, validate) => {
  const [errors, setErrors] = React.useState({});
  const [submit, setSubmit] = React.useState(false);
  const [values, setValues] = React.useState({});

  React.useEffect(() => {
    if (Object.keys(errors).length === 0 && submit) {
      callback();
    }
  }, [errors, callback, submit]);

  const handleSubmit = e => {
    if (e) e.preventDefault();
    setSubmit(true);
    setErrors(validate(values));
  };

  const handleChange = e => {
    e.persist();
    setValues(val => ({ ...val, [e.target.name]: e.target.value }));
  };

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
