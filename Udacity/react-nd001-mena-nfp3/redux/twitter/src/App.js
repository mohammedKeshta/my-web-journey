import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import { Switch, Route } from 'react-router-dom'
import { handleInitialData } from './actions/shared.action'
import { Dashboard, TweetDetails } from './views'
import { Nav, NewTweet } from './components'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Fragment>
        <LoadingBar />
        <div className="container">
          <Nav />
          {this.props.loading === true ? null : (
            <Switch>
              <Route path="/" exact component={Dashboard} />
              <Route path="/tweet/:id" component={TweetDetails} />
              <Route path="/new" component={NewTweet} />
            </Switch>
          )}
        </div>
      </Fragment>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null,
  }
}

export default connect(mapStateToProps)(App)
