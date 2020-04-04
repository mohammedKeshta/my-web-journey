import React from 'react'
import Post from './Post'
import AddPost from './AddPost'
import CurrentUser from './CurrentUser'

const Posts = ({ posts, user }) => {
  return (
    <>
      <CurrentUser {...user} />
      <section className="Posts">
        <AddPost />
        {posts.map((post) => (
          <Post {...post} key={post.id} />
        ))}
      </section>
    </>

  )
}

export default Posts
