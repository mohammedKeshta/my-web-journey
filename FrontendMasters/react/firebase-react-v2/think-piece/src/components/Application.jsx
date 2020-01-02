import React, { useState, useEffect } from 'react';
import Posts from './Posts';
import { firestore } from '../firebase';
import { collectionIdsAndDoc } from '../util/utilities';

const Application = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    await firestore
      .collection('posts')
      .orderBy('createdAt', 'desc')
      .onSnapshot(snapshot => {
        const posts = snapshot.docs.map(collectionIdsAndDoc);
        setPosts(posts);
      });
  };

  useEffect(() => {
    fetchPosts();
    return () => fetchPosts();
  }, []);

  return (
    <main className='Application'>
      <h1>Think Piece</h1>
      <Posts posts={posts} />
    </main>
  );
};

export default Application;
