import React, { useState } from 'react';
import firebase from '../firebase';

import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  }
});

const AddPost = props => {
  const { classes } = props;
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const currentUser = firebase.auth.currentUser;
  const post = {
    title,
    content,
    user: {
      uid: currentUser.uid,
      displayName: currentUser.displayName,
      email: currentUser.email,
      photoURL: currentUser.photoURL || 'https://www.fillmurray.com/300/300'
    },
    favorites: 0,
    stars: 0,
    comments: 0,
    createdAt: new Date()
  };
  const handleSubmit = async event => {
    event.preventDefault();
    await firebase.db.collection('posts').add(post);
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className='AddPost'>
      <FormControl margin='normal' required fullWidth>
        <InputLabel htmlFor='title'>Title</InputLabel>
        <Input
          id='title'
          name='title'
          autoComplete='on'
          autoFocus
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </FormControl>

      <FormControl margin='normal' required fullWidth>
        <InputLabel htmlFor='content'>Content</InputLabel>
        <Input
          id='content'
          name='content'
          autoComplete='on'
          placeholder='Body'
          value={content}
          onChange={e => setContent(e.target.value)}
        />
      </FormControl>

      <Button type='submit' fullWidth variant='contained' color='secondary' to='/register' className={classes.submit}>
        Create Post
      </Button>
    </form>
  );
};

export default withStyles(styles)(AddPost);
