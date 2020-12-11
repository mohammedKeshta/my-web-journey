import React from 'react'
import ReactDOM from 'react-dom'
import { createBrowserHistory } from 'history'
import { Router, Route, Switch } from 'react-router-dom'

import 'assets/scss/style.scss'

// pages for this product
import LandingPage from 'views/LandingPage/LandingPage.js'

let hist = createBrowserHistory()

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/" component={LandingPage} />
    </Switch>
  </Router>,
  document.getElementById('root')
)
