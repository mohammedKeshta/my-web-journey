import React, { Component } from 'react'
import { UserContext } from '../Context'
import { Link } from '@reach/router'

class SignIn extends Component {

  static contextType = UserContext;

  state = { email: '', password: '' }

  handleChange = (event) => {
    const { name, value } = event.target

    this.setState({ [name]: value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let user = null;
    this.context.setUser(user);
    this.setState({ email: '', password: '' })
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
        <h3 className='text-center'>Or Signin With</h3>
        <ul className='social'>
          <li><img src="https://image.flaticon.com/icons/svg/2111/2111425.svg" alt=""/></li>
          <li><img src="https://image.flaticon.com/icons/svg/145/145804.svg" alt=""/></li>
          <li><img src="https://image.flaticon.com/icons/svg/145/145802.svg" alt=""/></li>
          <li><img src="https://image.flaticon.com/icons/svg/145/145812.svg" alt=""/></li>
          <li><img src="https://image.flaticon.com/icons/svg/149/149071.svg" alt=""/></li>
        </ul>
        <Link to='../sing-up' className='text-center d-block'>Create A new Account</Link>
      </form>
    )
  }
}

export default SignIn
