import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...rest}
    render={() => {
      return localStorage.getItem('token') ? (
        <Component />
      ) : (
        <Redirect to="/" />
      );
    }}
  />
);

export default PrivateRoute;
