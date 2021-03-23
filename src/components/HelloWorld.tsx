import React from 'react';

import Alert from 'reactstrap/lib/Alert';

import { fakeGetPosts } from '@src/api';
import { useAsyncResult } from '@src/utils';

import LoadingSpinner from './LoadingSpinner';

const HelloWorld: React.FC = () => {
  const [loading, posts] = useAsyncResult(fakeGetPosts);

  if (loading) return <LoadingSpinner />;

  // return <Alert>Hello Static World</Alert>;
  return <>{posts && posts.map((post) => <Alert key={post.id}>{post.title}</Alert>)}</>;
};

export default HelloWorld;
