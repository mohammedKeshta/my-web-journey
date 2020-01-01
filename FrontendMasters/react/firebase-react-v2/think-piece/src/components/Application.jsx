import React, { Component } from 'react';
import Posts from './Posts';

import POSTS from '../util/POSTS';

class Application extends Component {
  state = {
    posts: POSTS
  };

  handleCreate = post => {
    const { posts } = this.state;
    this.setState({ posts: [post, ...posts] });
  };

  render() {
    const { posts } = this.state;

    return (
      <main className='Application'>
        <h1>Think Piece</h1>
        <Posts posts={posts} onCreate={this.handleCreate} />
      </main>
    );
  }
}

export default Application;
