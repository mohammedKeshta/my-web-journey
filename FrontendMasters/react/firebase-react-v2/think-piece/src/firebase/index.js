import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import firebaseConfig from './firebaseConfig'

firebase.initializeApp(firebaseConfig)

// export firestore
export const db = firebase.firestore()
export const auth = firebase.auth()

// Create an instance of the Google provider object
export const googleProvider = new firebase.auth.GoogleAuthProvider()
export const facebookProvider = new firebase.auth.FacebookAuthProvider()
export const githubProvider = new firebase.auth.GithubAuthProvider()
// check env
if (process.env.NODE_ENV === 'development') {
  window.firebase = firebase
}

export default firebase
