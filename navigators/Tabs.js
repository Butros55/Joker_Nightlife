import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

//screens
import HomeScreen from '../screens/Home';
import Coupons from '../screens/Coupons';
import News from '../screens/News';
import Pictures from '../screens/Pictures'


//styles
import {
    ButtonContainer_login
  } from '../components/styles';
import { white } from 'color-name';

const Tabs = () => {

    const navigation = useNavigation();
    const Tab = createBottomTabNavigator();

  return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
              headerShown: false,
              headerTransparent: false,
              headerStatusBarHeight: 20,
              headerTitleAlign: 'left',
              headerShadowVisible: false,
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Mein Joker') {
                  iconName = focused
                    ? 'home'
                    : 'home-outline';
                } else if (route.name === 'Aktuelles') {
                  iconName = focused ? 'md-newspaper' : 'md-newspaper-outline';
                } else if (route.name === 'CouponsTab') {
                  iconName = focused ? 'gift' : 'gift-outline';
                } else if (route.name === 'Fotos') {
                  iconName = focused ? 'images' : 'images-outline'
                } 
                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: 'black',
              tabBarInactiveTintColor: 'gray',
            })}
        >
          <Tab.Screen name="StartTab"
            component={HomeScreen}
            options={{tabBarLabel: 'Mein Joker' }}
          />
          <Tab.Screen
            name="CouponsTab"
            component={Coupons}
            options={{tabBarLabel: 'Coupons'}}
          />
          <Tab.Screen name="AktuellesTab" component={News} />
          <Tab.Screen name="FotosTab" component={Pictures} />
        </Tab.Navigator>
    );
  }

export default Tabs