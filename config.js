import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyBEpCS6Ss1Z0uaYUGewqCndbF2XXeJ8wqY",
  authDomain: "story-hub-71898.firebaseapp.com",
  databaseURL: "https://story-hub-71898-default-rtdb.firebaseio.com",
  projectId: "story-hub-71898",
  storageBucket: "story-hub-71898.appspot.com",
  messagingSenderId: "485923781354",
  appId: "1:485923781354:web:838641b4cd14f81666f593"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();