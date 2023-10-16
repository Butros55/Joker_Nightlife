import { StyleSheet, Text, View } from 'react-native'
import React, { useState , useEffect} from 'react'
import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import themeContext from '../theme/themeContext';
import { useContext } from 'react';


//screens
import HomeScreen from '../screens/Home';
import Coupons from '../screens/Coupons';
import News from '../screens/News';
import Pictures from '../screens/Pictures'
import Settings from '../screens/Settings';


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
                } else if (route.name === 'AktuellesTab') {
                  iconName = focused ? 'notifications' : 'notifications-outline';
                } else if (route.name === 'CouponsTab') {
                  iconName = focused ? 'cash' : 'cash-outline';
                } else if (route.name === 'FotosTab') {
                  iconName = focused ? 'aperture' : 'aperture-outline'
                } else if (route.name === 'SettingsOpen') {
                  iconName = focused ? 'ellipsis-horizontal-outline' : 'ellipsis-horizontal-outline'
                } 
                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={theme.text} />;
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