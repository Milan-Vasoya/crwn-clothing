import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

var firebaseConfig = {
  apiKey: "AIzaSyBcdIIafq3PLoTOvn4ABY_THH5AWlf4jzQ",
  authDomain: "crwn-db-bac8f.firebaseapp.com",
  projectId: "crwn-db-bac8f",
  storageBucket: "crwn-db-bac8f.appspot.com",
  messagingSenderId: "99824320090",
  appId: "1:99824320090:web:159ab60841fe71b4f8a263",
  measurementId: "G-R2Z4KDKJ4F",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

const GoogleAuthProvider = new firebase.auth.GoogleAuthProvider();

GoogleAuthProvider.setCustomParameters({ prompt: "select_account" });

const signInWithGoogle = () => auth.signInWithPopup(GoogleAuthProvider);

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export {
  firebase,
  auth,
  GoogleAuthProvider,
  signInWithGoogle,
  getCurrentUser,
  database as default,
};
