import React, { Component } from 'react'
import { auth, db } from './firebase'
import Posts from './components/Posts'
import { collectIdsAndDocs } from './utilites'
import { Router, Link, navigate } from '@reach/router'
import NotFound from './components/NotFound'
import { UserProvider } from './Context'
import About from './components/About'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import 'react-notifications/lib/notifications.css'
import { NotificationContainer } from 'react-notifications'

class App extends Component {
  state = {
    posts: [],
    user: null,
    setUser: (user) => {
      this.setState({ user })
    }
  }
  unsubscribeFromPosts = null
  unsubscribeFromSignOut = null

  componentDidMount = async () => {
    this.unsubscribeFromPosts = db
      .collection('posts')
      .orderBy('createdAt', 'desc')
      .onSnapshot((querySnapshot) => {
        const posts = querySnapshot.docs.map(collectIdsAndDocs)
        this.setState({ posts })
      })
  }

  handleSignOut = async () => {
    this.unsubscribeFromSignOut = await auth.signOut().then(() => {
      navigate('sing-in')
      this.state.setUser(null)
    })
  }

  componentWillUnmount = () => {
    this.unsubscribeFromPosts()
    this.unsubscribeFromSignOut()
  }

  render() {
    const { posts, user } = this.state
    console.log(this.state)
    return (
      <main className="Application">
        <div className="header">
          <div className="logo">
            <h1>Think Piece</h1>
          </div>
          <nav>
            <ul>
              <li>
                <Link to="/">Posts</Link>
              </li>
              <li>
                <Link to="about">About</Link>
              </li>
              <li>
                <Link to="about" onClick={this.handleSignOut}>
                  {user ? 'Logout' : 'Login'}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <UserProvider value={this.state}>
          <Router>
            <Posts path="/" posts={posts} user={user}/>
            <About path="about"/>
            <SignIn path="sing-in"/>
            <SignUp path="sing-up"/>
            <NotFound default/>
          </Router>
        </UserProvider>

        <NotificationContainer/>
      </main>
    )
  }
}

export default App
