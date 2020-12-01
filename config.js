import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyBkQ9aYVbPT4IoRZuwm_Ua3Q_sqbUj6SQg",
  authDomain: "the-book-santa.firebaseapp.com",
  databaseURL: "https://the-book-santa.firebaseio.com",
  projectId: "the-book-santa",
  storageBucket: "the-book-santa.appspot.com",
  messagingSenderId: "700267872619",
  appId: "1:700267872619:web:c20070eb2aade9f0258c2e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
