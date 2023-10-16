import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Image } from 'expo-image';
import themeContext from '../theme/themeContext';
import { useContext } from 'react';


//screens
import Settings from '../screens/Settings';
import Tabs from './Tabs';
import CoustomDrawer from '../components/CoustomDrawer';


const Drawer = createDrawerNavigator();


const Draw = () => {

  const theme = useContext(themeContext)

  return (
      <Drawer.Navigator 
          initialRouteName='Start'
          drawerContent={props => <CoustomDrawer {...props}/>}
          screenOptions={({
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
