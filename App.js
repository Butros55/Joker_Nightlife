import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as ScreenOrientation from 'expo-screen-orientation';

const Stack = createNativeStackNavigator();
ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);

//screens
import LoginScreen from './screens/Login';
import HomeScreen from './screens/HomeScreen';
import SignInWithEmail from './screens/SingInWithEmail'

export default function App() {
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