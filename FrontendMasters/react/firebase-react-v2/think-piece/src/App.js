import React, { Component } from 'react'
import { db } from './firebase'
import Posts from './components/Posts'
import { collectIdsAndDocs } from './utilites'

class App extends Component {
  state = {
    posts: [],
  }

  componentDidMount = async () => {
    const snapshot = await db
      .collection('posts')
      .orderBy('createdAt', 'desc')
      .get()

    const posts = snapshot.docs.map(collectIdsAndDocs)
    this.setState((prevState) => {
      return {
        posts: [...prevState.posts, ...posts],
      }
    })
  }
  handleCreate = async (post) => {
    try {
      const docReference = await db.collection('posts').add(post)
      const documentSnapshot = await docReference.get()
      const newPost = collectIdsAndDocs(documentSnapshot)
      this.setState((prevState) => {
        return {
          posts: [newPost, ...prevState.posts],
        }
      })
      console.log(`Post successfully written! with id:${docReference.id}`)
    } catch (error) {
      console.error('Error writing Post: ', error)
    }
  }
  handleDelete = async (id) => {
    try {
      await db.doc(`posts/${id}`).delete()
      this.setState((prevState) => {
        return {
          posts: prevState.posts.filter((post) => post.id !== id),
        }
      })
      console.log(`Post successfully deleted! with id:${id}`)
    } catch (error) {
      console.error('Error Deleting Post: ', error)
    }
  }
  handleFavorites = async (id) => {
    try {
      const post = this.state.posts.filter((post) => post.id === id)
      await db
        .collection('posts')
        .doc(id)
        .update({
          favorites: post[0].favorites,
          ...post[0],
        })
      console.log(`Post successfully increase fav! with id:${id}`)
    } catch (error) {
      console.error('Error Update Fav Post: ', error)
    }
  }

  render() {
    const { posts } = this.state

    return (
      <main className="Application">
        <h1>Think Piece</h1>
        <Posts
          posts={posts}
          onCreate={this.handleCreate}
          onDelete={this.handleDelete}
          onStar={this.handleFavorites}
        />
      </main>
    )
  }

  componentWillUnmount() {}
}

export default App
