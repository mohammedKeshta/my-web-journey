import React, { Component } from 'react'
import { db } from '../firebase'

class AddPost extends Component {
  state = { title: '', content: '' }

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
        uid: new Date().getTime(),
        displayName: 'Mohammed Elzanaty',
        email: 'mohammedelzanaty129@gmail.com',
        photoURL: 'http://placekitten.com/g/200/200',
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
