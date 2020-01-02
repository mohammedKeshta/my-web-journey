import React, { useState, useEffect } from 'react';

import { Typography, Avatar, Button } from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';
import { withRouter } from 'react-router-dom';

import firebase from '../firebase';
import { collectionIdsAndDoc } from '../../util/utilities';
import Posts from '../Posts';

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    margin: theme.spacing.unit * 3
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  submit: {
    width: '100px'
  },
  flex: {
    display: 'flex',
    'justify-content': 'space-between',
    'align-items': 'center'
  },
  profile: {
    display: 'flex',
    'align-items': 'center'
  }
});

const Home = ({ classes, history }) => {
  if (!firebase.getCurrentUsername()) {
    // Not Logged in
    history.replace('/login');
    return null;
  }

  const [posts, setPosts] = useState([]);
  const { displayName, photoURL, uid } = firebase.auth.currentUser;

  const logout = async () => {
    await firebase.logout();
    history.push('/');
  };

  useEffect(() => {
    firebase.db
      .collection(`posts`)
      .orderBy('createdAt', 'desc')
      .onSnapshot(snapshot => {
        const posts = snapshot.docs.map(collectionIdsAndDoc);
        setPosts(posts);
      });
  }, []);

  return (
    <main className={classes.main}>
      <header className={classes.flex}>
        <div className={classes.profile}>
          <Avatar className={classes.avatar} alt={displayName} src={photoURL} />
          <Typography component='h1' variant='h5'>
            Hello {firebase.getCurrentUsername()}
          </Typography>
        </div>
        <Button
          type='submit'
          fullWidth
          variant='contained'
          color='secondary'
          onClick={logout}
          className={classes.submit}>
          Logout
        </Button>
      </header>

      <Posts posts={posts} />
    </main>
  );
};

export default withRouter(withStyles(styles)(Home));
