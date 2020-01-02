import React, { useState, useEffect } from 'react';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { CssBaseline, CircularProgress } from '@material-ui/core';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from '../Home';
import Login from '../Login';
import Register from '../Register';

import firebas from '../firebase';

const theme = createMuiTheme();

const App = () => {
  const [firebaseInitialized, setFirebaseInitialized] = useState(false);

  useEffect(() => {
    firebas.isInitialized().then(val => {
      setFirebaseInitialized(val);
    });
  });

  return firebaseInitialized !== false ? (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
        </Switch>
      </Router>
    </MuiThemeProvider>
  ) : (
    <div id='loader'>
      <CircularProgress />
    </div>
  );
};

export default App;
