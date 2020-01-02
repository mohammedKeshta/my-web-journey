import React, { useState } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { withRouter, Link } from 'react-router-dom';
import { Typography, Paper, Avatar, Button, FormControl, Input, InputLabel } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import styles from './login.style';
import firebase from '../firebase';


function Login(props) {
  const { classes } = props;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <main className={classes.main}>
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={e => e.preventDefault() && false}>
          <FormControl margin='normal' required fullWidth>
            <InputLabel htmlFor='email'>Email Address</InputLabel>
            <Input
              id='email'
              name='email'
              autoComplete='off'
              autoFocus
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl margin='normal' required fullWidth>
            <InputLabel htmlFor='password'>Password</InputLabel>
            <Input
              name='password'
              type='password'
              id='password'
              autoComplete='off'
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </FormControl>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            onClick={login}
            className={classes.submit}>
            Sign in
          </Button>
          <Button
            type='button'
            fullWidth
            variant='contained'
            color='default'
            onClick={loginWithGoogle}
            className={classes.submit}>
            Sign in with google
          </Button>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='secondary'
            component={Link}
            to='/register'
            className={classes.submit}>
            Register
          </Button>
        </form>
      </Paper>
    </main>
  );

  async function login() {
    try {
      await firebase.login(email, password);
      props.history.replace('/');
    } catch (error) {
      alert(error.message);
    }
  }

  async function loginWithGoogle() {
    try {
      await firebase.loginWithGoogle();
      props.history.replace('/');
    } catch (error) {
      alert(error.message);
    }
  }
}

export default withRouter(withStyles(styles)(Login));
