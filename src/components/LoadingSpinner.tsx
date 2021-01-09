import React from 'react';

import Spinner from 'reactstrap/lib/Spinner';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="d-flex justify-content-center">
      <Spinner />
    </div>
  );
};

export default LoadingSpinner;
