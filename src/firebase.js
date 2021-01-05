import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDtfMu1LCiT6sqCF17BC_8OjQwIjP9Y1fA",
  authDomain: "my-project-124dc.firebaseapp.com",
  databaseURL: "https://my-project-124dc.firebaseio.com",
  projectId: "my-project-124dc",
  storageBucket: "my-project-124dc.appspot.com",
  messagingSenderId: "458706594279",
  appId: "1:458706594279:web:16804769f81f3ccf2a7542"
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const db = firebase.firestore();
const auth = firebase.auth()

export { db, auth }