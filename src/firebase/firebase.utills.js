import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

var firebaseConfig = {
    apiKey: "AIzaSyBcdIIafq3PLoTOvn4ABY_THH5AWlf4jzQ",
    authDomain: "crwn-db-bac8f.firebaseapp.com",
    projectId: "crwn-db-bac8f",
    storageBucket: "crwn-db-bac8f.appspot.com",
    messagingSenderId: "99824320090",
    appId: "1:99824320090:web:159ab60841fe71b4f8a263",
    measurementId: "G-R2Z4KDKJ4F"
  };

  firebase.initializeApp(firebaseConfig);

  const auth=firebase.auth;
  const database = firebase.database;

  const authProvider = new firebase.auth.GoogleAuthProvider();
  

  authProvider.setCustomParameters({prompt:'select_account'});

  const signInWithGoogle= ()=>auth().signInWithPopup(authProvider);

  export {firebase, auth, authProvider, signInWithGoogle, database as default};