// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth"
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7xpH8UrMAUDuOjq4uNT0bkNpzSGl-tpA",
  authDomain: "joker-nightlife.firebaseapp.com",
  projectId: "joker-nightlife",
  storageBucket: "joker-nightlife.appspot.com",
  messagingSenderId: "400236471618",
  appId: "1:400236471618:web:4984c0108518464b2294db",
  measurementId: "G-M8C4NX65T8"
};

// Initialize Firebase
export const firebase_app = initializeApp(firebaseConfig);
export const firebase_auth = getAuth(firebase_app);
