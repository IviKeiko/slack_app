import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyANQcXWm2EWrkcr-7yZN8rYiSGO7sWoHWE",
  authDomain: "slackapp-48d2c.firebaseapp.com",
  projectId: "slackapp-48d2c",
  storageBucket: "slackapp-48d2c.appspot.com",
  messagingSenderId: "986641253584",
  appId: "1:986641253584:web:69bbd7ceb64465369dcad5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
