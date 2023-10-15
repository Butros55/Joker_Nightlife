import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { DrawerItem, createDrawerNavigator } from '@react-navigation/drawer';
import { Image } from 'expo-image';

//screens
import Settings from '../screens/Settings';
import Tabs from './Tabs';
import CoustomDrawer from '../components/CoustomDrawer';


const Drawer = createDrawerNavigator();


const Draw = () => {
  

  return (
      <Drawer.Navigator 
          initialRouteName='Start'
          drawerContent={props => <CoustomDrawer {...props}/>}
          screenOptions={({
            swipeEnabled: true, 
            drawerType: 'slide',
            headerTintColor: 'black',
            headerTitleAlign: 'center',
            headerTitle: () => <Image style={{ width: 180, height: 42}} source={require('../assets/pictures/logo.png')}></Image>,
          })
        }
      >
        <Drawer.Screen
          name='Start'
          component={Tabs}
          options={{drawerLabel: 'Mein Joker'}}
        />
        <Drawer.Screen name='Settings' component={Settings} />
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
