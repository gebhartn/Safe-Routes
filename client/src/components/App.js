import React from 'react';
import { Route } from 'react-router-dom';
import { GlobalProvider as Provider } from '../contexts';

import Layout from './Layout';
import Landing from './Landing';
import Login from './Forms/Login';
import Register from './Forms/Register';

import 'normalize.css';
import '../styles/App.css';

const App = () => (
  <Layout>
    <Provider>
      <Route exact path="/" component={Landing} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </Provider>
  </Layout>
);

export default App;
