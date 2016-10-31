import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from './containers/App';
import Transactions from './containers/Transactions';
import NotFound from './components/NotFound';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App}>
      <IndexRoute component={Transactions}/>
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);

export default Routes;
