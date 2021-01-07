import React from 'react';

import Spinner from 'reactstrap/lib/Spinner';

const Loading: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <React.Suspense fallback={<Spinner />}>{ children }</React.Suspense>
  );
};

export default Loading;
