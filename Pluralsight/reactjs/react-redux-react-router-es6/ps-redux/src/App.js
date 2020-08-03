import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import About from './pages/About'
import Home from './pages/Home'
import Header from './components/Header'
import Courses from './pages/Courses'
import Course from './pages/Course'
import PageNotFound from './pages/PageNotFound'

const App = () => {
  return (
    <>
      <ToastContainer autoClose={2000} />
      <Header />
      <div className="container-fluid">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/courses" component={Courses} />
          <Route path="/about" component={About} />
          <Route path="/course/:slug" component={Course} />
          <Route path="/course" component={Course} />
          <Redirect from="/about-page" to="about" />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </>
  )
}

export default App
