import React, { Component } from 'react'
import { auth } from '../firebase'
import { navigate } from '@reach/router'

class SignUp extends Component {
  state = { displayName: '', email: '', password: '' }
  unsubscribeFromSignUp = null

  handleChange = (event) => {
    const { name, value } = event.target

    this.setState({ [name]: value })
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    const { email, password, displayName } = this.state
    this.unsubscribeFromSignUp = auth
      .createUserWithEmailAndPassword(email, password)
      .then(({ user }) => {
        user.updateProfile({
          displayName,
          photoURL: 'https://i.pravatar.cc/300'
        })
      })
      .catch((error) => {
        let errorCode = error.code
        let errorMessage = error.message
        console.log(
          `Error: errorCode:${errorCode}, errorMessage: ${errorMessage}`
        )
      })
    navigate('/sing-in')
    this.setState({ displayName: '', email: '', password: '' })
  }

  render() {
    const { displayName, email, password } = this.state

    return (
      <form className="SignUp" onSubmit={this.handleSubmit}>
        <h2>Sign Up</h2>
        <input
          type="text"
          name="displayName"
          placeholder="Display Name"
          value={displayName}
          onChange={this.handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={this.handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={this.handleChange}
        />
        <input type="submit" value="Sign Up"/>
      </form>
    )
  }
}

export default SignUp
