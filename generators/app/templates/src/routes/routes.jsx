import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '../components/app';
import Example from '../components/example';

export default (
  <Route path="/" component={ App }>
    <IndexRoute components={ Example } />
  </Route>
);
