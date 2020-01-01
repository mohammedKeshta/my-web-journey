import React, { useState } from 'react';

const AddPost = ({ onCreate }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const post = {
    id: Date.now().toString(),
    title,
    content,
    user: {
      uid: '1111',
      displayName: 'Mohammed Elzanaty',
      email: 'mohammedelzanaty129@gmail.com',
      photoURL: 'http://placekitten.com/g/200/200'
    },
    favorites: 0,
    comments: 0,
    createdAt: new Date()
  };

  const handleSubmit = event => {
    event.preventDefault();
    onCreate(post);
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className='AddPost'>
      <input
        type='text'
        name='title'
        placeholder='Title'
        value={title}
        onChange={event => setTitle(event.target.value)}
      />
      <input
        type='text'
        name='content'
        placeholder='Body'
        value={content}
        onChange={event => setContent(event.target.value)}
      />
      <input className='create' type='submit' value='Create Post' />
    </form>
  );
};

export default AddPost;
