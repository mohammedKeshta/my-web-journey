import React, { Component } from 'react'
import { UserContext } from '../Context'
import SignIn from './SignIn'

class PrivateRoute extends Component {
  static contextType = UserContext

  render() {
    let { as: Comp, ...props } = this.props
    return this.context.user ? <Comp {...props} /> : <SignIn />
  }
}

export default PrivateRoute
