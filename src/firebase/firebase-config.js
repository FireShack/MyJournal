import firebase from "firebase/app";
import "firebase/firebase-firestore";
import "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBdk7Pvkfgdy4v_rbvOGMMQL4wBZuXmgpk",
  authDomain: "notes-app-61ffc.firebaseapp.com",
  projectId: "notes-app-61ffc",
  storageBucket: "notes-app-61ffc.appspot.com",
  messagingSenderId: "279030726447",
  appId: "1:279030726447:web:542dc843032169debbebda",
  measurementId: "G-2N7ZQ9N0D7",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
