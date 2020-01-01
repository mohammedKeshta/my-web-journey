import React, { useState } from 'react';
import Posts from './Posts';

import POSTS from '../util/POSTS';

const Application = () => {
  const [posts, setPosts] = useState(POSTS);
  console.log(posts.length)
  return (
    <main className='Application'>
      <h1>Think Piece</h1>
      <Posts
        posts={posts}
        onCreate={post => {
          setPosts([post, ...posts]);
        }}
      />
    </main>
  );
};

export default Application;
