import React, { Component } from 'react'
import { db } from './firebase'
import Posts from './components/Posts'
import { collectIdsAndDocs } from './utilites'

class App extends Component {
  state = {
    posts: [],
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
    const { posts } = this.state

    return (
      <main className="Application">
        <h1>Think Piece</h1>
        <Posts posts={posts} />
      </main>
    )
  }

  componentWillUnmount() {
    this.unsubscribe()
  }
}

export default App
