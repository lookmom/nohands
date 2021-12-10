import React from 'react';
import { Alert } from 'reactstrap';

import { fakeGetPosts } from '@src/api';
import { useLazy } from '@src/utils';

import LoadingSpinner from './LoadingSpinner';

const HelloWorld: React.FC = () => {
  const { isLoading, data: posts } = useLazy(fakeGetPosts);

  if (isLoading) return <LoadingSpinner />;

  // return <Alert>Hello Static World</Alert>;
  return <>{posts && posts.map((post) => <Alert key={post.id}>{post.title}</Alert>)}</>;
};

export default HelloWorld;
