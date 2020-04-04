import React, { Component } from 'react'
import { db } from './firebase'
import Posts from './components/Posts'
import { collectIdsAndDocs } from './utilites'
import { Router, Link } from '@reach/router'
import NotFound from './components/NotFound'
import { UserContext } from './Context'
import PrivateRoute from './components/PrivateRoute'
import About from './components/About'
import SignUp from './components/SignUp'

class App extends Component {
  state = {
    posts: [],
    user: null,
    setUser: (user) => {
      this.setState({ user })
    },
  }

  unsubscribe = null

  componentDidMount = async () => {
    this.unsubscribe = db
      .collection('posts')
      .orderBy('createdAt', 'desc')
      .onSnapshot((querySnapshot) => {
        const posts = querySnapshot.docs.map(collectIdsAndDocs)
        this.setState({ posts })
      })
  }

  render() {
    const { posts, user } = this.state

    return (
      <main className="Application">
        <div className="header">
          <div className="logo">
            <h1>Think Piece</h1>
          </div>
          <nav>
            <ul>
              <li><Link to="posts">Posts</Link></li>
              <li><Link to="about">About</Link></li>
            </ul>
          </nav>
        </div>
        <UserContext.Provider value={this.state}>
          <Router>
            <PrivateRoute as={Posts} posts={posts} path="/posts" />
            <About path='about' />
            <SignUp path='sing-up' />
            <NotFound default />
          </Router>
        </UserContext.Provider>
      </main>
    )
  }

  componentWillUnmount() {
    this.unsubscribe()
  }
}

export default App
