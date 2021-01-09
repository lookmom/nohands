import React from 'react';

import Spinner from 'reactstrap/lib/Spinner';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="d-flex justify-content-center">
      <Spinner className="my-3" />
    </div>
  );
};

export default LoadingSpinner;
