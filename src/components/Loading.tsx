import React from 'react';

import LoadingSpinner from './LoadingSpinner';

const Loading: React.FC<React.PropsWithChildren<Record<string, never>>> = ({ children }) => {
  return (
    <React.Suspense fallback={<LoadingSpinner />}>
      { children }
    </React.Suspense>
  );
};

export default Loading;
