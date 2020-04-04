import React, { Component } from 'react'
import { db } from '../firebase'
import { UserContext } from '../Context'

class AddPost extends Component {
  state = { title: '', content: '' }
  static contextType = UserContext

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const { title, content } = this.state

    const post = {
      title,
      content,
      user: {
        uid: this.context.user.uid,
        displayName: this.context.user.displayName,
        email: this.context.user.email,
        photoURL: this.context.user.photoURL,
      },
      favorites: 0,
      comments: 0,
      createdAt: new Date().getTime(),
    }

    db.collection('posts').add(post)

    this.setState({ title: '', content: '' })
  }

  render() {
    const { title, content } = this.state
    return (
      <form onSubmit={this.handleSubmit} className="AddPost">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={title}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="content"
          placeholder="Body"
          value={content}
          onChange={this.handleChange}
        />
        <input className="create" type="submit" value="Create Post" />
      </form>
    )
  }
}

export default AddPost
