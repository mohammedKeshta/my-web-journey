import React, { Component } from 'react'
import { auth, createUserProfileDocument } from '../firebase'
import { navigate } from '@reach/router'
import validator from 'validator';
import { NotificationManager } from 'react-notifications'

class SignUp extends Component {
  state = { displayName: '', email: '', password: '' }

  handleChange = (event) => {
    const { name, value } = event.target

    this.setState({ [name]: value })
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    const { email, password, displayName } = this.state
    if (!validator.isEmail(email))
      return NotificationManager.info(`Please enter a valid email`, 'Invalid Email')
    try {
      auth.createUserWithEmailAndPassword(email, password).then( async ({user}) => {
        const authedUser = await user.updateProfile({
          displayName,
          photoURL: 'https://i.pravatar.cc/300'
        })
        await createUserProfileDocument(authedUser, displayName)
        navigate('/sing-in')
        this.setState({ displayName: '', email: '', password: '' })
      })
    } catch (error) {
      let errorCode = error.code
      let errorMessage = error.message
      if (errorCode === 'auth/weak-password')
        NotificationManager.error(`${errorMessage}`, 'Invalid Password')
      //The email address is already in use by another account.
      else if (errorCode === 'auth/email-already-in-use')
        NotificationManager.error(`${errorMessage}`, 'Email Already in use')
      else NotificationManager.error(`${errorMessage}`, `${errorCode}`)
    }
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
          required
          onChange={this.handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          value={password}
          onChange={this.handleChange}
        />
        <input type="submit" value="Sign Up"/>
      </form>
    )
  }
}

export default SignUp
