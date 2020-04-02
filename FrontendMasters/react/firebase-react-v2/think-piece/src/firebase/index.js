import firebase from 'firebase/app'
import 'firebase/firestore'
import firebaseConfig from './firebaseConfig'

firebase.initializeApp(firebaseConfig)

// export firestore
export const db = firebase.firestore()
// check env
if (process.env.NODE_ENV === 'development') {
  window.firebase = firebase
}

export default firebase
