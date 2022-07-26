import React from 'react';
import { Route, BrowserRouter as Router, Routes, Navigate } from 'react-router-dom';

import { IntlProvider } from '@src/components/Intl';
import Loading from '@src/components/Loading';
import { localeMap } from '@src/locales';

import Title from './components/Title';

// import Blog from './pages/Blog';
// import NotFound from './pages/NotFound';

const Blog = React.lazy(() => import('./pages/Blog'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

const App: React.FC = () => {
  return (
    <IntlProvider defaultLocale="en" localeMap={localeMap}>
      <Title />
      <Router>
        <Loading>
          <Routes>
            <Route path="/" element={<Navigate to="/blog" replace />} />

            <Route path="/blog/*" element={<Blog />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Loading>
      </Router>
    </IntlProvider>
  );
};

export default App;
