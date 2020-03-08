import React from 'react';
import { Route } from 'react-router-dom';
import { GlobalProvider as Provider } from '../contexts';
import Layout from './Layout';
import Landing from './Landing';

import 'normalize.css';
import '../styles/App.css';

const App = () => (
  <Layout>
    <Provider>
      <Route exact path="/" component={Landing} />
    </Provider>
  </Layout>
);

export default App;
