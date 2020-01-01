import React, { useState, useEffect } from 'react';
import Posts from './Posts';
import { firestore } from '../firebase';

import POSTS from '../util/POSTS';

const Application = () => {
  const [posts, setPosts] = useState(POSTS);

  useEffect(() => {
    const posts = firestore
      .collection('posts')
      .get()
      .then(snapshot => console.log({ snapshot }));
    console.log({ posts });
    return () => {
      // TODO: cleanup
    };
  }, [posts]);
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
