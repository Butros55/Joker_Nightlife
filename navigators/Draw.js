import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Image } from 'expo-image';
import themeContext from '../context/themeContext';
import { useContext, useState } from 'react';
import firebase  from '../components/firebaseConfig';
import { useEffect } from 'react';
import { setItem } from '../components/asyncStorage'


//screens
import Tabs from './Tabs';
import CoustomDrawer from '../components/CoustomDrawer';


const Drawer = createDrawerNavigator();
const auth = firebase.auth();


const Draw = () => {
  
  
  const theme = useContext(themeContext)
  
  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    const subscriber = firebase.firestore()
    .collection('users')
    .doc(auth.currentUser.uid)
    .onSnapshot(documentSnapshot => {
      console.log('User data: ', documentSnapshot.data());
      setItem('vorname',documentSnapshot.data().vorname);
      setItem('nachname',documentSnapshot.data().nachname);
    });

  // Stop listening for updates when no longer required
  return () => subscriber();
  }


  return (
      <Drawer.Navigator 
          initialRouteName='Start'
          drawerContent={props => <CoustomDrawer {...props}/>}
          screenOptions={({
            headerShown: false,
            swipeEnabled: true, 
            drawerType: 'slide',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: theme.layout
            },
            headerTintColor: theme.text,
            headerTitle: () => <Image style={{ width: 180, height: 42, backgroundColor: theme.layout, tintColor: theme.text}} source={require('../assets/pictures/logo.png')}></Image>,
          })
        }
      >
        <Drawer.Screen
          name='Start'
          component={Tabs}
          options={{drawerLabel: 'Mein Joker'}}
        />
      </Drawer.Navigator>
  )
}

export default Draw

const styles = StyleSheet.create({

  logo: {
    top: '15%',
    tintColor: 'black'
  },
})
