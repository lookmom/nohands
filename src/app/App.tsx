import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { Helmet } from 'react-helmet';

import Loading from '@src/components/Loading';

const Blog = React.lazy(() => import('./pages/Blog'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

const App: React.FC = () => {
  return (
    <div>
      <Helmet>
        <title>Blog Template &middot; Bootstrap</title>
      </Helmet>

      <Router>
        <Loading>
          <Switch>
            <Redirect from="/" to="/blog" exact />

            <Route path="/blog" exact component={Blog} />

            <Route component={NotFound} />
          </Switch>
        </Loading>
      </Router>
    </div>
  );
};

export default App;
