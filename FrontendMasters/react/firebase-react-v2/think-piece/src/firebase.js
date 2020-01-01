import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCAykGqhN3KSr-sf0DMZ9_Ec34a9TTq7Ww',
  authDomain: 'think-piece-dba3c.firebaseapp.com',
  databaseURL: 'https://think-piece-dba3c.firebaseio.com',
  projectId: 'think-piece-dba3c',
  storageBucket: 'think-piece-dba3c.appspot.com',
  messagingSenderId: '210595155110',
  appId: '1:210595155110:web:12d0f8e7070b9101adf867',
  measurementId: 'G-GVKS8NCC8P'
};

firebase.initializeApp(firebaseConfig);

window.firebase = firebase;

export const firestore = firebase.firestore();

export default firebase;
