import React from 'react';
import { Router, Route } from 'react-router';

import App from './containers/App';
import Login from './containers/Login';
import NotFound from './components/NotFound';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App} />
    <Route path="/login" component={Login} />
    <Route path="*" component={NotFound} />
  </Router>
);

export default Routes;
