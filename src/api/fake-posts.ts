import { sleep } from '@src/utils';

// import Backend from './backend';

export interface Post {
  id: number;
  title: string;
}

export type Posts = Post[];

const FAKE_POSTS: Posts = [{ id: 1, title: 'hello world' }];

export async function fakeGetPosts() {
  // return await Backend.get<Posts>('some/path/file.extension');
  /* Fake this requests by sleeping for a while */
  await sleep(2000);
  return FAKE_POSTS;
}
