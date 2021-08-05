import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyCLguLghla_3881_3xP1Xgt_XaFcmnapPM",
  authDomain: "clone-31d95.firebaseapp.com",
  projectId: "clone-31d95",
  storageBucket: "clone-31d95.appspot.com",
  messagingSenderId: "824737076916",
  appId: "1:824737076916:web:ccb7689bb683d0ea7829e1",
  measurementId: "G-74FCELPJE3"
});

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };