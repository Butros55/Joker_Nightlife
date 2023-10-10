import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

//screens
import HomeScreen from '../screens/Home';
import Coupons from '../screens/Coupons';
import News from '../screens/News';


//styles
import {
    ButtonContainer_login
  } from '../components/styles';

const Home = () => {

    const navigation = useNavigation();
    const Tab = createBottomTabNavigator();

  return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
              headerShown: false,
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Startseite') {
                  iconName = focused
                    ? 'home'
                    : 'home-outline';
                } else if (route.name === 'Aktuelles') {
                  iconName = focused ? 'md-newspaper' : 'md-newspaper-outline';
                } else if (route.name === 'Coupons') {
                  iconName = focused ? 'gift' : 'gift-outline';
                }
                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: 'blue',
              tabBarInactiveTintColor: 'gray',
            })}
        >
          <Tab.Screen name="Startseite" component={HomeScreen} />
          <Tab.Screen name="Coupons" component={Coupons} />
          <Tab.Screen name="Aktuelles" component={News} />
        </Tab.Navigator>
    );
  }

export default Home