import { StyleSheet, Text, View } from 'react-native'
import React, { useState , useEffect} from 'react'
import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import themeContext from '../theme/themeContext';
import { useContext } from 'react';
import {  Icon } from '@rneui/themed';


//screens
import HomeScreen from '../screens/Home';
import Coupons from '../screens/Coupons';
import News from '../screens/News';
import Pictures from '../screens/Pictures'
import Settings from '../screens/settings/Settings';


const Tabs = () => {

    const navigation = useNavigation();
    const Tab = createBottomTabNavigator();
    const theme = useContext(themeContext)


  return (
        <Tab.Navigator
            initialRouteName='StartTab'
            screenOptions={({ route }) => ({
              tabBarStyle: {backgroundColor: theme.layout},
              headerShown: false,
              headerTransparent: false,
              headerStatusBarHeight: 20,
              headerTitleAlign: 'left',
              headerShadowVisible: false,
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'StartTab') {
                  iconName = focused
                    ? 'home'
                    : 'home-outline';
                  type='ionicon'
                } else if (route.name === 'AktuellesTab') {
                  iconName = focused ? 'notifications' : 'notifications-outline';
                  type='ionicon'
                } else if (route.name === 'CouponsTab') {
                  iconName = focused ? 'percent' : 'percent-outline';
                  type='material-community'
                } else if (route.name === 'FotosTab') {
                  iconName = focused ? 'aperture' : 'aperture-outline'
                  type='ionicon'
                } else if (route.name === 'SettingsOpen') {
                  iconName = focused ? 'menu' : 'menu'
                  type='ionicon'
                } 
                // You can return any component that you like here!
                return <Icon name={iconName} size={size} color={theme.text} type={type} />;
              },
              tabBarActiveTintColor: theme.text,
              tabBarInactiveTintColor: theme.text,
            })}
        >
          <Tab.Screen name="SettingsOpen"
            component={Settings}
            options={{tabBarShowLabel: false}}
            listeners={{
              tabPress: e => {
                e.preventDefault();
                navigation.openDrawer();
              }
            }}
          />
          <Tab.Screen
            name="CouponsTab"
            component={Coupons}
            options={{tabBarShowLabel: false}}
          />
          <Tab.Screen name="StartTab"
            component={HomeScreen}
            options={{tabBarShowLabel: false, tabBarIconStyle: {}}}
          />
          <Tab.Screen name="AktuellesTab"
            component={News}
            options={{tabBarShowLabel: false}}
          />
          <Tab.Screen name="FotosTab"
            component={Pictures}
            options={{tabBarShowLabel: false}}
          />
        </Tab.Navigator>
    );
  }

export default Tabs