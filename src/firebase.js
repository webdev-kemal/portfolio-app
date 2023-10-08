// import firebase from "firebase/app";
// import "firebase/firestore"; // For the Firestore database
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "SECRET",
  authDomain: "SECRET",
  projectId: "SECRET",
  storageBucket: "SECRET",
  messagingSenderId: "SECRET",
  appId: "SECRET",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
// const db = firebase.firestore();

export default db;
