import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//screens
import LoginScreen from '../screens/Login';
import OnboardingScreen from '../screens/OnboardingScreen';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='OnboardingScreen'>
        <Stack.Screen options={{headerShown: false }}  name="OnboardingScreen" component={OnboardingScreen} />
        <Stack.Screen options={{headerShown: false }} name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;