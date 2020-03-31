import app from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyCAykGqhN3KSr-sf0DMZ9_Ec34a9TTq7Ww',
  authDomain: 'think-piece-dba3c.firebaseapp.com',
  databaseURL: 'https://think-piece-dba3c.firebaseio.com',
  projectId: 'think-piece-dba3c',
  storageBucket: 'think-piece-dba3c.appspot.com',
  messagingSenderId: '210595155110',
  appId: '1:210595155110:web:12d0f8e7070b9101adf867',
  measurementId: 'G-GVKS8NCC8P',
}

class FirebaseOld {
  constructor() {
    app.initializeApp(config)
    this.auth = app.auth()
    this.db = app.firestore()
  }

  login(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password)
  }

  loginWithGoogle() {
    const provider = new app.auth.GoogleAuthProvider()
    return this.auth.signInWithPopup(provider)
  }

  logout() {
    return this.auth.signOut()
  }

  async register(name, email, password) {
    await this.auth.createUserWithEmailAndPassword(email, password)
    return this.auth.currentUser.updateProfile({
      displayName: name,
    })
  }

  isInitialized() {
    return new Promise((resolve) => {
      this.auth.onAuthStateChanged(resolve)
    })
  }

  getCurrentUsername() {
    return this.auth.currentUser && this.auth.currentUser.displayName
  }
}

export default new FirebaseOld()
