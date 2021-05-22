import * as firebase from 'firebase';
require('@firebase/firestore');

// When ever you are working with firestore you need to require and export firebase.firestore.
console.log(firebase.firestore);
const firebaseConfig = {
    apiKey: "AIzaSyDj5PeCi-bxKkuCrY_bFFA86nY04JL5KJ0",
    authDomain: "story-hub-2-d8394.firebaseapp.com",
    projectId: "story-hub-2-d8394",
    storageBucket: "story-hub-2-d8394.appspot.com",
    messagingSenderId: "909280991245",
    appId: "1:909280991245:web:daa7e2edbd652dad409d44"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
