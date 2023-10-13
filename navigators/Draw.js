import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Image } from 'expo-image';

//screens
import Coupons from '../screens/Coupons';
import Settings from '../screens/Settings';
import Tabs from './Tabs';
import { useNavigation } from '@react-navigation/native';


const Drawer = createDrawerNavigator();


const Draw = ({navigation}) => {
  

  return (
      <Drawer.Navigator 
          initialRouteName='Start'
          screenListeners={{
            drawerItemPress: () => {
              navigation.navigate('Start', {screen: 'CouponsTab'})
              console.log('test')
            }
          }}
          screenOptions={{
              swipeEnabled: false, 
              drawerType: 'slide',
              headerTintColor: 'black',
              headerTitleAlign: 'center',
              headerTitle: () => <Image style={{ width: 180, height: 42}} source={require('../assets/pictures/logo.png')}></Image>,
          }}
      >
        <Drawer.Screen
          name='Start'
          component={Tabs}
          options={{drawerLabel: 'Mein Joker'}}
        />
        <Drawer.Screen
          name='CouponsDrawer'
          options={{drawerLabel: 'Coupons'}}
          component={Coupons}
        />
        <Drawer.Screen
          name='Aktuelles'
          component={Tabs}
        />
        <Drawer.Screen name='Nightshots' component={Settings} />
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
