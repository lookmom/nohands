import React from 'react';
import { Spinner } from 'reactstrap';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="d-flex justify-content-center">
      <Spinner className="my-3" />
    </div>
  );
};

export default LoadingSpinner;
