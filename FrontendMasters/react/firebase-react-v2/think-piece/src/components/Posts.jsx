import React from 'react'
import Post from './Post'
import AddPost from './AddPost'
import CurrentUser from './CurrentUser'

const Posts = ({ posts, user }) => {
  return (
    <>
      {user ? <CurrentUser {...user} /> : ''}
      <section className="Posts">
        {user && <AddPost />}
        {posts.map((post) => (
          <Post {...post} key={post.id} />
        ))}
      </section>
    </>
  )
}

export default Posts
