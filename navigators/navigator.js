import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

//screens
import LoginScreen from '../screens/Login';
import HomeScreen from '../screens/HomeScreen';
import SignInWithEmail from '../screens/SignInWithEmail'

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false }} name="Login" component={LoginScreen} />
        <Stack.Screen options={{headerShown: false }}  name="Home" component={HomeScreen} />
        <Stack.Screen options={{headerShown: false }}  name="SignInWithEmail" component={SignInWithEmail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;