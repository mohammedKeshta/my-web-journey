import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import firebaseConfig from './firebaseConfig'
import { NotificationManager } from 'react-notifications'

firebase.initializeApp(firebaseConfig)

// export firestore
export const db = firebase.firestore()
export const auth = firebase.auth()

// Create an instance of the Google provider object
export const googleProvider = new firebase.auth.GoogleAuthProvider()
export const facebookProvider = new firebase.auth.FacebookAuthProvider()
export const githubProvider = new firebase.auth.GithubAuthProvider()

// Create user Profile Document
export const createUserProfileDocument = async (user, displayName = 'Anonymous') => {
  if (user) {
    // Get a reference to the place in the database where a user profile might be.
    const userRef = db.doc(`users/${user.uid}`)
    // Go and fetch the document from that location.
    const snapshot = await userRef.get()
    if (!snapshot.exists) {
      console.log('user not Exist')
      const photoURL = user.photoURL || 'https://i.pravatar.cc/300'
      const { email } = user
      const createdAt = new Date()
      try {
        await userRef.set({
          displayName,
          email,
          photoURL,
          createdAt
        })
      } catch (error) {
        let errorCode = error.code
        let errorMessage = error.message
        //The email address is already in use by another account.
        if (errorCode === 'auth/weak-password')
          NotificationManager.error(`${errorMessage}`, 'Error')
        else
          NotificationManager.error(`${errorMessage}`, `${errorCode}`)
      }
    }
    return await getUserDocument(user.uid)
  }
}

// Get Specific User
export const getUserDocument = async (uid) => {
  if (uid) {
    try {
      const userRef = db.collection('users').doc(uid);
      const snapshot = await userRef.get()
      if (snapshot.exists) {
        return snapshot.data()
      }
    } catch (error) {
      console.error('Error fetching user', error.message)
    }
  }
}
// check env
if (process.env.NODE_ENV === 'development') {
  window.firebase = firebase
}

export default firebase
