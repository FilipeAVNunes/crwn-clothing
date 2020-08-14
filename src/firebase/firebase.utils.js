import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAdBpCsnqxN0VPIjD5T8YJ0mNkQjHe9rHA",
  authDomain: "crwn-db-24e57.firebaseapp.com",
  databaseURL: "https://crwn-db-24e57.firebaseio.com",
  projectId: "crwn-db-24e57",
  storageBucket: "crwn-db-24e57.appspot.com",
  messagingSenderId: "415453776426",
  appId: "1:415453776426:web:cf3e6c49f924e568ae5153",
  measurementId: "G-WJ0BL0EJVW",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
