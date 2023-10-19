import { View, Text } from 'react-native'
import React from 'react'
import firebase from './../components/firebaseConfig'
import { useEffect } from 'react';


const fetchUserData = () => {

  useEffect(() => {
    const subscriber = firebase.firestore()
      .collection('users')
      .doc(auth.currentUser.uid)
      .onSnapshot(documentSnapshot => {
        console.log('User data: ', documentSnapshot.data());
      });

    // Stop listening for updates when no longer required
    return () => subscriber();
  }, [auth.currentUser.uid]);

}

export default fetchUserData