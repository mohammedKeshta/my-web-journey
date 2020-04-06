import React, { useContext } from 'react'

import moment from 'moment'
import { db } from '../firebase'
import { NotificationManager } from 'react-notifications'
import UserContext from '../Context'

const Post = ({
  title,
  content,
  user,
  createdAt,
  stars,
  id,
  comments,
}) => {
  const state = useContext(UserContext)
  const postRef = db.collection('posts').doc(id)
  const remove = () => {
    postRef.delete().catch((error) => {
      NotificationManager.error(`Error: ${error.message}`, 'Error', 5000)
    })
  }

  const star = () => {
    postRef.update({ stars: stars + 1 }).catch((error) => {
      NotificationManager.error(`Error: ${error.message}`, 'Error', 5000)
    })
  }

  return (
    <article className="Post">
      <div className="Post--content">
        <h3>{title}</h3>
        <div>{content}</div>
      </div>
      <div className="Post--meta">
        <div>
          <p>
            <span role="img" aria-label="star">
              ⭐️
            </span>
            {stars}
          </p>
          <p>
            <span role="img" aria-label="comments">
              🙊
            </span>
            {comments}
          </p>
          <p>Posted by {user.displayName}</p>
          <p>{moment(createdAt).calendar()}</p>
        </div>
        <div>
          {state.user && (
            <button className="star" onClick={star}>
              Star
            </button>
          )}
          {state.user && state.user.uid === user.uid && (
            <button className="delete" onClick={remove}>
              Delete
            </button>
          )}
        </div>
      </div>
    </article>
  )
}

Post.defaultProps = {
  title: 'An Incredibly Hot Take',
  content:
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus est aut dolorem, dolor voluptatem assumenda possimus officia blanditiis iusto porro eaque non ab autem nihil! Alias repudiandae itaque quo provident.',
  user: {
    id: '123',
    displayName: 'Bill Murray',
    email: 'billmurray@mailinator.com',
    photoURL: 'https://www.fillmurray.com/300/300',
  },
  createdAt: new Date(),
  stars: 0,
  comments: 0,
}

export default Post
