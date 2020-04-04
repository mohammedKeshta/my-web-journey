import React, { Component } from 'react'
import { UserContext } from '../Context'
import { Link, navigate } from '@reach/router'
import {
  auth,
  facebookProvider,
  githubProvider,
  googleProvider,
} from '../firebase'
import { NotificationManager } from 'react-notifications'

class SignIn extends Component {
  static contextType = UserContext

  state = { email: '', password: '' }

  handleChange = (event) => {
    const { name, value } = event.target

    this.setState({ [name]: value })
  }

  handleAuthCallback = ({ user }) => {
    this.context.setUser(user)
    NotificationManager.success(`${user.displayName}`, 'Welcome Back, ')
    this.setState({ email: '', password: '' })
    navigate('/')
  }

  handleError = (error) => {
    let errorMessage = error.message
    NotificationManager.error(`Error: ${errorMessage}`, 'Error', 5000)
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { email, password } = this.state
    auth
      .signInWithEmailAndPassword(email, password)
      .then(this.handleAuthCallback)
      .catch(this.handleError)
  }

  handleAuthenticateWithGoogle = () => {
    auth
      .signInWithPopup(googleProvider)
      .then(this.handleAuthCallback)
      .catch(this.handleError)
  }

  handleAuthenticateWithFacebook = () => {
    auth
      .signInWithPopup(facebookProvider)
      .then(this.handleAuthCallback)
      .catch(this.handleError)
  }

  handleAuthenticateWithGithub = () => {
    auth
      .signInWithPopup(githubProvider)
      .then(this.handleAuthCallback)
      .catch(this.handleError)
  }

  handleAuthenticateWithAnonymous = () => {
    auth
      .signInAnonymously()
      .then(() => {
        this.context.setUser({ displayName: 'Anonymous' })
        NotificationManager.success(`Anonymous`, 'Welcome Back, ')
        this.setState({ email: '', password: '' })
        navigate('posts')
      })
      .catch(this.handleError)
  }

  render() {
    const { email, password } = this.state

    return (
      <form className="SignIn" onSubmit={this.handleSubmit}>
        <h2>Sign In</h2>
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
        <button type="submit">Sign In</button>
        <h3 className="text-center">Or Signin With</h3>
        <ul className="social">
          {/*Github*/}
          <li onClick={this.handleAuthenticateWithGithub}>
            <img
              src="https://image.flaticon.com/icons/svg/2111/2111425.svg"
              alt=""
            />
          </li>
          {/*Google*/}
          <li onClick={this.handleAuthenticateWithGoogle}>
            <img
              src="https://image.flaticon.com/icons/svg/145/145804.svg"
              alt=""
            />
          </li>
          {/*FaceBook*/}
          <li onClick={this.handleAuthenticateWithFacebook}>
            <img
              src="https://image.flaticon.com/icons/svg/145/145802.svg"
              alt=""
            />
          </li>
          {/*Anonymous*/}
          <li onClick={this.handleAuthenticateWithAnonymous}>
            <img
              src="https://image.flaticon.com/icons/svg/149/149071.svg"
              alt=""
            />
          </li>
        </ul>
        <Link to="../sing-up" className="text-center d-block">
          Create A new Account
        </Link>
      </form>
    )
  }
}

export default SignIn
