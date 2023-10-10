import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Image } from 'expo-image';

//screens
import Settings from '../screens/Settings';
import Home from './Tab';


const Drawer = createDrawerNavigator();

const Draw = () => {
  return (
      <Drawer.Navigator 
          initialRouteName='Home'
          screenOptions={{
              swipeEnabled: false, 
              drawerType: 'front',
              headerTintColor: 'black',
              headerTitleAlign: 'center',
              headerTitle: () => <Image style={{ width: 180, height: 42}} source={require('../assets/pictures/logo.png')}></Image>
          }}
      >
        <Drawer.Screen name='Startseite' component={Home} />
        <Drawer.Screen name='Einstellungen' component={Settings} />
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
