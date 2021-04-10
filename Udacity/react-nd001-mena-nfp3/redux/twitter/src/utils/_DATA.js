import tweetsData from '../db/tweets.json'
import usersData from '../db/users.json'

let tweets = tweetsData
let users = usersData

export function _getUsers() {
  return new Promise((res, rej) => {
    setTimeout(() => res({ ...users }), 1000)
  })
}

export function _getTweets() {
  return new Promise((res, rej) => {
    setTimeout(() => res({ ...tweets }), 1000)
  })
}

export function _saveLikeToggle({ id, hasLiked, authedUser }) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      tweets = {
        ...tweets,
        [id]: {
          ...tweets[id],
          likes:
            hasLiked === true
              ? tweets[id].likes.filter((uid) => uid !== authedUser)
              : tweets[id].likes.concat([authedUser]),
        },
      }

      res()
    }, 500)
  })
}

function generateUID() {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  )
}

function formatTweet({ author, text, replyingTo = null }) {
  return {
    author,
    id: generateUID(),
    likes: [],
    replies: [],
    text,
    timestamp: Date.now(),
    replyingTo,
  }
}

export function _saveTweet({ text, author, replyingTo }) {
  return new Promise((res, rej) => {
    const formattedTweet = formatTweet({
      text,
      author,
      replyingTo,
    })

    setTimeout(() => {
      tweets = {
        ...tweets,
        [formattedTweet.id]: formattedTweet,
      }

      users = {
        ...users,
        [author]: {
          ...users[author],
          tweets: users[author].tweets.concat([formattedTweet.id]),
        },
      }

      res(formattedTweet)
    }, 1000)
  })
}
