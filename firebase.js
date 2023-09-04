// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7xpH8UrMAUDuOjq4uNT0bkNpzSGl-tpA",
  authDomain: "joker-nightlife.firebaseapp.com",
  projectId: "joker-nightlife",
  storageBucket: "joker-nightlife.appspot.com",
  messagingSenderId: "400236471618",
  appId: "1:400236471618:web:939e9a349fb590802294db",
  measurementId: "G-KQV0322JEN"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}

const auth = firebase.auth();

export { auth };