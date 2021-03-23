import React from 'react';

import { I18nextProvider } from 'react-i18next';
import { Redirect, Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import i18nInit from '@src/locales/i18n';
import Loading from '@src/components/Loading';

const Blog = React.lazy(() => import('./pages/Blog'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

const App: React.FC = () => {
  return (
    <I18nextProvider i18n={i18nInit}>
      <Router>
        <Loading>
          <Switch>
            <Redirect from="/" to="/blog" exact />

            <Route path="/blog" exact component={Blog} />

            <Route component={NotFound} />
          </Switch>
        </Loading>
      </Router>
    </I18nextProvider>
  );
};

export default App;
