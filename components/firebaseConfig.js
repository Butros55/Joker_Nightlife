import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/functions';
import 'firebase/compat/storage';


import AsyncStorage from '@react-native-async-storage/async-storage';
import {initializeAuth} from 'firebase/auth';
import {getReactNativePersistence} from 'firebase/auth';


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


const fireApp = firebase.initializeApp(firebaseConfig);

firebase.firestore();
firebase.functions();
// firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
initializeAuth(fireApp, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export default firebase;